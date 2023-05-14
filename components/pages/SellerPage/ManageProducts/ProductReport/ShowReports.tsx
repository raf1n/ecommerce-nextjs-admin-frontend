import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IReportedItem } from "../../../../../interfaces/models";
import { EcommerceApi } from "../../../../../src/API/EcommerceApi";
import { controller } from "../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import SharedGoBackButton from "../../../../shared/SharedGoBackButton/SharedGoBackButton";

interface Props {}

const ShowReports: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [reportData, setReportData] = useState<IReportedItem | null>(null);
  
  const { asPath } = useRouter();
  const slug = asPath.split("/")[3];


  useEffect(() => {
    const getSingleCategory = async () => {
      if (slug !== "[id]") {
        const { res, err } = await EcommerceApi.getSingleReport(slug);
        if (res) {
          console.log(res);
          setReportData(res);
        } else {
          console.log(err);
        }
      }
    };
    getSingleCategory();
  }, [slug]);

  return (
    <div className="w-full ">
      <DashboardBreadcrumb
        headline="Product Report"
        link="/product_report/report"
        slug="Product Report"
      ></DashboardBreadcrumb>
      <div className="m-6">
        <div className="section-body">
          <SharedGoBackButton
            title="Product Report"
            link="/seller/product_report"
          ></SharedGoBackButton>
        </div>
      </div>
      <div className="mx-[40px] mt-10 text-qgray bg-white">
        <div className="p-10">
          <table className="w-full">
            <tbody>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">User Name</td>
                <td className="px-[25px] pl-96 h-16">
                  {reportData?.user?.fullName}
                </td>
              </tr>
              <tr>
                <td className="px-[25px] h-16">User Email</td>
                <td className="px-[25px] pl-96 h-16">
                  {reportData?.user?.email}
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">Product</td>
                <td className="px-[25px] pl-96 h-16">
                  {reportData?.reportedProducts?.productName}
                </td>
              </tr>
              <tr>
                <td className="px-[25px] h-16">Title</td>
                <td className="px-[25px] pl-96 h-16">{reportData?.title}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-[25px] h-16">Note</td>
                <td className="px-[25px] pl-96 h-16">{reportData?.note}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowReports;
