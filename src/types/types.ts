
export interface Project {
    id: number;
    type: string; // "software" | "hardware" (if you want stricter type control)
    title: string;
    description: string;
    image: string;
    skills: string[];
    link:string;
  }