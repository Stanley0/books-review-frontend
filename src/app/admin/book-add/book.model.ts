export interface Book {
  id: string;
  title: string;
  description: string;
  image: File;
  author: string;
  category: string[];
}

export interface FormBook {
  title: string;
  description: string;
  image: File;
  author: string;
  category: string[];
}
