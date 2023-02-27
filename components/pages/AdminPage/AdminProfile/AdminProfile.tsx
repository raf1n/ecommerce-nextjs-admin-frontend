import React from "react";
import { useSelector } from "react-redux";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import styles from "./AdminProfile.module.css";
import { controller } from "../../../../src/state/StateController";

interface Props {
  // slug: string;
  // link: string;
  // title: string;
}

const AdminProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className="">
        <section className={`${styles["section"]}`}>
          <DashboardBreadcrumb
            headline="My Profile"
            slug="My Profile"
            link="/AdminProfile"></DashboardBreadcrumb>

          <div className={`${styles["main-content"]}`}>
            <div className={`${styles["row"]} mt-4`}>
              <div>
                <div
                  className={`${styles["card"]} ${styles["profile-widget"]}`}>
                  <div className={`${styles["profile-widget-header"]} `}>
                    <img
                      className={`rounded-full ml-4   ${styles["profile-widget-picture"]} `}
                      src="https://api.websolutionus.com/shopo/uploads/website-images/ibrahim-khalil-2022-01-30-02-48-50-5743.jpg"
                      alt=""
                    />
                  </div>
                  <div className={`${styles["profile-widget-description"]}`}>
                    <form action="">
                      <div className={`${styles["row"]} `}>
                        <div className="form-group grid text-sm">
                          <label
                            className="text-sm text-qgray font-semibold"
                            htmlFor="">
                            New Image
                          </label>
                          <input
                            className="mt-4"
                            type="file"
                            name="image"
                            id=""
                          />
                        </div>

                        <div className="mt-4">
                          <div className="my-4 ">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor="">
                              Name
                            </label>
                            <span className="text-red-500 ml-2">*</span>
                          </div>
                          <input
                            className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm text-qgray"
                            type="text"
                            value="Admin"
                            name="name"
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor="">
                              Email
                            </label>
                            <span className="text-red-500 ml-2">*</span>
                          </div>
                          <input
                            className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm text-qgray"
                            type="email"
                            value="admin@gmail.com"
                            name="name"
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor="">
                              Password
                            </label>
                            {/* <span className='text-red-500 ml-2'>*</span> */}
                          </div>
                          <input
                            className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]  rounded-md text-sm"
                            type="password"
                            name=""
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor="">
                              Confirm Password
                            </label>
                            {/* <span className='text-red-500 ml-2'>*</span> */}
                          </div>
                          <input
                            className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm"
                            type="password"
                            name=""
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
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
        </section>
      </div>
    </div>
  );
};

export default AdminProfile;
