import React from "react";
import Router from "next/router";
import { EcommerceApi } from "../../src/API/EcommerceApi";
import { CookiesHandler } from "./../../src/utils/CookiesHandler";

const login = "/login?redirected=true";

const checkUserAuthentication = async () => {
  console.log(CookiesHandler.getSlug(), "getSlug");

  const { res, err } = await EcommerceApi.getUserAuth(
    CookiesHandler.getSlug() as string
  );

  if (res && res.role === "admin") {
    return {
      auth: res,
    }; // change null to { isAdmin: true } for test it.
  } else {
    return { auth: null };
  }
};

//@ts-ignore
export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: any) => {
    console.log("cookies", context.req);
    const userAuth = await checkUserAuthentication();


    console.log({ userAuth });
    // console.log({ cookies: context.req });

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};
