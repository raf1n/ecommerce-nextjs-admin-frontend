//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
    id: number
    name: string
}

export type Brand = {
  slug: string;
  logo: string;
  name: string;
  status: string;
}

export interface IBrandDetail {
  name?: string;
  cat_slug?: Array<string>;
  sub_cat_slug?: Array<string>;
  logo?: string;
  status?: string;
  slug?: string;
}