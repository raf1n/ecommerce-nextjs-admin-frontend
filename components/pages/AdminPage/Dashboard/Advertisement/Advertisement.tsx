import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import Styles from "./Advertisement.module.css";
interface Props {}
import Select from "react-select";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { IAd, ICategories } from "../../../../../interfaces/models";
import SliderSidebarBannerOne from "./SliderSidebarBannerOne";
import SliderSidebarBannerTwo from "./SliderSidebarBannerTwo";
import HomepageSingleBannerOne from "./HomepageSingleBannerOne";
import HomepageSingleBannerTwo from "./HomepageSingleBannerTwo";
const Advertisement: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const user_slug = useSelector(() => controller.states.currentUser?.slug);
  const [adName, setAdName] = useState<string | undefined>("Slider Banner One");
  const [allCategories, setAllCategories] = useState<ICategories[]>([]);
  const [allAd, setAllAd] = useState<IAd[] | undefined>([]);

  const getAllCategory = async () => {
    if (user_slug) {
      const { res, err } = await EcommerceApi.allCategories();
      if (res) {
        setAllCategories(res);
      }
    }
  };

  const getAllAd = async () => {
    if (user_slug) {
      const { res, err } = await EcommerceApi.getAllAds();
      if (res) {
        setAllAd(res);
      }
    }
  };

  useEffect(() => {
    getAllAd();
    getAllCategory();
  }, [adName, user_slug]);

  return (
    <div className="w-full">
      <DashboardBreadcrumb
        headline="Advertisement"
        slug="Advertisement"
        link="/advertisement"
      ></DashboardBreadcrumb>
      <div className="m-8">
        <div
          className="rounded"
          style={{ marginTop: "25px", backgroundColor: "white" }}
        >
          <div className="py-4 px-2 w-full">
            <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-12 lg:gap-1">
              <div className="col-span-4">
                <ul className={`${Styles["adTypeList"]} m-3`}>
                  {allAd?.map((add, indx) => (
                    <li
                      key={indx}
                      onClick={() => setAdName(add?.adName)}
                      className={`p-2 ${
                        add.adName === adName ? Styles["adTypeListActive"] : ""
                      }`}
                    >
                      {add.adName}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-8 pt-3 mr-4 ml-4 lg:ml-0">
                <div className="shadow-sm bg-white rounded relative  border">
                  {adName === "Slider Banner One" && (
                    <SliderSidebarBannerOne
                      adName={adName}
                      allCategories={allCategories}
                    ></SliderSidebarBannerOne>
                  )}
                  {adName === "Slider Banner Two" && (
                    <SliderSidebarBannerTwo
                      adName={adName}
                      allCategories={allCategories}
                    ></SliderSidebarBannerTwo>
                  )}
                  {adName === "Homepage Single Banner One" && (
                    <HomepageSingleBannerOne
                      adName={adName}
                      allCategories={allCategories}
                    ></HomepageSingleBannerOne>
                  )}
                  {adName === "Homepage Single Banner Two" && (
                    <HomepageSingleBannerTwo
                      adName={adName}
                      allCategories={allCategories}
                    ></HomepageSingleBannerTwo>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
