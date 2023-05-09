interface Post {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: String;
}

interface FormattedPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: String;
}
