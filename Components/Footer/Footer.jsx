import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#031F47] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/logo-transparent-CmgmdvR8.png"
                alt="DVLD"
                className="w-12"
              />

              <h2 className="text-2xl font-bold">DVLD</h2>
            </div>

            <p className="text-gray-300 max-w-md leading-7">
              Your trusted platform for managing driving license appointments
              and related services easily and securely.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                𝕏
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link to="/why-us" className="hover:text-white">
                Our Vision
              </Link>

              <Link to="/why-us" className="hover:text-white">
                Our Goals
              </Link>

              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link to="/services" className="hover:text-white">
                E-Services
              </Link>

              <Link to="/services" className="hover:text-white">
                Driving License
              </Link>

              <Link to="/services" className="hover:text-white">
                Appointments
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>

              <Link to="/services" className="hover:text-white">
                Help Center
              </Link>

              <Link to="/why-us" className="hover:text-white">
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2026 DVLD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

