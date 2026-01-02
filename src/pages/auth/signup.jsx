import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import signinlogo from "../../assets/signinlogo.png";
import sideImage from "../../assets/auth-side.png";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up clicked");
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
              Sign Up
            </h1>
            <p className="text-gray-400 mt-1">
              And lets get started with your free trial
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* USER NAME */}
            <div>
              <label className="text-sm text-gray-400">User name</label>
              <input
                type="text"
                placeholder="User Name"
                className="w-full mt-1 px-4 py-3 rounded-lg
                bg-[#3a3a3a] text-white
                focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Email"
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
                  placeholder="Password"
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

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm text-gray-400">Confirm Password</label>
              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 rounded-lg
                  bg-[#3a3a3a] text-white
                  focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* SIGN UP */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg
              bg-blue-600 hover:bg-blue-500
              text-white font-medium transition"
            >
              Sign Up
            </button>
          </form>

          {/* SIGN IN LINK */}
          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <span className="text-white underline cursor-pointer">
              Sign in
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
