import { useState } from "react";
import signinlogo from "../../assets/signinlogo.png";
import sideImage from "../../assets/auth-side.png";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // switch to success screen
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex">
      {/* LEFT: CONTENT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <img src={signinlogo} alt="Logo" className="h-10" />

          {/* ===== STEP 1: FORGOT PASSWORD FORM ===== */}
          {!submitted && (
            <>
              {/* TITLE */}
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Forgot Password
                </h1>
                <p className="text-gray-400 mt-1">
                  Please enter your email to receive a verification code
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-3 rounded-lg
                    bg-[#3a3a3a] text-white
                    focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg
                  bg-blue-600 hover:bg-blue-500
                  text-white font-medium transition"
                >
                  Submit
                </button>
              </form>

              <p className="text-sm text-gray-400 text-center">
                Back to{" "}
                <span className="text-white underline cursor-pointer">
                  Sign in
                </span>
              </p>
            </>
          )}

          {/* ===== STEP 2: SUCCESS MESSAGE ===== */}
          {submitted && (
            <>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Check your email
                </h1>
                <p className="text-gray-400 mt-1">
                  We have sent a password recovery link to your email
                </p>
              </div>

              <button
                onClick={() => navigate("/auth/sign-in")}
                className="w-full py-3 rounded-lg
                bg-blue-600 hover:bg-blue-500
                text-white font-medium transition"
              >
                Continue
              </button>

              <p className="text-sm text-gray-400 text-center">
                Back to{" "}
                <span className="text-white underline cursor-pointer">
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* RIGHT: IMAGE (SAME AS SIGN IN) */}
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
