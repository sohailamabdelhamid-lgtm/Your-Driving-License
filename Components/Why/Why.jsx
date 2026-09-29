import { useEffect, useState } from "react";

function WhyUs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const features = [
    {
      icon: "🕒",
      title: "Book an appointment easily",
      text: "Now you can book your driving license appointment in just a few minutes—no complications! Choose the day and time that suits you best, and get ready with ease—no lines, no hassle. All it takes is a few clicks, and we’ll handle the rest.",
    },
    {
      icon: "🧾",
      title: "Track order status",
      text: "Track your request in real time with ease! After booking your appointment, you’ll be able to check the status of your request at any time — whether it's under review, confirmed, or pending verification. All of this is available through your personal dashboard, without the need to call or visit the office yourself.",
    },
    {
      icon: "🛡️",
      title: "Safe and confidential",
      text: "Your personal information is protected with the highest security standards. All your data and booking details are kept completely private and confidential — only you can access them. We prioritize your safety and privacy at every step.",
    },
    {
      icon: "📱",
      title: "Compatible with mobile phones",
      text: "Access and use the platform seamlessly from any mobile device. Whether you're booking an appointment or tracking your request, everything is optimized for smartphones and tablets — anytime, anywhere.",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-10 overflow-hidden">
      <div className="container mx-auto">
        <div
          className={`mt-10 mx-auto w-fit relative transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="font-bold text-5xl whitespace-nowrap text-gray-400/40">
            Why Us
          </h2>

          <h3 className="mt-1 ml-20 text-lg text-white">
            get to know us closer ...
          </h3>
        </div>

        <div className="mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-white p-3 pt-8 rounded-xl text-black shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)] hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className="absolute top-0 right-3.5 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-red-500/40 p-2 bg-white shadow-[inset_0_4px_8px_rgba(255,0,0,0.4)]"
              >
                <span className="text-4xl text-[#031F47]">
                  {feature.icon}
                </span>
              </div>

              <h2 className="font-semibold text-xl mb-2">
                {feature.title}
              </h2>

              <p className="text-sm leading-6 line-clamp-5">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
