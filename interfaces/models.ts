//here we will declare our data models interfaces or in easy way type of our all datas in our website

export interface MyFetchInterface {
  res: any;
  err: any;
}
export interface IUser {
  _id?: string;
  token?: string;
  tokenType?: string;
  displayName?: string;
  password?: string;
  role?: string;
  status?: string;
  phone?: string;
  address?: {
    country?: string;
    state?: string;
    city?: string;
    address?: string;
  };
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  fullName: string | null;
  avatar: string | null;
  email?: string;
}

export interface ISeller extends IUser {
  shop: {
    shop_name: string;
    shop_address: string;
    shop_logo: string;
    shop_cover: string;
    opens_at?: string;
    close_at?: string;
    greetings_message?: string;
    social?: Array<object>;
    seo_title?: string;
    seo_des?: string;
    rating?: number;
  };
  user_email: string;
}

export interface ICategories {
  cat_slug: string;
  cat_name: string;
  cat_image?: string;
  cat_status: string;
  cat_icon: string;
}

export interface IFeaturedCategories extends ICategories {
  categoriesData: ICategories;
}
export interface IFeaturedCategories {
  slug: string;
  cat_slug: string;
  // subcat_name: string;
  // subcat_status: string;
  cat_name: string;
  cat_image: string;
}
export interface ISlider {
  slug?: string;
  image: string;
  badge: string;
  titleOne: string;
  titleTWo: string;
  productLink: string;
  serial: number;
  status: string;
}
export interface IReview {
  slug?: string;
  product_slug?: string;
  title?: string;
  message?: string;
  rating: number;
  name: string;
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
export interface IPopularCategories extends ICategories {
  slug: string;
  // cat_slug: string;
  // // subcat_name: string;
  // // subcat_status: string;
  // cat_name: string;
  // cat_image: string;
  categoriesData: ICategories;
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
  seller_slug: string;
}

export interface IInventoryProduct extends IProduct {
  sold: number;
  stockInData: Array<{ slug: string; quantity: number; createdAt: string }>;
  stockData: Array<{ _id: string; totalCount: number }>;
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
  seller_slug: string;
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

export interface ISellerOrder extends IOrder {
  sellerData: ISeller;
}

export interface ICoupon {
  slug: string;
  name: string;
  code: string;
  discount: {
    role: string;
    value: number;
  };
  items_number: number;
  apply_qty: number;
  expired_date: string;
  status: string;
  minimum_purchase: number;
}

export interface IMegaCategory {
  slug?: string;
  cat_name?: string;
  cat_slug?: string;
  serial: number;
  sub_cat_list: object[];
  status: "active" | "inactive";
  categoriesData: ICategories;
}

export interface IAd {
  slug?: string;
  adName?: string;
  adImage?: string;
  title?: string;
  title_one?: string;
  title_two?: string;
  badge?: string;
  category_link?: string;
  status?: string;
}

export interface IReportedItem {
  slug?: string;
  product_slug?: string;
  user_slug?: string;
  title?: string;
  note?: string;
  reportedProducts?: IProduct;
  user?: IUser;
}

export interface IWithdraw {
  method?: string;
  amount?: number;
  information?: string;
  seller_slug?: string;
}

export interface IWithdrawMethod {
  slug?: string;
  name: string;
  min: number;
  max: number;
  charge: number;
  status?: string;
  description: string;
}

export interface IFlashSaleProducts {
  slug: string;
  product_slug: string;
  status: string;
  productsData?: IProduct;
}

export interface IBlog {
  slug?: string;

  title: string;

  category_slug: string;
  category?: string;

  description: string | undefined;
  long_description: string;

  isShowHomepage: string;
  status: string;
  imageURL?: string | undefined | null;

  seo_title: string;
  seo_description: string;
  postBy: string | undefined;
}

export interface ISeo {
  slug: string;
  topic: string;
  seo_title: string;
  seo_description: string;
}

export interface IBlogCategory extends MyFetchInterface {
  name?: string;
  slug?: string;
  status?: string;
}

export interface IFlashSale {
  name?: string;
  title: string;
  offer: string;
  time: string;
  status: string;
  imageHome: Array<string>;
  imageFlash: Array<string>;
}
export interface ISubscriber {
  slug?: string;
  email?: string;
  verified?: boolean;
}
