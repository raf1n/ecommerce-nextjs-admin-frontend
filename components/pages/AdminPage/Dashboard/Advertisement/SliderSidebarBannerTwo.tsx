import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import Select from "react-select";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { IAd, ICategories } from "../../../../../interfaces/models";
interface Props {
  adName: string;
  allCategories: ICategories[];
}

const SliderSidebarBannerTwo: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [ad, setAd] = useState<IAd | undefined>({});
  const [refresh, setRefresh] = useState(false);
  const { adName, allCategories } = props;

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

  useEffect(() => {
    const handleSingleAd = async () => {
      const { res, err } = await EcommerceApi.getAd(adName);
      setAd(res);
    };

    handleSingleAd();
  }, [refresh]);

  const defaultValueSelected = allCategories.find(
    (cat) => cat?.cat_slug === ad?.category_link
  );

  const handleAdUpdate = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadImage(formData);
    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;
      // setImageLink(data?.data?.url);
      if (res?.data?.url === undefined || err) {
        imageUrl = "" || ad?.adImage;
      }
      const adData = {
        title_one: e.target.titleOne.value,
        title_two: e.target.titleTwo.value,
        adImage: imageUrl,
        badge: e.target.badge.value,
        category_link: e.target.category.value,
        status: e.target.status.value,
      };
      console.log(adData);
      const { res: adRes, err: adErr } = await EcommerceApi.updateAd(
        ad?.slug,
        adData
      );
      if (adRes) {
        console.log(adRes);
        setRefresh(!refresh);
      }
    }
  };

  return (
    <div className="px-6 py-4 leading-6 font-semibold tracking-wide text-[#34395e]">
      <form onSubmit={(e) => handleAdUpdate(e)}>
        <div className="mb-[25px]">
          <label className="inline-block text-sm tracking-wide mb-2">
            Current Banner
          </label>
          <div>
            <picture>
              <img
                id="preview-img"
                className="admin-img border border-[#ddd] p-0 m-0 w-[200px]  h-[130px] object-cover"
                src={ad?.adImage}
                alt=""
              />
            </picture>
          </div>
          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2 mt-5">
              New Banner
              <span className="text-red-500">*</span>
            </label>
            <input name="imageURL" type="file" className="form-control-file" />
          </div>
          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              Title One <span className="text-red-500">*</span>
            </label>
            <input
              defaultValue={ad?.title_one}
              required
              type="text"
              id="name"
              className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              name="titleOne"
            />
          </div>

          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              Title Two
            </label>
            <input
              defaultValue={ad?.title_two}
              required
              type="text"
              id="name"
              className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              name="titleTwo"
            />
          </div>
          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              Badge
            </label>
            <input
              defaultValue={ad?.badge}
              required
              type="text"
              id="name"
              className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              name="badge"
            />
          </div>
          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              Category Link
            </label>
            {defaultValueSelected && (
              <Select
                name="category"
                id="category"
                // value={selectedOption}
                defaultValue={{
                  label: defaultValueSelected?.cat_name,
                  value: defaultValueSelected?.cat_slug,
                }}
                options={allCategories.map((cat: any) => {
                  return {
                    value: cat.cat_slug,
                    label: cat.cat_name,
                  };
                })}
                styles={reactSelectStyle}
                components={{
                  // Menu,
                  IndicatorSeparator: () => null,
                }}
              />
            )}
            {!defaultValueSelected && (
              <Select
                name="category"
                id="category"
                // value={selectedOption}

                options={allCategories.map((cat: any) => {
                  return {
                    value: cat.cat_slug,
                    label: cat.cat_name,
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
              Status <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border rounded p-3 border-gray-200 bg-[#fdfdff] focus:outline-none"
              name="status"
              id=""
              required
            >
              <option selected={ad?.status === "active"} value="active">
                Active
              </option>
              <option selected={ad?.status === "inactive"} value="inactive">
                InActive
              </option>
            </select>
          </div>
          <div className="">
            <button className="text-white rounded py-[.3rem] px-[.8rem] shadow-[0_2px_6px_#acb5f6] border border-[#6777ef] bg-[#2046DA]">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SliderSidebarBannerTwo;
