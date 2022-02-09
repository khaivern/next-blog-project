export interface Posts {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}

export interface Notification {
  message: string;
  status: string;
  error: null | string;
}
