import { IResponseAllBrands } from "../../interfaces/response";
import { callFetch } from "../utils/CallFetch";

// import { callFetch, MyFetchInterface } from "../utils/CallFetch"
export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export interface LoginInterface {
  status: number;
  data: {
    access_token: string | null;
  };
}

export class EcommerceApi {
  //DEMO API CALLING STRUCTURE
  // static async login(data: Partial<IUser>): Promise<ILoginResponse> {
  //     console.log(data.token);
  //     console.log(API_ENDPOINT)
  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     const requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: JSON.stringify(data),
  //         redirect: 'follow'
  //     };

  //     return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions)
  // }


  // get all brands for manage products: brands page
  static async getAllBrandsAdmin(query: string): Promise<IResponseAllBrands> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands?${query}`, requestOptions);
  }
}
