import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "@/assets/images/loginPage/background.png";

import logo from "@/assets/icons/loginPage/logo.svg";
import emailIcon from "@/assets/icons/loginPage/email.svg";
import passwordEye from "@/assets/icons/loginPage/eye.svg";
import passwordLock from "@/assets/icons/loginPage/lock.svg";

export default function Login() {
  // State
  // -----------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate(); // ✅ navigation

  const isReady = email && password;

  // -----------------------------
  // Email Validation
  // -----------------------------
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  // -----------------------------
  // Dummy Login
  // -----------------------------
  const handleLogin = () => {
   
    const dummyEmail = "demouser@repures.com";
    const dummyPassword = "repuresdemo@123";

    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    }

    if (email === dummyEmail && password === dummyPassword) {
      setError("");
      setEmailError("");
      // ✅ redirect to dashboard
      navigate("/overview", { replace: true });
    } else {
      setError("Email or password is wrong");
    }
  };

  return (
    <div
      className={`min-h-[100dvh] w-full relative overflow-hidden flex flex-col items-center justify-start sm:justify-center pt-16 sm:pt-0 px-4`}
    >
      {/* Background */}
      <img
        src={bgImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[450px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <div className="border border-teal-500/30 rounded-lg w-10 h-10 flex items-center justify-center overflow-hidden">
            <img src={logo} className="w-full h-full object-cover" />
          </div>

          <h1 className="text-[#FFF] text-[24px] leading-[32px] tracking-[-0.6px] font-bold font-syne">
            Repures
          </h1>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border border-transparent w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(rgba(13,16,23,0.50), rgba(13,16,23,0.50)) padding-box, linear-gradient(138.69deg, rgba(255,255,255,0.05) 0%, rgba(146,250,241,1) 48%, rgba(255,255,255,0.05) 100%) border-box",
          }}
        >
          {/* Inner Glass */}
          <div className="p-[33px] sm:p-[33px] rounded-2xl min-h-[420px] sm:min-h-[480px] w-full bg-[#163C34] backdrop-blur-xl">
            {/* Heading */}
            <div className="pb-[18px]">
              <h2 className="text-[#FFF] text-[20px] leading-[28px] font-bold font-roboto">
                Welcome back
              </h2>
              <p className="text-[#6B7280] text-[14px] leading-[20px] font-normal font-roboto pt-1">
                Sign in to your reputation command center
              </p>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-[#9CA3AF] text-[12px] leading-[16px] font-medium font-roboto">
                Email
              </label>

              <div
                className={`mt-1 flex items-center w-[379px] h-[42px] px-[13px] py-[9px] gap-[9px] rounded-lg bg-white/5 border 
                ${
                  emailError
                    ? "border-red-500"
                    : "border-[rgba(255,255,255,0.08)]"
                } focus-within:border-teal-400/50`}
              >
                <img src={emailIcon} className="w-4 " />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className="bg-transparent outline-none w-full 
           text-[#D1D5DB] text-[12px] leading-[16px] font-normal font-inter
           placeholder:text-[#4B5563] placeholder:text-[14px] 
           placeholder:leading-[20px] placeholder:font-medium 
           placeholder:font-inter"
                />
              </div>

              {emailError && (
                <p className="text-red-400 text-xs mt-1">{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <label className="text-[#9CA3AF] text-[12px] leading-[16px] font-medium font-roboto">
                  Password
                </label>
                <span className="text-teal-400 cursor-pointer">Forgot?</span>
              </div>

              <div className="mt-1 flex items-center w-[379px] h-[42px] px-[13px] py-[9px] gap-[9px] rounded-lg bg-white/5 border border-[rgba(255,255,255,0.08)] focus-within:border-teal-400/50">
                <img src={passwordLock} className="w-4" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent outline-none w-full 
             text-[#D1D5DB] text-[12px] leading-[16px] font-normal font-inter
             placeholder:text-[#4B5563] placeholder:text-[14px] 
             placeholder:leading-[20px] placeholder:font-medium 
             placeholder:font-inter"
                />

                <img
                  src={passwordEye}
                  className="w-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            {/* Button */}
            <button
              onClick={handleLogin}
              disabled={!isReady}
              className={`flex justify-center  items-center gap-[8px] w-[382px] h-[40px] py-[10px] mt-[32px] rounded-lg 
                        text-[#FFF] text-[14px] leading-[20px] font-semibold font-roboto text-center transition
                        ${
                          isReady
                            ? "bg-teal-500 hover:bg-teal-600"
                            : "bg-[#555F5E] cursor-not-allowed"
                        }`}
            >
              Sign In
            </button>

            {/* Footer */}
            <div className="pt-6 flex justify-center text-xs flex-wrap text-center">
              <span className="text-gray-500 mr-1">Don't have an account?</span>
              <span className="text-teal-400 cursor-pointer">Create one</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
