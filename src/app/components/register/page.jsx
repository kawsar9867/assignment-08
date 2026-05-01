import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Registration Card: Fixed width and height */}
      <div className="w-full max-w-[600px] min-h-[600px] bg-white shadow-2xl rounded-3xl border border-gray-100 p-10 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Join us today! It only takes a minute.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Kawsar Ahamed"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Email/Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email or Phone
            </label>
            <input
              type="text"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 accent-blue-600 cursor-pointer"
              required
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-600 cursor-pointer"
            >
              I agree to the{" "}
              <span className="text-blue-600 hover:underline">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-[0.97] transition-all mt-4"
          >
            Register Now
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Already have an account?{" "}
          <a
            href="/components/login"
            className="text-blue-600 font-bold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
