//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
  id: number;
  name: string;
};

export interface IProducts {
  productName?: string;
  slug?: string;
  catSlug?: string;
  subCatSlug?: string;
  brandSlug?: string;
  price?: number;
  description?: string;
  status?: string;
  imageURL?: Array<string>;
  offerPrice?: number;
  weight?: number;
  stock?: number;
  seoTitle?: string;
  seoDescription?: string;
  isTopProduct?: boolean;
  isNewArrival?: boolean;
  isBestProduct?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  addedBy?: string;
  approvalStatus?: string;
}

export interface IBrand {
  slug?: string;
  logo: string;
  name: string;
  status: string;
  cat_slug: string[];
  sub_cat_slug: string[];
};

export interface IBrandDetail {
  name?: string;
  cat_slug?: Array<string>;
  sub_cat_slug?: Array<string>;
  logo?: string;
  status: string;
  slug?: string;
}
