import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import signinlogo from "../../assets/signinlogo.png";
import sideImage from "../../assets/auth-side.png";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in clicked");
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex">
      {/* LEFT: FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <img src={signinlogo} alt="Logo" className="h-10" />

          {/* TITLE */}
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Welcome back!
            </h1>
            <p className="text-gray-400 mt-1">
              Please enter your credentials to sign in!
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                defaultValue="admin-01@ecme.com"
                className="w-full mt-1 px-4 py-3 rounded-lg
                bg-[#3a3a3a] text-white
                focus:outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-400">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="123456"
                  className="w-full px-4 py-3 rounded-lg
                  bg-[#3a3a3a] text-white
                  focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* FORGOT */}
            <div className="text-sm">
              <button type="button" className="text-white underline">
                Forgot password
              </button>
            </div>

            {/* SIGN IN */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg
              bg-blue-600 hover:bg-blue-500
              text-white font-medium transition"
            >
              Sign In
            </button>
          </form>

          {/* DIVIDER */}
          <div className="text-center text-gray-400 text-sm">
            or continue with
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-lg bg-[#3a3a3a] text-white">
              Google
            </button>
            <button className="flex-1 py-3 rounded-lg bg-[#3a3a3a] text-white">
              Github
            </button>
          </div>

          {/* SIGN UP */}
          <p className="text-sm text-gray-400 text-center">
            Don&apos;t have an account?{" "}
            <span className="text-white underline cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-8">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={sideImage}
            alt="Auth Visual"
            className="h-[520px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
