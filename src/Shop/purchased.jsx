import React, { Component } from "react";
import Header from "./header";
import { FaTrashCan } from "react-icons/fa6";

export default class Purchased extends Component {
  trashCan(id) {
    if (this.props.sendTrash) {
      this.props.sendTrash(id);
    } else {
      console.log("sendTrash not defined", id);
    }
  }

  render() {
    const { Specifications } = this.props;

    return (
      <>
        <Header text="Back to Shop" link="/" />

        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-3xl max-w-4xl w-full p-6 sm:p-10 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                🧾 Order Confirmation
              </h1>
              <span className="mt-2 sm:mt-0 text-indigo-600 font-semibold">
                Thank you for your purchase!
              </span>
            </div>

            
            {Specifications.length === 0 ? (
              <div className="text-center text-gray-500 py-10">
                No products have been purchased.
              </div>
            ) : (
              <>
               
                {Specifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-5 rounded-2xl mb-8 hover:shadow-md transition relative"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-contain rounded-xl"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base mt-1">
                          {item.description}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          Quantity:{" "}
                          <span className="font-semibold text-gray-800">1</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end w-full md:w-auto mt-4 md:mt-0">
                      <div className="text-indigo-600 font-bold text-lg md:text-xl mr-6">
                        ${item.price}
                      </div>

                     
                      <button
                        className="text-gray-500 hover:text-red-600 transition p-2 rounded-full hover:bg-red-100"
                        title="Remove item"
                        onClick={this.trashCan.bind(this, item.id)}
                      >
                        <FaTrashCan className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))}

                
                <div className="bg-gray-50 p-6 rounded-2xl shadow-inner mb-6">
                  <h2 className="text-lg font-bold mb-3 text-gray-800">
                    Order Details
                  </h2>

                 
                  <div className="flex justify-between text-gray-600 py-1">
                    <span>Subtotal</span>
                    <span>
                      $
                      {Specifications.reduce(
                        (sum, item) =>
                          sum + Number(item.price.replace(",", "")),
                        0
                      ).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600 py-1">
                    <span>Shipping</span>
                    <span>$25</span>
                  </div>

                  <div className="flex justify-between text-gray-800 font-bold text-lg border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>
                      $
                      {(
                        Specifications.reduce(
                          (sum, item) =>
                            sum + Number(item.price.replace(",", "")),
                          0
                        ) + 25
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>

              
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="w-full sm:w-1/2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition text-base shadow-md">
                    📥 Download Invoice
                  </button>
                  <button className="w-full sm:w-1/2 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition text-base shadow-md">
                    📦 Track Order
                  </button>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                  Need help? Contact our
                  <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                    support team
                  </span>
                  .
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
