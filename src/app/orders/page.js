"use client";

import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { getAllOrdersForUser } from "@/services/order";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Orders() {
  const {
    user,
    pageLevelLoader,
    setPageLevelLoader,
    allOrdersForUser,
    setAllOrdersForUser,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllOrders() {
    setPageLevelLoader(true);
    const res = await getAllOrdersForUser(user?._id);

    if (res.success) {
      setPageLevelLoader(false);
      setAllOrdersForUser(res.data);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setPageLevelLoader(false);
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  useEffect(() => {
    if (user !== null) {
      extractAllOrders();
    }
  }, [user]);

  console.log(allOrdersForUser);

  if (pageLevelLoader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#000000"}
          loading={pageLevelLoader}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {allOrdersForUser && allOrdersForUser.length ? (
                  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allOrdersForUser.map((item) => (
                      <li
                        key={item._id}
                        className="bg-gray-200 shadow p-6 rounded-xl text-gray-800"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h1 className="text-lg font-bold">Order #: {item._id}</h1>
                          <p className="text-xl font-semibold">₹{item.totalPrice}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {item.orderItems.map((orderItem, index) => (
                            <div key={index}>
                              <img
                                className="h-24 w-full object-cover rounded-lg"
                                src={orderItem?.product?.imageUrl || ""}
                                alt="Order Item"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4">
                          <button
                            className={`bg-black text-white px-4 py-2 text-sm font-medium uppercase rounded ${
                              item.isProcessing
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-800"
                            }`}
                            disabled={item.isProcessing}
                          >
                            {item.isProcessing ? "Order is Processing" : "Order is Delivered"}
                          </button>
                          <button
                            className="bg-black text-white px-4 py-2 text-sm font-medium uppercase rounded hover:bg-gray-800"
                            onClick={() => router.push(`/orders/${item._id}`)}
                          >
                            View Details
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-gray-800">No orders found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </section>
  );
}
