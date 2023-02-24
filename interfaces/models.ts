//here we will declare our data models interfaces or in easy way type of our all datas in our website

export interface MyFetchInterface {
  res: any;
  err: any;
}
export interface IUser {
  _id: string;
  email?: string;
  avatar: string;
  token: string;
  tokenType: string;
  displayName: string;
  password: string;
  role: string;
  fullName: string;
  slug: string;
  createdAt?: string;
  updatedAt: string;
}

export interface ICategories {
  cat_slug: string;
  cat_name: string;
  cat_image?: string;
  cat_status: string;
  cat_icon: string;
}
export interface IReview {
  slug?: string;
  product_slug?: string;
  title?: string;
  note?: string;
  rating: number;
  user?: IUser;
  status?: string;
  reviewProducts: IProduct;
}

export interface ISubCategories {
  slug: string;
  cat_image?: string;
  subcat_name: string;
  subcat_status: string;
  cat_name: string;
  cat_slug: string;
}
export interface IPopularCategories {
  slug: string;
  cat_slug: string;
  // subcat_name: string;
  // subcat_status: string;
  cat_name: string;
  cat_image: string;
}
export interface IProduct {
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
}

export interface IBrandDetail {
  name?: string;
  logo?: string;
  status: string;
  slug?: string;
}

export interface ICartProduct extends IProduct {
  cart_slug: string;
  quantity: number;
}

export interface IOrder {
  subTotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  slug?: string;
  createdAt?: string;
  product_list: ICartProduct[];
  payment_method: string;
  user_slug: string;
  transaction_id: string;
  payment_status?: string;
  order_status: string;
  userData?: IUser;
  address: {
    country?: string;
    state?: string;
    city?: string;
    address?: string;
  };
}

export interface ICoupon {
  slug: string;
  name: string;
  code: string;
  discount: number;
  items_number: number;
  apply_qty: number;
  expired_date: string;
  status: string;
  minimum_purchase: number;
}
