import React from "react";
import { useSelector } from "react-redux";
import withAdminPrivate from "../../../components/hocs/withAdminPrivate";
import SharedInvoice from "../../../components/pages/AdminPage/Dashboard/Orders/SharedInvoice/SharedInvoice";
import { controller } from "../../../src/state/StateController";

import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { NextPage, NextPageContext } from "next";
import { IOrder } from "../../../interfaces/models";

interface Props {
  order: IOrder;
}

const OrderDetailsPage: NextPage<any> = (props) => {
  console.log(props);
  const order = props.props.order;
  const states = useSelector(() => controller.states);

  return <SharedInvoice order={order} />;
};

OrderDetailsPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  console.log(id);

  const { res, err } = await EcommerceApi.getSingleOrderData(id as string);
  console.log({ res, err });

  return { props: { order: res } };
};

export default withAdminPrivate(OrderDetailsPage);
