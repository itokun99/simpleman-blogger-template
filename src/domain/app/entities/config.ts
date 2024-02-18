export interface AppConfig {
  app: App;
  blogger: Blogger;
  google: Google;
  disqus: Disqus;
  addThis: AddThis;
  menu: Menu;
  author: Author[];
  sectionConfig: SectionConfig;
}

interface App {
  author: string;
  defaultImage: string;
  logo: string;
}

interface Blogger {
  blogId: string;
  blogUrl: string;
}

interface Google {
  apiKey: string;
  cse: Cse;
  firebase: FirebaseConfig;
}

interface Cse {
  url: string;
}

interface Disqus {
  username: string;
}

interface AddThis {
  id: string;
}

interface Menu {
  header: Header[];
}

interface Header {
  id: number;
  title: string;
  url: string;
}

interface Author {
  id: string;
  name: string;
  email: string;
  title: string;
  username: string;
  nickname: string;
  profilePic: string;
  coverPic: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  id: number;
  name: string;
  title: string;
  url: string;
  username: string;
}

interface SectionConfig {
  homepage: PageType;
  postDetail: PageType;
}

interface PageType {
  top: SectionType[];
  side: SectionType[];
  main: SectionType[];
  bottom: SectionType[];
}

interface SectionType<T = unknown> {
  id: number;
  title: string;
  type: string;
  show: boolean;
  data?: T;
}

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}
