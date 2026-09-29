import { Link } from "react-router-dom";

const Services = () => {
  const images = {
    hero: "https://moi.gov.eg/img/main-header-bg.jpg",

    international:
      "https://dvld.vercel.app/assets/international--CzkfyG4w.jpeg",

    local:
      "https://dvld.vercel.app/assets/local--D6EEx7_3.jpeg",

    renew:
      "https://media.gettyimages.com/id/501924077/photo/smiling-teenage-girl-sitting-in-car-showing-driving-license-partial-view.jpg?s=612x612&w=gi&k=20&c=OspJNyoMuwH5AG2YHI1NjXcZbEmBF07IzgixEBJkFvU=",

    lost:
      "https://qdnewssl-5762.kxcdn.com/images/dev/qatar%20news/large/Driver's%20License_27-02-2023_11-02_driver%20license%20cover.jpg",

    driving:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=90",

    car:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90",

    road:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=90",
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <img
          src={images.hero}
          alt="Driving License"
          className="w-full h-[300px] md:h-[430px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="animate-pulse">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#031F47] -skew-y-3 rounded-md"></span>

              <h1 className="relative text-white font-bold text-4xl md:text-6xl px-8 py-4">
                Applications
              </h1>
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <section className="py-16">
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            <div className="group w-[400px] max-w-full bg-[#111] border border-gray-800 rounded-t-[220px] overflow-hidden shadow-2xl hover:-translate-y-4 hover:shadow-blue-500/30 transition-all duration-500">
              <div className="pt-5">
                <img
                  src={images.local}
                  alt="Local License"
                  className="w-[260px] h-[260px] object-cover rounded-full mx-auto border-4 border-[#031F47] p-2 group-hover:rotate-[360deg] transition-transform duration-1000"
                />
              </div>

              <h2 className="text-2xl font-bold text-center py-6">
                Local License
              </h2>

              <Link to="/services/local">
                <button className="w-full bg-[#031F47] hover:bg-blue-900 py-4 font-bold transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>

            <div className="group w-[400px] max-w-full bg-[#111] border border-gray-800 rounded-t-[220px] overflow-hidden shadow-2xl hover:-translate-y-4 hover:shadow-blue-500/30 transition-all duration-500">
              <div className="pt-5">
                <img
                  src={images.international}
                  alt="International License"
                  className="w-[260px] h-[260px] object-cover rounded-full mx-auto border-4 border-[#031F47] p-2 group-hover:rotate-[360deg] transition-transform duration-1000"
                />
              </div>

              <h2 className="text-2xl font-bold text-center py-6">
                International License
              </h2>

              <Link to="/services/global">
                <button className="w-full bg-[#031F47] hover:bg-blue-900 py-4 font-bold transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        <section className="py-16">
          <div className="flex justify-center mb-12">
            <span className="relative">
              <span className="absolute inset-0 bg-[#031F47] -skew-y-3 rounded-md"></span>

              <h2 className="relative text-3xl font-bold px-6 py-3">
                Apply For New License
              </h2>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.renew}
                  alt="Renew License"
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Renew License
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  Renew your driving license online with ease.
                </p>

                <button className="w-full bg-[#031F47] hover:bg-blue-900 py-4 font-bold transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>

            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.lost}
                  alt="Lost License"
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Lost My License
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  Apply for a replacement if your driving license is lost.
                </p>

                <button className="w-full bg-[#031F47] hover:bg-blue-900 py-4 font-bold transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>

            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.car}
                  alt="Damaged License"
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Damaged License
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  Replace your damaged driving license easily.
                </p>

                <button className="w-full bg-[#031F47] hover:bg-blue-900 py-4 font-bold transition-all duration-300">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        <section className="py-16">
          <div className="flex justify-center mb-12">
            <span className="relative">
              <span className="absolute inset-0 bg-[#031F47] -skew-y-3 rounded-md"></span>

              <h2 className="relative text-3xl font-bold px-6 py-3">
                More Driving Services
              </h2>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.driving}
                  alt="Driving License Services"
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Driving License Services
                </h3>

                <p className="text-gray-400">
                  Easy and fast driving license services.
                </p>
              </div>
            </div>

            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.car}
                  alt="Vehicle Services"
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Vehicle Services
                </h3>

                <p className="text-gray-400">
                  Manage your vehicle-related services easily.
                </p>
              </div>
            </div>

            <div className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={images.road}
                  alt="Road Services"
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Road Services
                </h3>

                <p className="text-gray-400">
                  Access useful driving and road services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

