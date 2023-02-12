import { ICategories, IPopularCategories, ISubCategories } from "./models";
//here we will declare our response interfaces or in easy way type of our all response in our website

import { MyFetchInterface } from "../src/utils/CallFetch";
import { IProducts, IBrandDetail } from "./models";

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
    allProductData: Array<IProducts>;
    bestProducts: Array<IProducts>;
    featuredProducts: Array<IProducts>;
    newProducts: Array<IProducts>;
    popularProducts: Array<IProducts>;
    stockOutProducts: Array<IProducts>;
    topProducts: Array<IProducts>;
    sellerProducts: Array<IProducts>;
    sellerPendingProducts: Array<IProducts>;
  };
}
export interface ISingleProductResponse extends MyFetchInterface {
  res: IProducts;
}

export interface IResponseAllBrands extends MyFetchInterface {
  res: Array<IBrandDetail>;
}

export interface IResponseBrandDetail extends MyFetchInterface {
  res: IBrandDetail;
}
