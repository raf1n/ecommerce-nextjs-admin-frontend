//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
  id: number;
  name: string;
};

export interface ICategories {
  cat_slug: string;
  cat_name: string;
  cat_image: string;
  cat_status: string;
  cat_icon: string;
}
