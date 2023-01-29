//here we will declare our response interfaces or in easy way type of our all response in our website

import { MyFetchInterface } from "../src/utils/CallFetch";
import { User } from "./models";
import { IBrandDetail } from './models';


export interface IResponseUser extends User {
    //with User model this particular extra data will come as response
    totalPictures: number
}

export interface IResponseAllBrands extends MyFetchInterface {
  res: Array<IBrandDetail>;

}