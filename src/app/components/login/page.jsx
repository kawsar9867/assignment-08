"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Email Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed!");
    } else {
      toast.success("Login Successfully!");
      router.push("/");
    }
    setLoading(false);
  };

  // Google Login Function
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-[500px] bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500">Login to your account</p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <div className="text-right">
            <span className="text-sm text-blue-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

       
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          <img 
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg" 
            alt="Google" 
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link href="/components/register" className="text-blue-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;