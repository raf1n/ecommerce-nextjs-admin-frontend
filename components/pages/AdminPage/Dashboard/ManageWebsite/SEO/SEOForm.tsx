import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import { ISeo } from "../../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import { toast } from "react-hot-toast";

interface Props {
  allSeo: ISeo[] | undefined;
  topic: string | undefined;
}

const SEOForm: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [singleSeo, setSingleSeo] = useState<ISeo | undefined>(undefined);

  const { topic } = props;

  const getSingleSeo = async () => {
    const { res, err } = await EcommerceApi.getSingleSeo(topic);
    setSingleSeo(res);
  };

  useEffect(() => {
    getSingleSeo();
  }, [topic]);
  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const formData = {
      seo_title: e.target.title.value,
      seo_description: e.target.description.value,
    };
    const { res, err } = await EcommerceApi.updateSeoInfo(topic, formData);
    if (res) {
      toast.success("SEO Updated");
      getSingleSeo();
    }
  };

  return (
    <div className="px-6 py-4 leading-6 font-semibold tracking-wide text-[#34395e]">
      <form onSubmit={(e) => handleUpdate(e)}>
        <div className="mb-[25px]">
          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              SEO Title <span className="text-red-500">*</span>
            </label>
            <input
              defaultValue={singleSeo?.seo_title}
              required
              type="text"
              id="name"
              className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              name="title"
            />
          </div>

          <div className="form-group col-12 flex flex-col mb-[25px]">
            <label className="inline-block text-sm tracking-wide mb-2">
              SEO Description
            </label>
            <input
              defaultValue={singleSeo?.seo_description}
              required
              type="text"
              id="name"
              className="form-control h-[42px] rounded text-[#495057] text-sm py-[10px] px-[15px] bg-[#fdfdff] focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]"
              name="description"
            />
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

export default SEOForm;
