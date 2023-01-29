//here we will declare our response interfaces or in easy way type of our all response in our website

import { MyFetchInterface } from "../src/utils/CallFetch";
import { IProducts, User } from "./models";

export interface IResponseUser extends User {
  //with User model this particular extra data will come as response
  totalPictures: number;
}
export interface IProductResponse extends MyFetchInterface {
  res: {
    allProductData: Array<IProducts>;
    bestProducts: Array<IProducts>;
    featuredProducts: Array<IProducts>;
    newProducts: Array<IProducts>;
    popularProducts: Array<IProducts>;
  };
}
export interface ISingleProductResponse extends MyFetchInterface {
  res: IProducts;
}
