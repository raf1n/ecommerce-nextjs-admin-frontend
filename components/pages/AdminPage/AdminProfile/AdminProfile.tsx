import React, { useState } from "react";
import { useSelector } from "react-redux";
import DashboardBreadcrumb from "../../../shared/SharedDashboardBreadcumb/DashboardBreadcrumb";
import styles from "./AdminProfile.module.css";
import { controller } from "../../../../src/state/StateController";
import { SocialLogin } from "../../../helpers/SocialLogin";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import toast from "react-hot-toast";
interface Props {
  // slug: string;
  // link: string;
  // title: string;
}

const AdminProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault();
    const image = e.target.imageURL.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const { res, err } = await EcommerceApi.uploadImage(formData);

    if (res?.data?.url || !res?.data?.url) {
      let imageUrl;
      imageUrl = res?.data?.url;

      if (res?.data?.url === undefined || null) {
        imageUrl = states.currentUser?.avatar;
      }
      const newProfileData = {
        fullName: e.target.name.value,
        avatar: imageUrl,
      };
      const { res: socialRes, err } =
        await SocialLogin.updateLoggedInAdminProfile(
          states.currentUser?.slug,
          newProfileData
        );

      if (socialRes === "Profile updated") {
        const { res: dbRes, err } = await EcommerceApi.updateAdminProfile(
          states.currentUser?.slug,
          newProfileData
        );
        if (dbRes) {
          controller.setCurrentUser(dbRes);
        }
      }
    }
  };

  const handlePassChange = async (e: any) => {
    e.preventDefault();

    const email = states.currentUser?.email as string;

    if (newPass != confirmPass) {
      setErrorText("New passwords did not match.");
      return;
    }

    const { res, err } = await SocialLogin.changePassword(
      email,
      oldPass,
      newPass
    );

    console.log({ res, err });
    if (err) {
      setErrorText(err);
    } else {
      toast.success(res);
      e.target.reset();
      setErrorText("");
    }
  };

  return (
    <div>
      <div className="">
        <section className={`${styles["section"]}`}>
          <DashboardBreadcrumb
            headline="My Profile"
            slug="My Profile"
            link="/admin/AdminProfile"
          />

          <div className={`${styles["main-content"]}`}>
            <div className={`${styles["row"]} mt-4`}>
              <div>
                <form
                  onSubmit={handleUpdateProfile}
                  className={`${styles["card"]} ${styles["profile-widget"]}`}>
                  <div className={`${styles["profile-widget-header"]} `}>
                    {states && states.currentUser?.avatar && (
                      <img
                        className={`rounded-full ml-4   ${styles["profile-widget-picture"]} `}
                        src={states.currentUser?.avatar}
                        alt=""
                      />
                    )}
                  </div>
                  <div className={`${styles["profile-widget-description"]}`}>
                    <div>
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
                            name="imageURL"
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
                          {states.currentUser?.fullName && (
                            <input
                              className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm text-qgray"
                              type="text"
                              defaultValue={
                                states.currentUser?.fullName
                                  ? states.currentUser?.fullName
                                  : ""
                              }
                              name="name"
                              id="name"
                            />
                          )}
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
                          {states.currentUser?.email && (
                            <input
                              className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm text-qgray"
                              type="email"
                              defaultValue={states.currentUser.email}
                              name="email"
                              id="email"
                              readOnly
                            />
                          )}
                        </div>

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* password  */}

            <div>
              <form
                onSubmit={handlePassChange}
                className={`${styles["card"]} ${styles["profile-widget-password"]}`}>
                <div className={`${styles["profile-widget-description"]}`}>
                  <div>
                    <div className={`${styles["row"]} `}>
                      <h1 className=" text-xl mb-7">Update Password</h1>
                      <div className="mt-4">
                        <div className="my-4 ">
                          <label
                            className="text-qgray font-semibold mt-4	text-sm"
                            htmlFor="">
                            Old Password
                          </label>
                          <span className="text-red-500 ml-2">*</span>
                        </div>
                        <input
                          onChange={(e) => setOldPass(e.target.value)}
                          className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]  rounded-md text-sm"
                          type="password"
                          name="oldPassword"
                          id="oldPassword"
                        />
                      </div>

                      <div className="mt-4">
                        <div className="my-4">
                          <label
                            className="text-qgray font-semibold mt-4	text-sm"
                            htmlFor="">
                            New Password
                          </label>
                          <span className="text-red-500 ml-2">*</span>
                        </div>
                        <input
                          onChange={(e) => setNewPass(e.target.value)}
                          className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc]  rounded-md text-sm"
                          type="password"
                          name="password"
                          id="password"
                        />
                      </div>
                      <div className="mt-4">
                        <div className="my-4">
                          <label
                            className="text-qgray font-semibold mt-4	text-sm"
                            htmlFor="">
                            Confirm New Password
                          </label>
                          <span className="text-red-500 ml-2">*</span>
                        </div>
                        <input
                          onChange={(e) => setConfirmPass(e.target.value)}
                          className="w-full px-3 py-3 focus:outline-none focus:border-[#95a0f4] border border-[#e4e6fc] rounded-md text-sm"
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                          Update
                        </button>
                      </div>
                      {errorText && (
                        <div className="mt-4 text-qred font-semibold">
                          <span>{errorText}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminProfile;
