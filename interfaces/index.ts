export interface Theme {
  mode: string;
}

export interface ThemeProps {
  theme: Theme;
}

export interface BlogPost {
  title: string;
  date: string;
  id: string;
  img: string;
  readingTime: string;
  description: string;
}
