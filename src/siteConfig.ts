import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  latest?: boolean;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
  linkGroups: LinkGroups[];
}

interface IconLink {
  id: string;
  icon: string;
  url: string;
}

interface LinkGroups {
  name: string;
  order: number
}

interface CustomLink {
  id: string;
  title: string;
  url: string;
  group?: string;
  order?: number;
  color?: string;
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};