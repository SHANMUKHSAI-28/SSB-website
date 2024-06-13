import Notification from "@/components/Notification";

export default function AboutUs() {
  return (
    <>
      <div className="mt-16 bg-white"> {/* Update background color */}
        <div className="text-black py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-semibold mb-4 text-center">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/ssb-automations.appspot.com/o/new%20logos%2F2.png?alt=media&token=fd8b38d0-2dca-46df-b408-66f665f43fe8" alt="Company Logo" className="rounded-lg shadow-md" />
              </div>
              <div>
                <p className="text-lg mb-4">
                  Welcome to SSB Automations. We are committed to providing the best automation solutions to our customers.
                </p>
                <p className="text-lg mb-4">
                  Our team consists of highly skilled professionals dedicated to delivering innovative and efficient services.
                </p>
                <p className="text-lg mb-4">
                  For any inquiries, please <a href="/contact" className="text-blue-500 hover:text-blue-700">contact us</a>.
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
