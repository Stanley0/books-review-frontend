export interface Book {
  _id: string;
  title: string;
  description: string;
  image: BookImage;
  author: string;
  category: string[];
  rate: number;
}

export interface FormBook {
  title: string;
  description: string;
  image: File;
  author: string;
  category: string[];
  rate: number;
}

interface BookImage {
  mimetype: string;
  buffer: string;
}
