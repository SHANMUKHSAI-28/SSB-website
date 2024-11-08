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
    <main className="flex flex-col min-h-screen bg-white p-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center p-12 bg-cover bg-center bg-hero-pattern rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-white mb-4">🚀 SSB Automations</h1>
        <p className="text-lg font-semibold text-white mb-6">
          Leading Solutions in Embedded Systems, AI, and More!
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-800 px-8 py-4 text-lg font-bold uppercase text-white rounded-lg shadow-md"
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </button>
      </section>

      {/* Technologies & Services Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10">💻 Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Embedded Systems", icon: "/icons/embedded.svg" },
            { title: "VLSI", icon: "/icons/vlsi.svg" },
            { title: "App Development", icon: "/icons/app.svg" },
            { title: "IoT Solutions", icon: "/icons/iot.svg" },
            { title: "Web Development", icon: "/icons/web.svg" },
            { title: "AI & ML", icon: "/icons/ai.svg" },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-4"
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16" />
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Carousel */}
      {products && products.length > 0 && (
        <section className="py-12 bg-blue-50 rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-8">🛒 Featured Products</h2>
          <div className="carousel">
            <div className="flex overflow-x-scroll gap-6">
              {products.slice(0, 5).map((product) => (
                <div
                  key={product._id}
                  className="min-w-[300px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">₹{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">⭐ Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              feedback: "SSB Automations delivered exceptional quality and service!",
            },
            {
              name: "Jane Smith",
              feedback: "Their IoT solutions transformed our business operations!",
            },
            {
              name: "Sam Wilson",
              feedback: "Top-notch expertise in AI and Embedded Systems.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <p className="text-lg text-gray-700 mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-bold text-gray-800">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="relative flex items-center justify-center py-12 bg-cover bg-cta-pattern rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Ready to Elevate Your Project?
        </h2>
        <button
          className="bg-black hover:bg-gray-800 px-10 py-4 text-lg font-bold uppercase text-white rounded-lg shadow-md"
          onClick={() => router.push("/contact")}
        >
          Contact Us Now
        </button>
      </section>

      {/* Contact Section */}
      <ContactUs />
    </main>
  );
}
