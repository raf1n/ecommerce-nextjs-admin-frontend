import {
  IBrand,
  IBrandDetail,
  ICategories,
  IPopularCategories,
  ISubCategories,
} from "../../interfaces/models";
import {
  IResponseAllBrands,
  IProductResponse,
  IResponseBrandDetail,
  ISingleProductResponse,
  IResponseCategories,
  IPopularCategoriesResponse,
  ISingleSubCategoryResponse,
  ISingleCategoryResponse,
  ISubCategoriesResponse,
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
  //get all categories
  static async allCategories(): Promise<IResponseCategories> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/categories`, requestOptions);
  }

  //get all categories admin

  static async allCategoriesAdmin(query: string): Promise<IResponseCategories> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/categories/admin?${query}`,
      requestOptions
    );
  }
  //add image to Categories
  static async uploadCategoryImage(
    data: Partial<any>
  ): Promise<MyFetchInterface> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    return await callFetch(
      "https://api.imgbb.com/1/upload?key=d78d32c3d086f168de7b3bfaf5032024",
      requestOptions
    );
  }
  //create categories
  static async createCategories(
    data: Partial<ICategories>
  ): Promise<IResponseCategories> {
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

    return await callFetch(`${API_ENDPOINT}/categories`, requestOptions);
  }
  //delete categories
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
  // get single Category
  static async getSingleCategory(
    slug: string
  ): Promise<ISingleCategoryResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/categories/${slug}`,
      requestOptions
    );
  }

  //Edit Categories

  static async editCategories(
    data: Partial<ICategories>,
    slug: string
  ): Promise<ISingleCategoryResponse> {
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

    return await callFetch(
      `${API_ENDPOINT}/categories/${slug}`,
      requestOptions
    );
  }

  // get all SubCategories

  static async allSubCategories(): Promise<ISubCategoriesResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/sub-categories`, requestOptions);
  }

  // get all SubCategories Admin

  static async allSubCategoriesAdmin(
    query: string
  ): Promise<ISubCategoriesResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/sub-categories/admin?${query}`,
      requestOptions
    );
  }

  //Delete Sub Categories
  static async deleteSubCategories(slug: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/sub-categories/${slug}`,
      requestOptions
    );
  }

  //create sub category
  static async createSubCategories(
    data: Partial<ISubCategories>
  ): Promise<ISubCategoriesResponse> {
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

    return await callFetch(`${API_ENDPOINT}/sub-categories`, requestOptions);
  }

  //Edit SubCategories

  static async editSubCategories(
    data: Partial<ISubCategories>,
    slug: string
  ): Promise<ISubCategoriesResponse> {
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

    return await callFetch(
      `${API_ENDPOINT}/sub-categories/${slug}`,
      requestOptions
    );
  }

  // get single Sub Category
  static async getSingleSubCategory(
    slug: string
  ): Promise<ISingleSubCategoryResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/sub-categories/${slug}`,
      requestOptions
    );
  }

  //get all popular categories

  static async allPopularCategories(): Promise<IPopularCategoriesResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/popular-categories`,
      requestOptions
    );
  }

  // Create Popular Categories

  static async createPopularCategories(
    data: Partial<IPopularCategories>
  ): Promise<IPopularCategoriesResponse> {
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

    return await callFetch(
      `${API_ENDPOINT}/popular-categories`,
      requestOptions
    );
  }

  //Delete Popular Categories
  static async deletePopularCategories(
    slug: string
  ): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/popular-categories/${slug}`,
      requestOptions
    );
  }

  //add image to Categories
  static async uploadPopularImage(
    data: Partial<any>
  ): Promise<MyFetchInterface> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };

    return await callFetch(
      "https://api.imgbb.com/1/upload?key=d78d32c3d086f168de7b3bfaf5032024",
      requestOptions
    );
  }

  //Update Popular Categories

  //Edit Categories

  static async editPopularCategories(
    data: Partial<IPopularCategories>,
    slug: string
  ): Promise<IPopularCategoriesResponse> {
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

    return await callFetch(
      `${API_ENDPOINT}/popular-categories/${slug}`,
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
      cors: "no-cors",
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
  static async getAllBrands(): Promise<IResponseAllBrands> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands/allbrands`, requestOptions);
  }

  // create new brand from manage products brands
  static async addNewBrand(
    data: Partial<IBrand>
  ): Promise<IResponseBrandDetail> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands`, requestOptions);
  }

  // edit brand from manage products brands
  static async editBrand(
    data: Partial<IBrand>,
    slug: string
  ): Promise<IResponseBrandDetail> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands/${slug}`, requestOptions);
  }

  // toggle status button - shared - dynamic
  static async toggleStatusButton(
    slug?: string,
    url?: string,
    patchStatus?: string
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

  // delete from modal - shared - dynamic
  static async deleteByModal(slug: string, url: string) {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/${url}/${slug}`, requestOptions);
  }
}
