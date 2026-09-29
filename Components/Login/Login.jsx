import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center bg-fixed relative py-10 transition-colors duration-300
      bg-gray-100 dark:bg-[#0a0a0a]"
      style={{
        backgroundImage:
          "url('https://auscardetailing.com/assets/images/auscar-social-card.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/40 dark:bg-black/70 transition-colors duration-300"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <form className="w-full space-y-6 bg-white/80 dark:bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-300 dark:border-white/20 shadow-2xl transition-colors duration-300">
          <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-normal text-center mb-8">
            Welcome Back
          </h2>

          <div className="space-y-5">
            <div className="relative flex flex-col items-start">
              <label
                htmlFor="email"
                className="text-gray-900 dark:text-white font-medium"
              >
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

            <div className="relative flex flex-col items-start">
              <label
                htmlFor="password"
                className="text-gray-900 dark:text-white font-medium"
              >
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
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                className="mr-2 border-gray-300 rounded"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-gray-700 dark:text-gray-300 text-sm hover:text-blue-500 dark:hover:text-white hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="duration-300 flex items-center justify-center text-[16px] font-bold bg-[#031f47] text-white cursor-pointer hover:bg-blue-900 rounded-md px-5 py-2.5 w-full mt-4"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Don't have account?{" "}
            <Link
              to="/register"
              className="text-[#031f47] dark:text-white font-semibold hover:text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;