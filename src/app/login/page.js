"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { login } from "@/services/login";
import { loginFormControls } from "@/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialFormdata = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormdata);
  const {
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);

  const router = useRouter();

  console.log(formData);

  function isValidForm() {
    return (
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }

  async function handleLogin() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res = await login(formData);

    console.log(res);

    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsAuthUser(true);
      setUser(res?.finalData?.user);
      setFormData(initialFormdata);
      Cookies.set("token", res?.finalData?.token);
      localStorage.setItem("user", JSON.stringify(res?.finalData?.user));
      setComponentLevelLoader({ loading: false, id: "" });
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsAuthUser(false);
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  useEffect(() => {
    if (isAuthUser) router.push("/");
  }, [isAuthUser]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black">Login</h2>
        <div className="space-y-6">
          {loginFormControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                key={controlItem.id}
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
                value={formData[controlItem.id]}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  })
                }
                inputClassName="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-black"
                style={{ color: "black", backgroundColor: "white" }} // Ensure text color is black
              />
            ) : null
          )}
          <button
            className={`w-full py-3 bg-black text-white rounded-md uppercase font-medium tracking-wide transition duration-200 ease-in-out ${
              isValidForm()
                ? "hover:bg-gray-800"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValidForm()}
            onClick={handleLogin}
          >
            {componentLevelLoader && componentLevelLoader.loading ? (
              <ComponentLevelLoader
                text="Logging In"
                color="#ffffff"
                loading={componentLevelLoader.loading}
              />
            ) : (
              "Login"
            )}
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-black">New to the website?</p>
            <button
              className="w-full py-3 bg-black text-white rounded-md uppercase font-medium tracking-wide transition duration-200 ease-in-out hover:bg-gray-800"
              onClick={() => router.push("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
