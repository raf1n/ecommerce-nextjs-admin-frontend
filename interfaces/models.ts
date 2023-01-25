//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
  id: number;
  name: string;
};

export type IProducts = {
  productName: string;
  //   productSlug:string
  catSlug: string;
  subCatSlug: string;
  brandSlug: string;
  price: number;
  description: string;
  status: string;
  imageURL: Array<string>;
  offerPrice: string;
  weight: number;
  stock: number;
  seoTitle: string;
  seoDescription: string;
  isTopProduct: boolean;
  isNewArrival: boolean;
  isBestProduct: boolean;
  isFeatured: boolean;
};
