import React, { useEffect } from "react";
import Router from "next/router";
import { EcommerceApi } from "../../src/API/EcommerceApi";
import { CookiesHandler } from "./../../src/utils/CookiesHandler";

const login = "/login?redirected=true";

const checkUserAuthentication = async (context: any) => {
  // console.log("contextCU", context);
  // console.log("contextC", context.req?.cookies?.USER_SLUG);

  const us = context.req?.cookies?.USER_SLUG ?? CookiesHandler.getSlug() ?? "";
  // console.log({ us });

  const { res, err } = await EcommerceApi.getUserAuth(us);

  // console.log(res);

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
    setTimeout(() => {
    
    }, 200);
    // console.log("contextC", context.req?.cookies?.USER_SLUG);
    // const user_slug = context.req?.cookies?.USER_SLUG;
    const userAuth = await checkUserAuthentication(context);

    // console.log({ userAuth });
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
