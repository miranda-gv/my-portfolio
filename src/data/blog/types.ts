export interface BlogPostSection {
  heading?: string;
  content: string;
  image?: string;
  imageAlt?: string;
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
  image?: string;
  contentFile?: string;
}

export interface BlogData {
  heading: string;
  subHeading: string;
  items: BlogPost[];
}
