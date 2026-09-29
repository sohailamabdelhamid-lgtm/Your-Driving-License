import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-gray-100 dark:bg-[#0a0a0a] bg-cover bg-center bg-fixed relative py-10 transition-colors duration-300"
      style={{
        backgroundImage:
          "url('https://auscardetailing.com/assets/images/auscar-social-card.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/40 dark:bg-black/70 transition-colors duration-300"></div>

      <div className="relative z-10 w-full max-w-2xl mx-4 flex justify-center">
        <form className="w-full max-w-md space-y-6 bg-white/80 dark:bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-300 dark:border-white/20 shadow-2xl transition-colors duration-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center pt-2">
            Sign up
          </h2>

          <div className="space-y-2">
            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="nationalNo" className="text-gray-900 dark:text-white font-medium">
                National Number
              </label>
              <input
                id="nationalNo"
                placeholder="national number"
                type="number"
                name="nationalNo"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="fname" className="text-gray-900 dark:text-white font-medium">
                First Name
              </label>
              <input
                id="fname"
                placeholder="first name"
                type="text"
                name="fname"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="sname" className="text-gray-900 dark:text-white font-medium">
                Second Name
              </label>
              <input
                id="sname"
                placeholder="second name"
                type="text"
                name="sname"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="tname" className="text-gray-900 dark:text-white font-medium">
                Third Name
              </label>
              <input
                id="tname"
                placeholder="third name"
                type="text"
                name="tname"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="lname" className="text-gray-900 dark:text-white font-medium">
                Last Name
              </label>
              <input
                id="lname"
                placeholder="last name"
                type="text"
                name="lname"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="phonenumber" className="text-gray-900 dark:text-white font-medium">
                Phone Number
              </label>
              <input
                id="phonenumber"
                placeholder="phone number"
                type="number"
                name="phonenumber"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="birthDate" className="text-gray-900 dark:text-white font-medium">
                Birth Date
              </label>
              <input
                id="birthDate"
                type="date"
                name="birthDate"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="address" className="text-gray-900 dark:text-white font-medium">
                Address
              </label>
              <input
                id="address"
                placeholder="address"
                type="text"
                name="address"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="email" className="text-gray-900 dark:text-white font-medium">
                Email
              </label>
              <input
                id="email"
                placeholder="email"
                type="email"
                name="email"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="password" className="text-gray-900 dark:text-white font-medium">
                Password
              </label>
              <input
                id="password"
                placeholder="password"
                type="password"
                name="password"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="relative mb-4 flex flex-col items-start">
              <label htmlFor="confirmPassword" className="text-gray-900 dark:text-white font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                placeholder="confirm Password"
                type="password"
                name="confirmPassword"
                className="w-full mt-2 px-3 py-2 border rounded-lg border-gray-400 dark:border-gray-500 bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:border-blue-500 dark:focus:border-white focus:outline-none"
              />
            </div>

            <div className="w-full mb-4">
              <label className="text-gray-900 dark:text-white font-medium">
                Country:
              </label>

              <div className="relative mt-2 rounded-md border border-gray-400 dark:border-gray-500 overflow-hidden">
                <select
                  name="country"
                  className="w-full px-3 py-2 bg-white/70 dark:bg-black/50 text-gray-900 dark:text-white focus:outline-none"
                >
                  <option value="" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Select Country
                  </option>
                  <option value="Egypt" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Egypt
                  </option>
                  <option value="Saudi Arabia" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Saudi Arabia
                  </option>
                  <option value="UAE" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    UAE
                  </option>
                  <option value="Qatar" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Qatar
                  </option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <label className="text-gray-900 dark:text-white font-medium">
                Gender:
              </label>

              <div className="relative mt-2 rounded-md border border-gray-400 dark:border-gray-500 overflow-hidden">
                <select
                  name="gender"
                  className="w-full px-3 py-2 bg-white/70 dark:bg-black/50 text-gray-900 dark:text-white focus:outline-none"
                >
                  <option value="" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Select Gender
                  </option>
                  <option value="Male" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Male
                  </option>
                  <option value="Female" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="duration-300 flex items-center justify-center text-[16px] font-bold bg-[#031f47] text-white cursor-pointer hover:bg-blue-900 rounded-md px-5 py-2.5 w-full"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Already Have Account?{" "}
            <Link
              to="/login"
              className="text-[#031f47] dark:text-white font-semibold hover:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;