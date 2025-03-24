export interface Course {
  id: string;
  title: string;
  description: string;
  discount: number;
  link: string;
  imageSize: { width: number; height: number };
  language: string;
}
