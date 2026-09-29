import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Requirements?",
      answer:
        "You need to create an account, choose the required license type, provide the required information, and select an available appointment.",
    },
    {
      question: "Can I change the appointment?",
      answer:
        "Yes, you can change your appointment according to the available dates and times from your account dashboard.",
    },
    {
      question: "How do I track the reservation status?",
      answer:
        "After submitting your request, you can log in to your account and check the current status of your reservation.",
    },
  ];

  const whyUs = [
    {
      icon: "🕒",
      title: "Book an appointment easily",
      text: "Book your driving license appointment in just a few minutes. Choose the day and time that suits you best without waiting in long lines.",
    },
    {
      icon: "🧾",
      title: "Track order status",
      text: "Track your request easily after booking. Check whether your request is pending, under review, confirmed, or completed.",
    },
    {
      icon: "🛡️",
      title: "Safe and confidential",
      text: "Your personal information and booking details are protected and handled securely throughout the entire process.",
    },
    {
      icon: "📱",
      title: "Mobile friendly",
      text: "Use the platform easily from your phone, tablet, or computer. Everything is designed to work smoothly on different devices.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Account",
      text: "Create your personal account and enter your required information.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Choose Your License",
      text: "Select the type of driving license service you need.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Send Your Request",
      text: "Choose your preferred date and time and submit your request.",
      icon: "📤",
    },
    {
      number: "04",
      title: "Receive Your License",
      text: "Follow your request and complete the process on time.",
      icon: "🚗",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
      <section className="relative h-[calc(100vh-64px)] min-h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury car on the road"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="w-full max-w-3xl text-center rounded-2xl bg-white/85 dark:bg-black/70 backdrop-blur-md border border-white/20 shadow-2xl p-7 md:p-12">
            <span className="inline-block mb-5 px-4 py-2 rounded-full bg-[#031F47] text-white text-sm font-semibold">
              DVLD Online Services
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Your Driving License Journey Starts Here
            </h1>

            <p className="mt-5 text-base md:text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto leading-7">
              The first electronic platform for booking driving license
              appointments in Egypt.
            </p>

            <Link to="/services">
              <button className="mt-8 bg-[#031F47] hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 active:scale-95 shadow-lg">
                Try Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">Why Us</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Get to know us closer...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-100 dark:bg-[#171918] border border-gray-200 dark:border-gray-700 p-7 pt-10 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-7 right-6 w-14 h-14 rounded-full bg-white dark:bg-[#222524] border-2 border-blue-600 flex items-center justify-center text-3xl shadow-lg">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Simple Process
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              How It Works
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-4 mb-10">
              Complete your driving license appointment through a simple and
              easy process.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#031F47] text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{step.icon}</span>

                      <h3 className="font-bold text-xl">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85"
              alt="Driving a car"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white dark:bg-[#171918] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-5">
              <p className="text-3xl font-bold text-blue-600">4</p>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simple Steps
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Need Help?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">Questions</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Frequently asked questions
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_330px] gap-8 items-start">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-[#171918] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-5 p-5 text-left"
                >
                  <span className="font-bold text-lg">{faq.question}</span>

                  <span
                    className={`text-2xl text-blue-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-7">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-100 dark:bg-[#171918] border-2 border-blue-600 rounded-2xl p-7 shadow-lg">
            <div className="text-5xl mb-5">⭐</div>

            <h3 className="text-3xl font-bold">
              Ask your <span className="text-blue-600">Question</span>
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-7">
              If your question is not available in our FAQ section, feel free
              to contact us and we will get back to you as soon as possible.
            </p>

            <Link to="/contact">
              <button className="mt-6 bg-[#031F47] hover:bg-blue-900 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
          alt="Car on road"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#031F47]/85"></div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <span className="text-blue-300 font-semibold uppercase tracking-wider">
              Start Today
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-3">
              Ready to Elevate Your License?
            </h2>

            <p className="my-7 text-gray-200 leading-7">
              Take the next step toward getting your driving license. Choose
              your service, book your appointment, and complete your request
              easily through our platform.
            </p>

            <Link to="/contact">
              <button className="bg-white text-[#031F47] hover:bg-gray-200 font-bold px-8 py-3 rounded-lg transition-all duration-300">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

