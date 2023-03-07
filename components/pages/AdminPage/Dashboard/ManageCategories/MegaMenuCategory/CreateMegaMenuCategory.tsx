import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  ICategories,
  ISubCategories,
} from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../../shared/SharedGoBackButton/SharedGoBackButton";
import Select from 'react-select';

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

const CreateMegaMenuCategory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const selectRef = useRef(null);

  const [categories, setCategories] = useState<ICategories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategories | undefined>(undefined)
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([]);
  const [filteredSubCat, setFilteredSubCat] = useState<ISubCategories[]>([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelect = (selected: any) => {
    setSelectedOptions(selected);
  };

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


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e)
    const cat_name = selectedCategory?.cat_name;
    const cat_slug = selectedCategory?.cat_slug;
    const serial = parseInt(e.target.serial.value);
    const sub_cat_list = selectedOptions;
    const status = e.target.status.value;

    console.log({cat_name, cat_slug, serial, sub_cat_list, status});
    const megaCategory = {cat_name, cat_slug, serial, sub_cat_list, status};

    const { res, err } = await EcommerceApi.postMegaMenuCategory(megaCategory);
    if (res) {
      e.target.reset();
      //@ts-ignore
      selectRef.current.clearValue();
    }
  }

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Create Mega Menu Category"
        link="/admin/mega_menu_category/create"
        slug="Create Mega Menu Category"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Mega Menu Category"
            link="/admin/mega_menu_category"
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
                    <select
                      onChange={(e) => {
                        const filteredSubCat = subCategories?.filter(
                          (subCat) => subCat?.cat_slug === e.target.value
                        );
                        setSelectedCategory(categories.find(cat => cat.cat_slug === e.target.value));
                        setFilteredSubCat(filteredSubCat);
                        //@ts-ignore
                        selectRef.current.clearValue();
                      }}
                      required
                      name="category"
                      id="category"
                      className="w-full form-control h-[42px] rounded text-[#495057] text-sm p-3  bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
                      placeholder="Select Category"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat: ICategories, indx) => (
                        <option key={indx} value={cat.cat_slug}>
                          {cat.cat_name}
                        </option>
                      ))}
                    </select>
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
                      id=""
                    />
                  </div>

                  <div className="my-4 mb-[25px]">
                    <label className="inline-block text-sm tracking-wide mb-2">
                      Sub Category
                    </label>
                    <Select
                      isMulti
                      name="sub_cat_list"
                      id="sub_cat_list"
                      ref={selectRef}
                      options={filteredSubCat.map(subCat => {
                        return {
                          value: subCat.slug,
                        label: subCat.subcat_name
                        }
                      })}
                      styles={reactSelectStyle}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      onChange={handleMultiSelect}
                    />
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
                    <select
                      className="w-full text-gray-500 border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
                      name="status"
                      id=""
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="mt-4 pb-3">
                    <button
                      type="submit"
                      className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded"
                    >
                      Save
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

export default CreateMegaMenuCategory;
