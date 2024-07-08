export interface Feedback {
  id: number;
  subject: string;
  branch: string;
  discipline: string;
  responses: Response[];
}

export interface Response {
  question: string;
  answer: string;
}

export interface Subject {
  id: number;
  name: string;
  branch: string;
}
