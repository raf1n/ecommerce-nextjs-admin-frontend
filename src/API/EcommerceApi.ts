import {
  IAd,
  IBrand,
  IBrandDetail,
  ICategories,
  ICoupon,
  IMegaCategory,
  IPopularCategories,
  ISlider,
  ISubCategories,
  IUser,
} from "../../interfaces/models";
import {
  IResponseAllBrands,
  ILoginResponse,
  IProductResponse,
  IResponseBrandDetail,
  ISingleProductResponse,
  IResponseCategories,
  IPopularCategoriesResponse,
  ISingleSubCategoryResponse,
  ISingleCategoryResponse,
  ISubCategoriesResponse,
  IReviewProductsResponse,
  IOrderResponse,
  ISingleOrderResponse,
  ICouponResponse,
  ISigleReviewResponse,
  ISingleCouponResponse,
  ISliderResponse,
  ISingleSliderResponse,
  IAdResponse,
  ISingleAdResponse,
  IMegaCategoriesResponse,
  ISingleMegaCategoryResponse,
} from "../../interfaces/response";
import { MyFetchInterface } from "./../utils/CallFetch";
import { IProduct } from "../../interfaces/models";
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
  //get all dashboard counter
  static async allDashboardCount(query: string): Promise<MyFetchInterface> {
    const myHeaders = new Headers();
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/dashboard?${query}`,
      requestOptions
    );
  }

  //get all categories
  static async allCategories(): Promise<IResponseCategories> {
    const myHeaders = new Headers();
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/categories`, requestOptions);
  }
  //get all Reviews  admin
  static async getAllReviews(query: string): Promise<IReviewProductsResponse> {
    const myHeaders = new Headers();
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };
    return await callFetch(
      `${API_ENDPOINT}/reviews/findAllForAdmin?${query}`,
      requestOptions
    );
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
    // console.log(data);
    // console.log(API_ENDPOINT);
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

  //Upload slider image
  static async uploadSliderImage(
    data: Partial<any>
  ): Promise<MyFetchInterface> {
    // console.log(data);
    // console.log(API_ENDPOINT);
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
    // console.log(data);
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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
    // console.log(API_ENDPOINT);
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

  //Edit Popular Categories

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
  static async login(data: Partial<IUser>): Promise<ILoginResponse> {
    console.log(data);
    console.log(data.token);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions);
  }
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

  //Create Sliders
  static async createSlider(data: Partial<ISlider>): Promise<ISliderResponse> {
    // console.log(data);
    // console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/slider`, requestOptions);
  }

  // get all sliders

  static async allSlidersAdmin(query: string): Promise<ISliderResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    console.log(query);
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/slider/admin?${query}`,
      requestOptions
    );
  }

  //get single  slider data

  static async getSingleSlider(slug: string): Promise<ISingleSliderResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/slider/${slug}`, requestOptions);
  }

  //Delete Slider

  static async deleteSlider(slug: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/slider/${slug}`, requestOptions);
  }

  //Edit Slider

  static async editSlider(
    data: Partial<ISlider>,
    slug: string
  ): Promise<ISingleSliderResponse> {
    console.log(data);
    // console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/slider/${slug}`, requestOptions);
  }

  static async allProductsSeller(
    sellerSlug: string,
    query: string
  ): Promise<IProductResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/products/seller/${sellerSlug}?${query}`,
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
  static async uploadImage(data: Partial<any>): Promise<MyFetchInterface> {
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
  static async addProducts(data: Partial<IProduct>): Promise<IProductResponse> {
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
    data: Partial<IProduct>,
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

  // Get all orders admin

  static async allOrdersAdmin(query: string): Promise<IOrderResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/orders/admin?${query}`,
      requestOptions
    );
  }
  // Update Order Status
  static async orderStatusUpdate(
    slug: string,
    order: { payment_status: string; order_status: string }
  ): Promise<IOrderResponse> {
    const myHeaders = new Headers();
    console.log(slug);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        payment_status: order.payment_status,
        order_status: order.order_status,
      }),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/orders/${slug}`, requestOptions);
  }

  // Get Single order Data
  static async getSingleOrderData(slug: string): Promise<ISingleOrderResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/orders/admin?${slug}`,
      requestOptions
    );
  }

  //create Coupon

  static async createCoupon(data: Partial<ICoupon>): Promise<ICouponResponse> {
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

    return await callFetch(`${API_ENDPOINT}/coupon`, requestOptions);
  }

  //update Coupon

  static async updateCoupon(
    slug: string,
    data: Partial<ICoupon>
  ): Promise<ISingleCouponResponse> {
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

    return await callFetch(`${API_ENDPOINT}/coupon/${slug}`, requestOptions);
  }

  // get all coupons

  static async allCouponsAdmin(query: string): Promise<ICouponResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    console.log(query);
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/coupon/admin?${query}`,
      requestOptions
    );
  }

  //get single  coupon data

  static async getSingleCoupon(slug: string): Promise<ISingleCouponResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/coupon/${slug}`, requestOptions);
  }

  //Delete Coupon

  static async deleteCoupon(slug: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/coupon/${slug}`, requestOptions);
  }

  //Delete Review

  static async deleteReview(slug: string): Promise<ISigleReviewResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/reviews/${slug}`, requestOptions);
  }

  static async getMegaMenuCategories(
    query: string
  ): Promise<IMegaCategoriesResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/mega-menu-categories?${query}`,
      requestOptions
    );
  }

  static async getSingleMegaMenuCategory(
    slug: string
  ): Promise<ISingleMegaCategoryResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/mega-menu-categories/${slug}`,
      requestOptions
    );
  }

  static async postMegaMenuCategory(
    data: IMegaCategory
  ): Promise<ISingleMegaCategoryResponse> {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/mega-menu-categories`,
      requestOptions
    );
  }

  static async updateMegaMenuCategory(
    slug: string,
    data: IMegaCategory
  ): Promise<ISingleMegaCategoryResponse> {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/mega-menu-categories/${slug}`,
      requestOptions
    );
  }

  // admin profile update in db
  static async updateAdminProfile(
    slug: string | undefined,
    data: Partial<IUser>
  ): Promise<ILoginResponse> {
    console.log(data);
    console.log(data.token);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/users/${slug}`, requestOptions);
  }
  static async deleteMegaMenuCategory(
    slug: string
  ): Promise<ISingleMegaCategoryResponse> {
    // console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/mega-menu-categories/${slug}`,
      requestOptions
    );
  }

  static async getAllAds(): Promise<IAdResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/advertisements`, requestOptions);
  }
}
