export interface IJob {
  index: number;
  reviews: string[];
  tag: string;
  title: string;
  writer: string;
  content: string;
  date: string;
  image: string;
}

export interface INote {
  index: number;
  reviews: string[];
  tag: string;
  title: string;
  writer: string;
  content: string;
  date: string;
  image: string;
}

export interface IPhoto {
  index: number;
  tag: string;
  date: string;
  image: string;
}
