//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
  id: number;
  name: string;
};

export type Categories = {
  slug: string;
  name: string;
  image: string;
  status: string;
  icon: string;
};
