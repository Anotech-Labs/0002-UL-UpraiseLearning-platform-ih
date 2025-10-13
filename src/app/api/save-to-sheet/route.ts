import { google } from "googleapis";
import { NextResponse } from "next/server";

type TutorFormBody = {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
};

type NewsletterFormBody = {
  email: string;
};

export async function POST(req: Request) {
  if (
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    return NextResponse.json(
      { error: "Missing Google Sheets environment variables" },
      { status: 500 }
    );
  }

  try {
    const { type, data } = (await req.json()) as {
      type: "tutor" | "newsletter";
      data: TutorFormBody | NewsletterFormBody;
    };

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    let range = "Tutor!A4"; // default to Tutor tab
    let values: (string | number | boolean)[][] = [];

    if (type === "tutor") {
      const { name, email, subject, phone, message } = data as TutorFormBody;
      values = [
        [name, email, subject, phone ?? "", message, new Date().toLocaleString()],
      ];
    } else if (type === "newsletter") {
      const { email } = data as NewsletterFormBody;
      range = "Newsletter!A1";
      values = [[email, new Date().toLocaleString()]];
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ message: "Saved successfully", values }, { status: 200 });
  } catch (error) {
    console.error("Google Sheets error:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
