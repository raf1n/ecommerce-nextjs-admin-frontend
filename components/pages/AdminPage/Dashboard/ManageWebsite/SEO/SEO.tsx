import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import { ISeo } from "../../../../../../interfaces/models";
import Styles from "../../Advertisement/Advertisement.module.css";
import { EcommerceApi } from "../../../../../../src/API/EcommerceApi";
import SEOForm from "./SEOForm";
interface Props {}

const SEO: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [topicName, setTopicName] = useState<string | undefined>("Home Page");

  const [allSeo, setAllSeo] = useState<ISeo[] | undefined>([]);

  const [singleSeo, setSingleSeo] = useState<ISeo | undefined>(undefined);

  useEffect(() => {
    const getAllSeoData = async () => {
      const { res, err } = await EcommerceApi.getAllSeo();
      if (res) {
        setAllSeo(res);
      }
    };
    getAllSeoData();
  }, [topicName]);

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
                  {allSeo?.map((seo, indx) => (
                    <li
                      key={indx}
                      onClick={() => setTopicName(seo?.topic)}
                      className={`p-2 ${
                        seo.topic === topicName
                          ? Styles["adTypeListActive"]
                          : ""
                      }`}
                    >
                      {seo.topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-8 pt-3 mr-4 ml-4 lg:ml-0">
                {allSeo && topicName && (
                  <div className="shadow-sm bg-white rounded relative  border">
                    <SEOForm allSeo={allSeo} topic={topicName}></SEOForm>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
