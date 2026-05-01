import React from 'react';

const LoginPage = () => {
  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-[600px] h-auto md:h-[500px] bg-white shadow-xl rounded-2xl border border-gray-100 p-8 flex flex-col justify-center">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
            <input 
              type="text" 
              placeholder="example@mail.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          Do not have account? <a href="/components/register" className="text-blue-600 font-medium hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;