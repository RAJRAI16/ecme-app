import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import signinlogo from "../../assets/signinlogo.png";
import sideImage from "../../assets/auth-side.png";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [done, setDone] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true); // switch to success screen
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] flex">
      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          {/* LOGO */}
          <img src={signinlogo} alt="Logo" className="h-10" />

          {/* ================= STEP 1 ================= */}
          {!done && (
            <>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Set new password
                </h1>
                <p className="text-gray-400 mt-1">
                  Your new password must different to previous password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* PASSWORD */}
                <div>
                  <label className="text-sm text-gray-400">Password</label>
                  <div className="relative mt-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full px-4 py-3 rounded-lg
                      bg-[#3a3a3a] text-white focus:outline-none"
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
                  <label className="text-sm text-gray-400">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={showConfirm ? "text" : "password"}
                      required
                      className="w-full px-4 py-3 rounded-lg
                      bg-[#3a3a3a] text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
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
                <span
                  onClick={() => navigate("/auth/sign-in")}
                  className="text-white underline cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {done && (
            <>
              <div>
                <h1 className="text-2xl font-semibold text-white">
                  Reset done
                </h1>
                <p className="text-gray-400 mt-1">
                  Your password has been successfully reset
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
                <span
                  onClick={() => navigate("/auth/sign-in")}
                  className="text-white underline cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
      </div>

      {/* RIGHT IMAGE */}
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
