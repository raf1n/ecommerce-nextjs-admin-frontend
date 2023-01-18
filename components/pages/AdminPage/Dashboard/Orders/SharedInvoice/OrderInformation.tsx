import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

interface Props {}

const OrderInformation: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div
        className="section-body bg-white my-12 rounded-[3px] "
        style={{ margin: "25px", padding: "20px" }}>
        <div className="invoice ">
          <div className="invoice-print  ">
            <div className="row ">
              <div className="">
                <div className="invoice-title flex justify-between ">
                  <h2>
                    <img
                      className="mr-2"
                      src="https://api.websolutionus.com/shopo/uploads/website-images/logo-2022-11-22-11-19-02-4634.png"
                      alt="logo"
                    />
                  </h2>
                  <div className="invoice-number">Order #344024836</div>
                  {/* -------------- Only hr  ------------------- */}
                </div>
                <div className="my-10 border-t border-gray-50"></div>
                {/* ------------------------------------------- */}
                <div className="my-10 text-sm text-[#6c757d] text-[13px] ">
                  <div className="row flex justify-between bg-white">
                    <div className="col-md-6">
                      <div className="text-left">
                        <strong>Billing Information:</strong>
                        <br /> Sed et error eligend Minim aut molestiae
                        <br /> Et labore exercitati
                        <br /> Deserunt beatae ulla
                        <br /> Aliquip accusantium, Gandhinagar, Gujarat, India
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6 right">
                      <div className="text-right">
                        <strong>Shipping Information :</strong>
                        <br />
                        fd wqe
                        <br />
                        dfshg@gmail.com
                        <br />
                        000000000000
                        <br />
                        England, United Kindom
                        <br />
                      </div>
                    </div>
                  </div>
                  {/* ---------------------------- */}
                  <div className="row flex justify-between bg-white">
                    <div className="col-md-6">
                      <div className="text-left">
                        <strong>Payment Information:</strong>
                        <br />
                        Method: Razorpay
                        <br />
                        Status : Success
                        <br />
                        Transaction:
                        <br />
                        pay_L5CX9iZAjdEqbw
                        <br />
                      </div>
                    </div>
                    <div className="col-md-6 right">
                      <div className="text-right">
                        <strong>Order Information:</strong>
                        <br />
                        Date: 17 January, 2023
                        <br />
                        Shipping: free shipping
                        <br />
                        Status : Pending
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row "></div>
          </div>
          <div className="text-md-right print-area"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
