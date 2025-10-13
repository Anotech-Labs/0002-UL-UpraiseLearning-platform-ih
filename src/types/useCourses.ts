// types/useCourses.ts

import type { Category, Course } from "./course";

export interface UseCoursesOptions {
  categorize?: boolean;
}

// Hook return type depending on categorize
export type UseCoursesResult<T extends boolean> = T extends true
  ? { courses: Record<Category, Course[]>; loading: boolean }
  : { courses: Course[]; loading: boolean };
