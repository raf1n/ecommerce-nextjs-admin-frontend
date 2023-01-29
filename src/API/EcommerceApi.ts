import { MyFetchInterface } from "./../utils/CallFetch";
import { IProducts } from "../../interfaces/models";
import { callFetch } from "../utils/CallFetch";
import {
  IProductResponse,
  IResponseAllBrands,
  IResponseCategories,
  ISingleProductResponse,
} from "../../interfaces/response";

// import { callFetch, MyFetchInterface } from "../utils/CallFetch"
export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export interface LoginInterface {
  status: number;
  data: {
    access_token: string | null;
  };
}

export class EcommerceApi {
  static async allCategories(): Promise<IResponseCategories> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/categories`, requestOptions);
  }
  static async deleteCategories(slug: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/categories/${slug}`,
      requestOptions
    );
  }
  //DEMO API CALLING STRUCTURE
  // static async login(token: string, email: string, fullName: string, avatar: string, tokenType: "google" | "facebook"): Promise<ILoginResponse> {
  //     console.log(token);
  //     console.log(API_ENDPOINT)
  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  //     const urlencoded = new URLSearchParams();
  //     urlencoded.append("token", token);
  //     urlencoded.append("tokenType", tokenType);
  //     urlencoded.append("email", email);
  //     urlencoded.append("fullName", fullName);
  //     urlencoded.append("avatar", avatar);
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: urlencoded,
  //         redirect: 'follow'
  //     };

  //     return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions)
  // }
  // test
  static async allProducts(): Promise<IProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products`, requestOptions);
  }
  // get single products
  static async getSingleProduct(slug: string): Promise<ISingleProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products/${slug}`, requestOptions);
  }
  //  product image add
  static async uploadProductImage(
    data: Partial<any>
  ): Promise<MyFetchInterface> {
    console.log(data);
    console.log(API_ENDPOINT);

    const requestOptions = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    return await callFetch(
      `https://api.imgbb.com/1/upload?key=d78d32c3d086f168de7b3bfaf5032024`,
      requestOptions
    );
  }
  // add products
  static async addProducts(
    data: Partial<IProducts>
  ): Promise<IProductResponse> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products`, requestOptions);
  }
  //  edit products
  static async editProducts(
    data: Partial<IProducts>,
    slug: string
  ): Promise<IProductResponse> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products/${slug}`, requestOptions);
  }
  // delete products
  static async deleteProduct(slug: string): Promise<ISingleProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products/${slug}`, requestOptions);
  }
  //get all brands admin
  static async getAllBrandsAdmin(): Promise<IResponseAllBrands> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands`, requestOptions);
  }
}
