export interface ThemeProp {
  bgColor: string;
  textColor: string;
  toggleBorder: string;
  gradient: string;
}

export interface PostProp {
  date: string;
  title: string;
  description: string;
  _id: string;
  _raw: { flattenedPath: string };
}
