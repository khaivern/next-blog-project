export interface Posts {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
}

export interface Notification {
  title: null | string;
  message: null | string;
  status: null | string;
}
