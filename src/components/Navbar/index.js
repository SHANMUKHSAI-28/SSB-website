"use client";

import { useState, Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import CommonModal from "../CommonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "../CartModal";

function NavItems({ isModalView = false, isAdminView, router }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={`items-center justify-center w-full md:flex md:w-auto ${
        isModalView ? "" : "hidden"
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-2 md:p-0 mt-2 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="relative cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => {
                  if (item.submenu) {
                    setShowDropdown(!showDropdown);
                  } else {
                    item.path.startsWith("/")
                      ? router.push(item.path)
                      : (window.location.href = item.path);
                  }
                }}
              >
                {item.label}
                {item.submenu && showDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {item.submenu.map((subItem) => (
                      <li
                        className="cursor-pointer py-2 px-4 text-sm text-gray-900 hover:bg-gray-100"
                        key={subItem.id}
                        onClick={() => router.push(subItem.path)}
                      >
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>
    </div>
  );
}


export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const {
    user,
    isAuthUser,
    setIsAuthUser,
    setUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();

  console.log(currentUpdatedProduct, "navbar");

  useEffect(() => {
    if (
      pathName !== "/admin-view/add-product" &&
      currentUpdatedProduct !== null
    )
      setCurrentUpdatedProduct(null);
  }, [pathName]);

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }

  const isAdminView = pathName.includes("admin-view");

  return (
    <>
      <nav className="bg-white z-10 top-0 left-0 border-b border-gray w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="text-2xl font-semibold text-gray-900">SSB AUTOMATIONS</span>
            </div>
            <NavItems router={router} isAdminView={isAdminView} />
            <div className="flex items-center">
              {!isAdminView && isAuthUser ? (
                <Fragment>
                  <button
                    className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    onClick={() => router.push("/account")}
                  >
                    Account
                  </button>
                  <button
                    className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    onClick={() => setShowCartModal(true)}
                  >
                    Cart
                  </button>
                </Fragment>
              ) : null}
              {user?.role === "admin" ? (
                isAdminView ? (
                  <button
                    className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    onClick={() => router.push("/")}
                  >
                    Client View
                  </button>
                ) : (
                  <button
                    className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                    onClick={() => router.push("/admin-view")}
                  >
                    Admin View
                  </button>
                )
              ) : null}
              {isAuthUser ? (
                <button
                  onClick={handleLogout}
                  className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="ml-4 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Login
                </button>
              )}
              <button
                className="ml-4 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={() => setShowNavModal(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={
          <NavItems
            router={router}
            isModalView={true}
            isAdminView={isAdminView}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
      {showCartModal && <CartModal />}
    </>
  );
}
