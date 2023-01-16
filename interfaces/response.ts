//here we will declare our response interfaces or in easy way type of our all response in our website

import { User } from "./models";


export interface IResponseUser extends User {
    //with User model this particular extra data will come as response
    totalPictures: number
}