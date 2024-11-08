"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllAdminProducts } from "@/services/product";
import ContactUs from "../components/contact/contact";

export default function Home() {
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
    <main className="flex flex-col min-h-screen bg-gray-100 p-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-blue-600 to-purple-800 text-white rounded-lg shadow-2xl animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4">🚀 SSB Automations</h1>
        <p className="text-lg font-semibold mb-6">
          Expert Solutions for Your Projects in Cutting-Edge Technologies
        </p>
        <button
          className="bg-black hover:bg-gray-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white rounded-lg shadow-md transition-all"
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </button>
      </section>

      {/* Technologies & Services Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">💻 Technologies & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Embedded Systems",
            "VLSI",
            "App Development",
            "IoT Solutions",
            "Web Development",
            "UI/UX Design",
            "Digital Marketing",
            "Python Programming",
            "RTOS",
            "Linux",
            "MATLAB",
            "AI, ML & Deep Learning",
            "FPGA",
            "Firmware Development",
            "Device Drivers",
            "Data Science",
            "Arduino Projects",
            "PLC, SCADA, DCS",
            "Cybersecurity",
            "Game Development & Testing",
            "Microcontrollers & Microprocessors",
            "Research & Paper Writing",
            "Student Project Support",
            "Cloud Computing",
            "DevOps",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service}
              </h3>
              <p className="text-gray-600">
                Expert solutions in {service}. Contact us to know more!
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase (Optional, Remove if Not Needed) */}
      {products && products.length > 0 && (
        <section className="py-12 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product._id}
                onClick={() => router.push(`/product/${product._id}`)}
                className="cursor-pointer p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full rounded-lg aspect-square mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600">₹{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Company Introduction */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">About SSB Automations</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At SSB Automations, we specialize in providing advanced solutions for
          home and business automation. Our team of experts is dedicated to
          offering top-quality services tailored to your specific needs.
          Discover how we can make your projects successful and innovative.
        </p>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white rounded-lg shadow-md transition-all"
          onClick={() => router.push("/about")}
        >
          Learn More
        </button>
      </section>

      {/* Contact Section */}
      <ContactUs />
    </main>
  );
}
