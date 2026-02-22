Icon = import("astro-icon/components").Icon;

type Project = {
  title: string;
  slug: string;
  description: string;
  liveDemoLink: string;
  content: Array<string>;
  showOnHomepage: boolean;
  coverImageLink: string;
};

type Skill = {
  name: string;
  description: string;
  iconList: Array<Icon>;
};
