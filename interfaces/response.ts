import {
  ICategories,
  ICoupon,
  IOrder,
  IPopularCategories,
  ISubCategories,
} from "./models";
//here we will declare our response interfaces or in easy way type of our all response in our website

import { MyFetchInterface } from "../src/utils/CallFetch";
import { IProduct, IBrandDetail } from "./models";

export interface IResponseCategories extends MyFetchInterface {
  res: Array<ICategories>;
}

export interface ILoginResponse extends MyFetchInterface {
  res: {
    slug: string;
    access_token: string;
    userId: string;
    role: string;
  };
}

export interface ISingleCategoryResponse extends MyFetchInterface {
  res: ICategories;
}

export interface ISubCategoriesResponse extends MyFetchInterface {
  res: Array<ISubCategories>;
}

export interface ISingleSubCategoryResponse extends MyFetchInterface {
  res: ISubCategories;
}

export interface IPopularCategoriesResponse extends MyFetchInterface {
  res: IPopularCategories[];
}
export interface IProductResponse extends MyFetchInterface {
  res: {
    allProductData: Array<IProduct>;
    bestProducts: Array<IProduct>;
    featuredProducts: Array<IProduct>;
    newProducts: Array<IProduct>;
    popularProducts: Array<IProduct>;
    stockOutProducts: Array<IProduct>;
    topProducts: Array<IProduct>;
    sellerProducts: Array<IProduct>;
    sellerPendingProducts: Array<IProduct>;
  };
}

export interface IOrderResponse extends MyFetchInterface {
  res: { allOrdersData: Array<IOrder>; filteredOrdersData: Array<IOrder> };
}
export interface ISingleProductResponse extends MyFetchInterface {
  res: IProduct;
}

export interface ICouponResponse extends MyFetchInterface {
  res: Array<ICoupon>;
}

export interface IResponseAllBrands extends MyFetchInterface {
  res: Array<IBrandDetail>;
}

export interface IResponseBrandDetail extends MyFetchInterface {
  res: IBrandDetail;
}
