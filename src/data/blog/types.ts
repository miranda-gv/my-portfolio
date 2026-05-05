export interface BlogImage {
  src: string;
  alt: string;
}

export interface BlogPostSection {
  heading?: string;
  content: string;
  images?: BlogImage[];
}

export interface BlogPostContent {
  intro: string;
  sections: BlogPostSection[];
  conclusion: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  published: boolean;
  images?: BlogImage[];
  contentFile?: string;
}

export interface BlogData {
  heading: string;
  subHeading: string;
  items: BlogPost[];
}
