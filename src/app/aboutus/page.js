import Notification from "@/components/Notification";

export default function AboutUs() {
  return (
    <>
      <div className="mt-16 bg-gray-100"> {/* Update background color */}
        <div className="text-black py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/new%20logos%2F2.png?alt=media&token=fd8b38d0-2dca-46df-b408-66f665f43fe8" 
                  alt="Company Logo" 
                  className="rounded-lg shadow-md w-full max-w-md"
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  Welcome to <strong>SSB Automations</strong>, where innovation meets excellence. Founded by <strong>Sri Datta Shanmukh Sai Yeddu</strong>, our company is dedicated to delivering cutting-edge home automation solutions that enhance the quality of life and bring convenience to your doorstep.
                </p>
                <p className="text-lg mb-4">
                  Our mission is to revolutionize the way you interact with your home by providing seamless, efficient, and smart automation systems. We believe in the power of technology to transform everyday living, making homes smarter, safer, and more energy-efficient.
                </p>
                <p className="text-lg mb-4">
                  At SSB Automations, our team comprises highly skilled professionals who are passionate about innovation and committed to excellence. We work tirelessly to stay ahead of the curve, ensuring that our solutions are not only current but also future-proof.
                </p>
                <p className="text-lg mb-4">
                  Whether you're looking to automate your lighting, security, or entire home ecosystem, we have the expertise and technology to make it happen. We take pride in our customer-centric approach, tailoring our services to meet the unique needs of each client.
                </p>
                <p className="text-lg mb-4">
                  For any inquiries, please <a href="/contact" className="text-blue-500 hover:text-blue-700">contact us</a>. We look forward to working with you to create a smarter, more convenient home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </>
  );
}
