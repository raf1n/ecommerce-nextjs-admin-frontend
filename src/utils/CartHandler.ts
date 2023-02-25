import { useSelector } from "react-redux";
import { controller, IStates } from "./../state/StateController";
import { ICartProduct, IProduct } from "./../../interfaces/models";
import { EcommerceApi } from "./../API/EcommerceApi";

export const CartHandler = {
  cartSubTotal: (productsData: ICartProduct[]) =>
    productsData?.reduce((acc, currItem) => {
      if (currItem.offerPrice) {
        return acc + currItem?.offerPrice * currItem?.quantity;
      } else if (currItem?.price) {
        return acc + currItem?.price * currItem?.quantity;
      }
      return 0;
    }, 0),

  getPrice: (currItem: ICartProduct) => {
    if (currItem.offerPrice) {
      return currItem?.offerPrice * currItem?.quantity;
    } else if (currItem?.price) {
      return currItem?.price * currItem?.quantity;
    }
  },

  // handleDeleteFromCart: async (product: IProduct) => {
  // const { res, err } = await EcommerceApi.deleteFromCart(product?.slug);
  // if (res) {
  //   controller.setRemoveCartItem(product);
  // }
  // }
};
