// src/components/Container.tsx
import { type ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 max-w-[1600px] mx-auto">
      {children}
    </div>
  );
}
