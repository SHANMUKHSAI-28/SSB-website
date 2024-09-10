"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ContactUs from '../components/contact/contact';
import InternshipsPage from "./admin-view/internships/page";
import Script from 'next/script'; // For handling external scripts properly in Next.js

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
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-0 mx-auto -mt-8 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
              SSB AUTOMATIONS
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-900">
              Your Space, Upgraded.
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Get Started
            </button>

            {/* Google AdSense Ad Unit */}
            <ins className="adsbygoogle"
              style={{ display: 'block', marginTop: '20px' }}
              data-ad-client="ca-pub-1080280280607971"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <Script id="adsbygoogle" strategy="lazyOnload">
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Finverted-logo.jpg?alt=media&token=5d1a903e-d0b8-4133-beeb-fdfdd0371428"
              alt="Get Started"
            />
          </div>
        </div>

        {/* Company Introduction */}
        <section className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              About SSB AUTOMATIONS
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At HOMOVATE, we specialize in providing advanced solutions
              for home and business automation. Our products are designed to
              enhance your lifestyle by offering convenience, security, and
              energy efficiency. Join us in making your spaces smarter and more
              efficient.
            </p>
          </div>
        </section>

        {/* Internships Section */}
        <InternshipsPage />

        {/* Products Section */}
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Newly launched Products
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop ALL
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() => router.push(`/product/${productItem._id}`)}
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-800">
                              ₹{productItem.price}{" "}
                              <span className="text-red-700">
                                (-{productItem.priceDrop}% Off)
                              </span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>

        {/* Shop by Category Section */}
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              SHOP BY CATEGORY
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Fcoverimages%2Fretrocover.jpg?alt=media&token=e8cd4e49-bca2-405b-a6f6-462c37189fba"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">RetroFit</h3>
                  <button
                    onClick={() => router.push("/product/listing/RetroFit")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Fcoverimages%2Fsmartswitches.png?alt=media&token=6fe730f6-516e-4aa2-a4a7-d152c42e5da4"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Smart Switches
                  </h3>
                  <button
                    onClick={() => router.push("/product/listing/Smart%20Switches")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/Images%2Fcoverimages%2F3.jpg?alt=media&token=f8fb05d7-d96f-457d-8964-ffbb4b979a1a"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Home Appliances
                  </h3>
                  <button
                    onClick={() => router.push("/product/listing/Home%20Appliances")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Contact Us Section */}
        <ContactUs />
      </section>
    </main>
  );
}
