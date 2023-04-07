import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../../../interfaces/models";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { controller } from "../../../../src/state/StateController";
import { CookiesHandler } from "../../../../src/utils/CookiesHandler";
import { SocialLogin } from "../../../helpers/SocialLogin";
import { toast } from "react-hot-toast";

interface Props {}

const AdminLogin: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorTextLogin, setErrorTextLogin] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [successTextLogin, setSuccessTextLogin] = useState("");
  const [loggedinSendVerify, setLoggedinSendVerify] = useState(false);
  const [loggedinSendVerifyText, setLoggedinSendVerifyText] = useState("");

  const router = useRouter();

  useEffect(() => {
    SocialLogin.initFirebase();
  }, []);

  const sendEmailVerify = async () => {
    SocialLogin.sendEmail();
    setErrorLogin(false);
    setSuccessLogin(false);
    setLoggedinSendVerifyText("Verification sent");
    toast.success("Verification sent");
  };

  const handleEmailPasswordLogin = async (e: any) => {
    e.preventDefault();
    const loginPassword = e.target.password.value;
    const loginEmail = e.target.email.value;

    const { res, err } = await EcommerceApi.getUserByEmail(loginEmail);
    if (!res?.email) {
      toast.error(
        "Sorry, we could not find you in our database. If you think there is an error please contact service."
      );
      return;
    } else if (res.status === "inactive") {
      toast.error("Your account is currently inactive.");
      return;
    }
    if (loginPassword.length > 15) {
      setErrorLogin(true);
      toast.error("Password can not be more than 15 characters");
    } else if (loginEmail.length > 50) {
      setErrorLogin(true);
      toast.error("Email can not be more than 50 characters");
    } else {
      const { res, err } = await SocialLogin.loginWithEmailPassword(
        loginEmail,
        loginPassword
      );

      if (err) {
        setErrorLogin(true);
        setSuccessLogin(false);
        setErrorTextLogin(err);
      } else {
        console.log("resss", res);
        setErrorLogin(false);

        if (!res.user.emailVerified) {
          console.log("kkk");
          setLoggedinSendVerify(true);
          setLoggedinSendVerifyText("verify first and login again");
        } else {
          const token = res?.user?.accessToken;
          const user = res.user;

          setLoggedinSendVerify(false);

          if (token && user?.email) {
            console.log("enter");
            const { email, displayName } = user;
            const data: Partial<IUser> = {
              token: token,
              tokenType: "email",
              email: email,
              avatar: "https://tinyurl.com/382e6w5t",
              fullName: displayName !== null ? displayName : "",
            };

            const { res, err } = await EcommerceApi.login(data);
            if (err) {
              setErrorLogin(true);
              setSuccessLogin(false);
              toast.error("Server Error");
            } else {
              if (res.role == "buyer") {
                SocialLogin.logOut();
                setErrorLogin(true);
                toast.success("Already registered as Buyer");
              } else if (res.slug && res.access_token) {
                controller.setCurrentUser(res);
                setErrorLogin(false);
                setSuccessLogin(true);
                CookiesHandler.setAccessToken(res.access_token);
                CookiesHandler.setSlug(res.slug as string);
                toast.success("You have signed In Successfully!");
                if (res.role == "admin") {
                  router.push("/admin");
                } else if (res.role == "seller") {
                  router.push("/seller");
                }
              }
            }
          }
        }
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img
              className="mr-2"
              src="https://api.websolutionus.com/shopo/uploads/website-images/logo-2022-11-22-11-19-02-4634.png"
              alt="logo"
            />
            {/* ShopO */}
          </a>
          <div
            className="w-full bg-white rounded shadow  md:mt-0 sm:max-w-md xl:p-0"
            style={{ borderTop: "2px solid blue" }}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-sm text-blue-600   md:text-2xl">Login</h1>
              <hr />
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={(e) => {
                  handleEmailPasswordLogin(e);
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // maxLength={50}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password (6-25 char)
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    // maxLength={25}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </form>
              {errorLogin && (
                <div style={{ color: "red" }}>{errorTextLogin}</div>
              )}
              {successLogin && (
                <div style={{ color: "black" }}>{successTextLogin}</div>
              )}
              <div className="flex justify-center">
                {loggedinSendVerify && (
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "grey",
                      borderRadius: "15px",
                      margin: "10px 0",
                      width: "260px",
                      color: "white",
                    }}
                    onClick={() => {
                      sendEmailVerify();
                    }}
                  >
                    {loggedinSendVerifyText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
