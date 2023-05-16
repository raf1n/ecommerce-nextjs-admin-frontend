import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../../../src/state/StateController";
import DashboardBreadcrumb from "./../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "./../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import { useRouter } from "next/router";
import {
  IBrandDetail,
  ICategories,
  IProduct,
  ISubCategories,
} from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import Select from "react-select";
import { toast } from "react-hot-toast";

interface Props {}

const reactSelectStyle = {
  control: (base: any) => ({
    ...base,
    height: "42px",
    width: "100%",
    margin: "0",
    fontColor: "#495057",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontSize: "14px",
    borderRadius: 5,
    borderColor: "#e4e6fc",
    backgroundColor: "#fdfdff",
    cursor: "pointer",
  }),
  menuList: (styles: any) => ({
    ...styles,
    fontSize: "13px",
  }),
};

const ProductEdit: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [productData, setProductData] = useState<IProduct>();

  const [categories, setCategories] = useState<ICategories[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([]);
  const [filteredSubCat, setFilteredSubCat] = useState<ISubCategories[]>([]);
  const [brands, setBrands] = useState<IBrandDetail[]>([]);

  const { asPath } = useRouter();
  const productSlug = asPath.split("/")[3];

  useEffect(() => {
    const getSingleProduct = async () => {
      if (productSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleProduct(productSlug);
        if (res) {
          console.log(res);
          setProductData(res);
          console.log(productData);
        } else {
          console.log(err);
        }
      }
    };

    getSingleProduct();
  }, [productSlug, brands]);

  const defaultValueSelected = brands.find(
    (brand) => brand.slug === productData?.brandSlug
  );

  useEffect(() => {
    const fetchAllCategoriesSubCatBrand = async () => {
      const allCat = await EcommerceApi.allCategories();
      if (allCat.res) {
        setCategories(allCat.res);
      }
      const allSubCat = await EcommerceApi.allSubCategories();
      if (allSubCat.res) {
        setSubCategories(allSubCat.res);
      }
      const brand = await EcommerceApi.getAllBrands();
      if (brand.res) {
        setBrands(brand.res);
      }
    };

    fetchAllCategoriesSubCatBrand();
  }, []);

  let selectedValue;

  const handleChange = (e: any) => {
    selectedValue = {
      label: e.label,
      value: e.value,
    };
    console.log(selectedValue);
  };

  const handleProductUpdate = async (e: any) => {
    e.preventDefault();
    controller.setApiLoading(true);

    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const { res, err } = await EcommerceApi.uploadImage(formData);
    if (res?.data?.url || !res?.data?.url || res.error.code === 120) {
      let imageUrl;
      imageUrl = [res?.data?.url];

      if (res?.data?.url === undefined || null) {
        imageUrl = productData?.imageURL;
      }
      const newProductData = {
        productName: e.target.productName.value,
        price: parseFloat(e.target.productPrice.value),
        offerPrice: parseFloat(e.target.offer_price.value),
        catSlug: e.target.category.value,
        subCatSlug: e.target.sub_category.value,
        brandSlug: e.target.brand.value,
        description: e.target.short_description.value,
        status: e.target.productStatus.value,
        imageURL: imageUrl,
        // stock: parseFloat(e.target.stock_quantity.value),
        weight: parseFloat(e.target.weight.value),
        seoTitle: e.target.seo_title.value,
        seoDescription: e.target.seo_description.value,
        isTopProduct: e.target.is_top.checked,
        isNewArrival: e.target.is_new.checked,
        isBestProduct: e.target.is_best.checked,
        isFeatured: e.target.is_featured.checked,
        isPopular: e.target.is_popular.checked,
      };

      const { res: postRes, err: postErr } = await EcommerceApi.editProducts(
        newProductData,
        productSlug
      );

      if (postRes) {
        toast.success("Product Updated Successfully");
      }
    }

    controller.setApiLoading(false);
  };

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Edit Product"
        link="/product_brands/edit"
        slug="Edit Product"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Products"
            link="/admin/products"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="p-5 leading-6 mt-7">
              <form onSubmit={handleProductUpdate}>
                <div className="form-group col-12 mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image Preview
                  </label>
                  <div>
                    <picture>
                      {productData && productData?.imageURL && (
                        <img
                          id="preview-img"
                          className="admin-img border border-[#ddd] p-0 m-0 max-w-[180px] h-[150px] object-cover"
                          src={productData?.imageURL[0]}
                          alt=""
                        />
                      )}
                    </picture>
                  </div>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Thumbnail Image <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="imageURL"
                  />
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="productName"
                    defaultValue={productData?.productName}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="slug"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="slug"
                    defaultValue={productData?.slug}
                    disabled
                    readOnly
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    onChange={(e) => {
                      const filteredSubCat = subCategories?.filter(
                        (subcat) => subcat?.cat_slug === e.target.value
                      );
                      console.log(filteredSubCat);
                      setFilteredSubCat(filteredSubCat);
                    }}
                    name="category"
                    id="category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    {categories.map((cat: ICategories, indx) => (
                      <>
                        <option
                          selected={productData?.catSlug === cat.cat_slug}
                          key={indx}
                          value={cat.cat_slug}
                        >
                          {cat.cat_name}
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Sub Category
                  </label>
                  <select
                    name="sub_category"
                    id="sub_category"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                  >
                    {
                      filteredSubCat.length === 0
                        ? subCategories.map((subCat, indx) => (
                            <option
                              selected={
                                productData?.subCatSlug === subCat?.slug
                              }
                              key={indx}
                              value={subCat.slug}
                            >
                              {subCat.subcat_name}
                            </option>
                          ))
                        : filteredSubCat.map((subCat, indx) => (
                            <option
                              selected={productData?.subCatSlug === subCat.slug}
                              key={indx}
                              value={subCat.slug}
                            >
                              {subCat.subcat_name}
                            </option>
                          ))
                      // filteredSubCat.map((subCat, indx) => (
                      //   <option
                      //     selected={productData?.subCatSlug === subCat.slug}
                      //     key={indx}
                      //     value={subCat.slug}
                      //   >
                      //     {subCat.subcat_name}
                      //   </option>
                      // ))}
                    }
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Brand
                  </label>
                  {productData && brands.length !== 0 && (
                    <Select
                      name="brand"
                      id="brand"
                      defaultValue={
                        selectedValue === undefined
                          ? {
                              label: defaultValueSelected?.name,
                              value: defaultValueSelected?.slug,
                            }
                          : selectedValue
                      }
                      onChange={(e) => handleChange(e)}
                      // onBlur={(e) => handleChange(e)}
                      options={brands.map((brand) => {
                        return {
                          value: brand.slug,
                          label: brand.name,
                        };
                      })}
                      styles={reactSelectStyle}
                      components={{
                        // Menu,
                        IndicatorSeparator: () => null,
                      }}
                    />
                  )}
                </div>
                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    min={0}
                    type="number"
                    id="price"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="productPrice"
                    defaultValue={productData?.price}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Offer Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="offer_price"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="offer_price"
                    defaultValue={productData?.offerPrice}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Stock Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    min={0}
                    type="number"
                    id="stock_quantity"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="stock_quantity"
                    defaultValue={productData?.stock}
                    disabled
                    readOnly
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Weight <span className="text-red-500">*</span>
                  </label>
                  <input
                    min={0}
                    type="number"
                    id="weight"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="weight"
                    defaultValue={productData?.weight}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Short Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="short_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="short_description"
                    defaultValue={productData?.description}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Highlight
                  </label>
                  <div className="text-[#495057]">
                    {productData && (
                      <input
                        type="checkbox"
                        name="is_top"
                        id="top_product"
                        defaultChecked={productData.isTopProduct}
                        // onChange={() => setIsCheckedTop(!isCheckedTop)}
                      />
                    )}{" "}
                    <label htmlFor="top_product" className="mx-3">
                      Top Product
                    </label>
                    <input
                      type="checkbox"
                      name="is_new"
                      id="new_arrival"
                      defaultChecked={productData?.isNewArrival}
                      // onChange={() => setIsCheckedNew(!isCheckedNew)}
                    />{" "}
                    <label htmlFor="new_arrival" className="mx-3">
                      New Arrival
                    </label>
                    <input
                      type="checkbox"
                      name="is_best"
                      id="best_product"
                      defaultChecked={productData?.isBestProduct}
                      // onChange={() => setIsCheckedBest(!isCheckedBest)}
                    />{" "}
                    <label htmlFor="best_product" className="mx-3">
                      Best Product
                    </label>
                    <input
                      type="checkbox"
                      name="is_popular"
                      id="is_popular"
                      defaultChecked={productData?.isPopular}
                      // onChange={() => setIsCheckedPopular(!isCheckedPopular)}
                    />
                    <label htmlFor="is_popular" className="mx-3">
                      Popular Product
                    </label>
                    <input
                      type="checkbox"
                      name="is_featured"
                      id="is_featured"
                      defaultChecked={productData?.isFeatured}
                      // onChange={() =>
                      //   setIsCheckedFeatured(!productData?.isFeatured)
                      // }
                    />{" "}
                    <label htmlFor="is_featured" className="mx-3">
                      Featured Product
                    </label>
                  </div>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                    name="productStatus"
                    id=""
                    required
                  >
                    <option
                      selected={productData?.status === "active"}
                      value="active"
                    >
                      Active
                    </option>
                    <option
                      selected={productData?.status === "inactive"}
                      value="inactive"
                    >
                      InActive
                    </option>
                  </select>
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="seo_title"
                    className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_title"
                    defaultValue={productData?.seoTitle}
                  />
                </div>

                <div className="form-group col-12 flex flex-col mb-[25px]">
                  <label className="inline-block text-sm tracking-wide mb-2">
                    SEO Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="seo_description"
                    className="form-control h-[100px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                    name="seo_description"
                    defaultValue={productData?.seoDescription}
                  />
                </div>

                <div className="col-12">
                  <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
