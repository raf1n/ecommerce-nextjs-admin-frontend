import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import {
  ICategories,
  IMegaCategory,
  ISubCategories,
} from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";

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

const EditMegaMenuCategory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { asPath } = useRouter();
  const megaCatSlug = asPath.split("/")[2];

  const selectRef = useRef(null);

  const [megaCatData, setMegaCatData] = useState<IMegaCategory | null>(null);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    ICategories | undefined
  >(undefined);
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([]);
  const [filteredSubCat, setFilteredSubCat] = useState<ISubCategories[]>([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    };
    fetchAllCategoriesSubCatBrand();
  }, []);

  useEffect(() => {
    console.log(megaCatSlug);
    const getSingleCategory = async () => {
      if (megaCatSlug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleMegaMenuCategory(
          megaCatSlug
        );
        if (res) {
          setMegaCatData(res);
          const filteredSubCat = subCategories?.filter(
            (subCat) => subCat?.cat_slug === res.cat_slug
          );
          setSelectedCategory(
            categories.find(
              (cat) => cat.cat_slug === res.cat_slug
            )
          );
          setFilteredSubCat(filteredSubCat);

        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [megaCatSlug, categories, subCategories]);

  const handleMultiSelect = (selected: any) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const cat_name = selectedCategory?.cat_name;
    const cat_slug = selectedCategory?.cat_slug;
    const serial = parseInt(e.target.serial.value);
    const sub_cat_list = selectedOptions;
    const status = e.target.status.value;

    console.log({ cat_name, cat_slug, serial, sub_cat_list, status });
    const megaCategory = { cat_name, cat_slug, serial, sub_cat_list, status };

    if (megaCatData?.slug) {
      const { res, err } = await EcommerceApi.updateMegaMenuCategory(
        megaCatData.slug,
        megaCategory
      );
      if (res) {
        e.target.reset();
      }
    }
  };

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Mega Menu Category"
        slug="Mega Menu Category"
        link="/mega_menu_category"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Mega Menu Category"
            link="/mega_menu_category"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="px-[25px] w-full relative">
        <div className="mt-4">
          <div className="mt-6 shadow-md bg-white rounded relative mb-7 border-0">
            <div className="px-5 py-1 leading-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Category
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    {megaCatData && categories && (
                      <select
                        defaultValue={megaCatData?.cat_slug}
                        onChange={(e) => {
                          const filteredSubCat = subCategories?.filter(
                            (subCat) => subCat?.cat_slug === e.target.value
                          );
                          setSelectedCategory(
                            categories.find(
                              (cat) => cat.cat_slug === e.target.value
                            )
                          );
                          setFilteredSubCat(filteredSubCat);
                          //@ts-ignore
                          selectRef.current.clearValue();
                        }}
                        required
                        name="category"
                        id="category"
                        className="w-full form-control h-[42px] rounded text-[#495057] text-sm p-3  bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                      >
                        {categories.map((cat: ICategories, indx) => (
                          <option key={indx} value={cat.cat_slug}>
                            {cat.cat_name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Serial
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    <input
                      className="w-full p-3 border text-gray-500 border-gray-200 bg-[#fdfdff] rounded-md text-sm"
                      type="text"
                      name="serial"
                      defaultValue={megaCatData?.serial}
                    />
                  </div>

                  <div className="my-4 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Sub Category
                    </label>
                    {megaCatData && categories.length !== 0  && (
                      <Select
                        isMulti
                        name="sub_cat_list"
                        id="sub_cat_list"
                        ref={selectRef}
                        defaultValue={megaCatData.sub_cat_list}
                        options={filteredSubCat.map((subCat) => {
                          return {
                            value: subCat.slug,
                            label: subCat.subcat_name,
                          };
                        })}
                        styles={reactSelectStyle}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        onChange={handleMultiSelect}
                      />
                    )} 
                  </div>

                  <div className="mt-4">
                    <div className="my-2">
                      <label
                        className="text-[#34395e] tracking-[.5px] font-semibold mt-4	text-sm"
                        htmlFor=""
                      >
                        Status
                      </label>
                      <span className="text-red-500 ml-2">*</span>
                    </div>
                    {megaCatData && (
                      <select
                        className="w-full text-gray-500 border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                        name="status"
                        defaultValue={megaCatData?.status}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    )}
                  </div>
                  <div className="mt-4 pb-3">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMegaMenuCategory;
