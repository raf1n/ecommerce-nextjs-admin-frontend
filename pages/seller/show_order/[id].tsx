import React from "react";
import { useSelector } from "react-redux";

import { NextPage, NextPageContext } from "next";
import { IOrder, ISeller, ISellerOrder } from "../../../interfaces/models";
import SharedInvoice from "../../../components/pages/SellerPage/Dashboard/Orders/SharedInvoice/SharedInvoice";
import withSellerPrivate from "../../../components/hocs/withSellerPrivate";
import { controller } from "../../../src/state/StateController";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { CookiesHandler } from "../../../src/utils/CookiesHandler";

interface Props {
  order: ISellerOrder;
}
const OrderDetailsPage: NextPage<any> = (props) => {
  console.log(props);
  const order = props?.props?.order;
  const states = useSelector(() => controller.states);

  return <SharedInvoice order={order} />;
};

OrderDetailsPage.getInitialProps = async (context: any) => {
  const { id } = context.query;

  const seller_slug = CookiesHandler.getSlug()
    ? CookiesHandler.getSlug()
    : context?.req?.cookies?.USER_SLUG;

  if (seller_slug) {
    const { res, err } = await EcommerceApi.getSingleOrderOfSeller(
      seller_slug as string,
      id as string
    );
    // console.log({ res, err });

    return { props: { order: res } };
  }
};

export default withSellerPrivate(OrderDetailsPage);
