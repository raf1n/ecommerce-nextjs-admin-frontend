import {
  IAd,
  IBlog,
  IBlogCategory,
  ICategories,
  ICoupon,
  IFeaturedCategories,
  IFlashSaleProducts,
  IInventoryProduct,
  IMegaCategory,
  IOrder,
  IPopularCategories,
  IReportedItem,
  IReview,
  ISeo,
  ISeller,
  ISlider,
  ISubCategories,
  IUser,
  IWithdraw,
  IWithdrawMethod,
} from "./models";
//here we will declare our response interfaces or in easy way type of our all response in our website

import { MyFetchInterface } from "../src/utils/CallFetch";
import { IProduct, IBrandDetail } from "./models";

export interface IResponseCategories extends MyFetchInterface {
  res: Array<ICategories>;
}
export interface IReviewProductsResponse extends MyFetchInterface {
  res: Array<IReview>;
}

export interface ISingleReviewProductsResponse extends MyFetchInterface {
  res: IReview;
}

export interface ILoginResponse extends MyFetchInterface {
  res: {
    slug: string;
    access_token: string;
    userId: string;
    role: string;
    fullName: string | null;
    avatar: string | null;
    email: string | null;
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

export interface IFeaturedCategoriesResponse extends MyFetchInterface {
  res: IFeaturedCategories[];
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

export interface ISingleOrderResponse extends MyFetchInterface {
  res: IOrder;
}
export interface ISingleProductResponse extends MyFetchInterface {
  res: IProduct;
}
export interface IBlogResponse extends MyFetchInterface {
  res: IBlog[];
}

export interface ICouponResponse extends MyFetchInterface {
  res: Array<ICoupon>;
}
export interface ISingleCouponResponse extends MyFetchInterface {
  res: ICoupon;
}

export interface IResponseAllBrands extends MyFetchInterface {
  res: Array<IBrandDetail>;
}

export interface IResponseBrandDetail extends MyFetchInterface {
  res: IBrandDetail;
}
export interface ISigleReviewResponse extends MyFetchInterface {
  res: IReview;
}

export interface IMegaCategoriesResponse extends MyFetchInterface {
  res: IMegaCategory[];
}

export interface ISingleMegaCategoryResponse extends MyFetchInterface {
  res: IMegaCategory;
}

export interface ISliderResponse extends MyFetchInterface {
  res: Array<ISlider>;
}

export interface ISingleSliderResponse extends MyFetchInterface {
  res: ISlider;
}

export interface IAdResponse extends MyFetchInterface {
  res: IAd[];
}

export interface ISingleAdResponse extends MyFetchInterface {
  res: IAd;
}

export interface IReportedItemResponse extends MyFetchInterface {
  res: Array<IReportedItem>;
}

export interface ISingleIReportedItemResponse extends MyFetchInterface {
  res: IReportedItem;
}
export interface IGetAllUsersResponse extends MyFetchInterface {
  res: IUser[];
}
export interface IGetAllSellerResponse extends MyFetchInterface {
  res: ISeller[];
}
export interface IGetSingleSellerResponse extends MyFetchInterface {
  res: ISeller[];
}

export interface IGetSingleUserResponse extends MyFetchInterface {
  res: IUser;
}

export interface IAdminProductInventoriesResponse extends MyFetchInterface {
  res: IInventoryProduct[];
}

export interface ISingleProductInventoryResponse extends MyFetchInterface {
  res: IInventoryProduct;
}

export interface IWithdrawResponse extends MyFetchInterface {
  res: IWithdraw[];
}

export interface IGetWithdrawMethodsResponse extends MyFetchInterface {
  res: IWithdrawMethod[];
}

export interface ISingleWithdrawMethodResponse extends MyFetchInterface {
  res: IWithdrawMethod;
}

export interface IFlashSaleProductsResponse extends MyFetchInterface {
  res: IFlashSaleProducts[];
}

export interface ISeoResponse extends MyFetchInterface {
  res: ISeo[];
}
export interface ISingleSeoResponse extends MyFetchInterface {
  res: ISeo;
}

export interface IBlogCategoryResponse extends MyFetchInterface {
  res: IBlogCategory[];
}
