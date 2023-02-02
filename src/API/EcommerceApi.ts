import { IBrandDetail } from "../../interfaces/models";
import {
  IResponseAllBrands,
  IProductResponse,
  IResponseBrandDetail,
  ISingleProductResponse,
} from "../../interfaces/response";
import { MyFetchInterface } from "./../utils/CallFetch";
import { IProducts } from "../../interfaces/models";
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
  // get all products
  static async allProducts(): Promise<IProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/products`, requestOptions);
  }
  static async allProductsAdmin(query: string): Promise<IProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/products/admin?${query}`,
      requestOptions
    );
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
  // status update
  static async updateStatus(
    data: Partial<object>,
    slug: string
  ): Promise<MyFetchInterface> {
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
  // status update
  static async updateApprovalStatus(
    data: Partial<object>,
    slug: string
  ): Promise<MyFetchInterface> {
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
  
  //get all brands admin
  static async getAllBrandsAdmin(query: string): Promise<IResponseAllBrands> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands?${query}`, requestOptions);
  }

  static async toggleStatusButton(
    slug: string,
    url: string,
    patchStatus: string
  ): Promise<IResponseBrandDetail> {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({ status: patchStatus }),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/${url}/${slug}`, requestOptions);
  }

  static async deleteByModal(
    slug: string,
    url: string
  ) {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/${url}/${slug}`, requestOptions);
  }
}
