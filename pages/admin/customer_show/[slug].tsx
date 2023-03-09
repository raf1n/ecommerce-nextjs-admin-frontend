import { GetServerSideProps } from "next";
import React from "react";
import { useSelector } from "react-redux";
import CustomerShow from "../../../components/pages/AdminPage/Dashboard/Users/CustomerShow/CustomerShow";
import { IUser } from "../../../interfaces/models";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { controller } from "../../../src/state/StateController";

interface Props {
  user: IUser;
}

const CustomerDetail: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <CustomerShow user={props.user} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  //@ts-ignore
  const { slug } = context.params;

  const { res, err } = await EcommerceApi.getUserAuth(slug);

  if (err) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: res,
    },
  };
};

export default CustomerDetail;
