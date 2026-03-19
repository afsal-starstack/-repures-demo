import { NavLink } from "react-router-dom";

import logo from "../../assets/icons/dashboardHeader/logo.svg";
import overviewLogo from "../../assets/icons/sidebar/overViewLogo.svg";

import reviewsLogo from "../../assets/icons/sidebar/reviewsLogo.svg";
import actionCenterLogo from "../../assets/icons/sidebar/actionCenterLogo.svg";
import competitorAnalysisLogo from "../../assets/icons/sidebar/competitorAnalysisLogo.svg";
import analyticsLogo from "../../assets/icons/sidebar/analyticsLogo.svg";
import ReportsLogo from "../../assets/icons/sidebar/ReportsLogo.svg";
import alertsCenterLogo from "../../assets/icons/sidebar/alertsCenterLogo.svg";
import helpCenterLogo from "../../assets/icons/sidebar/helpCenterLogo.svg";
import settingsLogo from "../../assets/icons/sidebar/settingsLogo.svg";

const navItems = [
  { name: "Overview", path: "/overview", icon: overviewLogo },
  { name: "Reviews", path: "/reviews", icon: reviewsLogo, reviewTotal: "3" },
  { name: "Action Center", path: "/actions", icon: actionCenterLogo },
  {name: "Competitor Analysis",path: "/competitors",icon: competitorAnalysisLogo,},
  { name: "Analytics", path: "/analytics", icon: analyticsLogo },
  { name: "Reports", path: "/reports", icon: ReportsLogo },
  { name: "Alerts Center", path: "/alerts", icon: alertsCenterLogo },
  { name: "Help Center", path: "/help", icon: helpCenterLogo },
  { name: "Settings", path: "/settings", icon: settingsLogo },
];

export default function Sidebar() {
  return (
    <div className="fixed border border-[#4B5563]/20 bg-[rgba(13,16,23,0.30)]/50 w-[255px]">
      <div className="flex flex-col items-start w-[255px] h-[151px] px-6 pt-6 pb-[25px] flex-shrink-0">
        {/* Top Section */}
        {/* Logo */}
        <div className="flex items-center gap-3 mb-[20px]">
          <div
            className="flex w-10 h-10 p-[1px] justify-center items-center flex-shrink-0 
           rounded-lg border border-teal-400/30 bg-teal-400/20"
          >
            <span>
              <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
            </span>{" "}
          </div>
          <h1 className="text-white font-syne text-[20px] leading-[28px] font-bold tracking-[-0.5px]">
            Repures
          </h1>
        </div>

        {/* Demo Mode */}
        <div className="mb-[25px]">
          <div
            className="flex w-[207px] h-[42px] px-[15px] py-[11px] items-center gap-[10px] 
                flex-shrink-0 rounded-lg border border-yellow-500/30 bg-yellow-500/10"
          >
            <span className="flex w-[10px] h-[10px] items-start flex-shrink-0 rounded-full bg-[#F59E0B]"></span>
            <p className="text-[#FBBF24] font-roboto text-[14px] leading-[20px] font-semibold tracking-[0.35px]">
              Demo Mode
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="space-y-1 border-t border-b border-[#4B5563]/20 p-[16px] pb-[40px]">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative flex w-[223px] h-[48px] px-4 py-[10px] items-center gap-3 
    rounded-lg transition-all duration-300 group
    font-roboto text-[14px] leading-[20px] font-medium
    ${
      isActive
        ? "bg-teal-500/10 text-teal-400"
        : "text-[#6B7280] hover:text-white hover:bg-white/5"
    }`
            }
          >
            {({ isActive }) => (
              <>
                {/* LEFT ACTIVE BAR */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[3px] bg-teal-400 rounded-r-full" />
                )}

                {/* icon */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-[18.75px] h-[18px] transition-all duration-300
          ${
            isActive
              ? "bg-teal-500/10 text-teal-400" // white for active
              : "brightness-0 invert-[45%] group-hover:brightness-0 group-hover:invert" // gray normally, white on hover
          }`}
                />

                {/* text */}
                <p>{item.name}</p>

                {/* 🔥 REVIEW BADGE */}
                {item.reviewTotal && isActive && (
                  <span
                    className="ml-auto flex w-[32px] h-[22px] py-[3px] pr-[9px] pl-[13px] items-center 
                 rounded-full border border-[#F87171]/30 bg-[#F87171]/20 
                 text-[#F87171] font-inter text-[12px] leading-[16px] font-semibold"
                  >
                    {item.reviewTotal}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Bottom (optional future logout/settings) */}
      <div className="text-xs text-gray-500 text-center p-[17px]">
        © 2026 Repures
      </div>
    </div>
  );
}
