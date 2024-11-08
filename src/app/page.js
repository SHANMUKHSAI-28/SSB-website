"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ContactUs from '../components/contact/contact';
import InternshipsPage from "./admin-view/internships/page";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();
    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="animate-fade-in">
        <div className="grid max-w-screen-xl px-4 py-0 mx-auto -mt-8 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
              SSB Automations
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-900">
              Your Space, Upgraded
            </p>
            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-blue-600 hover:bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Finverted-logo.jpg?alt=media&token=5d1a903e-d0b8-4133-beeb-fdfdd0371428"
              alt="Get Started"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <section className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              About SSB Automations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At SSB Automations, we specialize in providing advanced solutions
              for home and business automation. Our products are designed to
              enhance your lifestyle by offering convenience, security, and
              energy efficiency. Join us in making your spaces smarter and more
              efficient.
            </p>
          </div>
        </section>

        <InternshipsPage />

        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center mb-6">
            Newly Launched Products
          </h2>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {products && products.length
              ? products
                  .filter((item) => item.onSale === "yes")
                  .splice(0, 4)
                  .map((productItem) => (
                    <li
                      onClick={() => router.push(`/product/${productItem._id}`)}
                      className="cursor-pointer transform transition-transform hover:scale-105"
                      key={productItem._id}
                    >
                      <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <img
                          src={productItem.imageUrl}
                          alt={productItem.name}
                          className="object-cover w-full rounded-lg aspect-square"
                        />
                        <h3 className="mt-3 font-medium text-gray-900">
                          {productItem.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-800">
                          ₹{productItem.price}{" "}
                          <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                        </p>
                      </div>
                    </li>
                  ))
              : <p className="text-center col-span-4">No products available</p>}
          </ul>
        </div>

        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <h2 className="text-xl font-bold text-center mb-6">
            Shop by Category
          </h2>
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <div className="relative block group border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Fcoverimages%2Fretrocover.jpg?alt=media&token=e8cd4e49-bca2-405b-a6f6-462c37189fba"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-medium text-white">RetroFit</h3>
                  <button
                    onClick={() => router.push("/product/listing/RetroFit")}
                    className="mt-2 bg-blue-600 hover:bg-blue-800 px-4 py-2 text-xs font-medium text-white rounded transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <ContactUs />
      </section>
    </main>
  );
}
