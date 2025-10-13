export type Category =
  | "Development"
  | "Design"
  | "Marketing"
  | "Business"
  | "Accounting";

export type Instructor = {
  name: string;
  avatar: string;
  tagline?: string; // optional (from API 2)
  longDescriptionMarkdown?: string; // optional (from API 2)
};

export type Course = {
  id: string;
  title: string;
  technology: string;
  lectures: number;
  level: string;
  price: number;
  rating: number; // normalized (e.g. 0–5 instead of 0–10)
  reviews: string;
  instructor?: Instructor; // primary instructor
  instructors?: Instructor[]; // full list (if multiple instructors)
  link: string; // fallback to p.link if courseLink missing
  courseLink?: string; // explicit from API 2
  thumbnail: string;
  courseSlug: string;
  createdAt?: string; // ISO string from API 2
  updatedAt?: string; // ISO string from API 2
};
