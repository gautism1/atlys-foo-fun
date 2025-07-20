export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  emoji: string;
}
