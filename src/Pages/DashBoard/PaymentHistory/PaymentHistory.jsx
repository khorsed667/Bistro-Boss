import React from "react";
import UsePayments from "../../../Components/UsePayments/UsePayments";
import { Helmet } from "react-helmet";
import Headings from "../../../Components/Headings/Headings";

const PaymentHistory = () => {
  const [payment] = UsePayments();

  const total = payment?.reduce((sum, item) => item.price + sum, 0);
  const totalAmount = total.toFixed(2);

  return (
    <div className="w-full">
      <Helmet>
        <title>Payment History | Bistro Boss</title>
      </Helmet>
      <Headings
        subHeading={"Our Beloved User"}
        headings={"Your Payments"}
      ></Headings>
      <div className="lg:w-5/6 mx-auto bg-white m-5 p-5">
        <div className=" my-5">
          <p className="text-xl lg:text-3xl uppercase font-cinzel">
            Total payments: {payment.length}
          </p>{" "}
          <br />
          <p className="text-xl lg:text-3xl uppercase font-cinzel">
            Total Amount: ${totalAmount}
          </p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white text-center">
                  <th>#</th>
                  <th>Tranjection Id</th>
                  <th>Total Items</th>
                  <th>Order Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payment.map((itm, index) => (
                  <tr key={index} className="text-center">
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <p>{itm.tranjectionId}</p>
                    </td>
                    <td>{itm.totalItems}</td>
                    <td>{itm.status}</td>
                    <td>${itm.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
