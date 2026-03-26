export default function AIInsight() {
  const title = "AI Insight";
  const subtitle = "Generated just now · Based on last 7 days";
  const message =
    "Guests frequently mention slow check-in times this week, especially during peak hours in the evening. Consider reviewing front desk staffing levels, optimizing the check-in workflow, or enabling express check-in options to improve guest experience and reduce wait times.";
  const confidence = "High Confidence";

  return (
    <div className="relative overflow-hidden rounded-xl border border-[rgba(99,102,241,0.4)] w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-[rgba(25,29,43,0.8)]">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b from-indigo-400 via-purple-500 to-indigo-400" />
      </div>

      {/* Blobs */}
      <div className="pointer-events-none absolute left-[1px] bottom-[1px] w-48 h-48 rounded-full bg-purple-500/20 blur-3xl z-10" />
      <div className="pointer-events-none absolute right-[-40px] bottom-[-40px] w-[420px] h-[420px] rounded-full bg-indigo-500/30 blur-[120px] z-10" />

      {/* Content */}
      <div className="relative z-20 p-[33px] flex items-start justify-between h-[250px]">
        {/* Left Side */}
        <div className="flex flex-col flex-1 pl-[16px]">
          {/* Header */}
          <div className="flex items-center gap-2.5 h-[42px]">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M6.55197 13.8244C6.41997 13.0444 6.07197 12.2044 5.50797 11.3044C4.94397 10.3924 4.13997 9.54636 3.09597 8.76636C2.06397 7.98636 1.03197 7.48836 -2.97353e-05 7.27236V6.51636C1.01997 6.27636 1.99797 5.83236 2.93397 5.18436C3.88197 4.52436 4.67397 3.73236 5.30997 2.80836C5.95797 1.86036 6.37197 0.924359 6.55197 0.000359178H7.30797C7.41597 0.600359 7.63197 1.21836 7.95597 1.85436C8.27997 2.47836 8.69397 3.07836 9.19797 3.65436C9.71397 4.21836 10.29 4.72836 10.926 5.18436C11.874 5.85636 12.84 6.30036 13.824 6.51636V7.27236C13.164 7.40436 12.48 7.67436 11.772 8.08236C11.076 8.49036 10.428 8.97636 9.82797 9.54036C9.22797 10.0924 8.73597 10.6744 8.35197 11.2864C7.78797 12.1864 7.43997 13.0324 7.30797 13.8244H6.55197Z"
                  fill="#818CF8"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-[2px]">
              <span className="text-[rgba(129,140,248,1)] text-[14px] leading-[20px] font-bold tracking-[1.4px] font-['Roboto']">
                {title}
              </span>
              <span className="text-[rgba(107,114,128,1)] text-[12px] leading-[16px] font-normal font-['Roboto']">
                {subtitle}
              </span>
            </div>
          </div>

          {/* Message */}
          <p className="mt-[20px] mb-[24px] text-[rgba(243,244,246,1)] text-[16px] leading-[26px] font-normal font-['Roboto'] line-clamp-3">
            {message}
          </p>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 w-[174px] h-[46px] px-[21px] py-[11px] rounded-[8px] border border-[rgba(99,102,241,0.30)] bg-[rgba(99,102,241,0.20)] flex-shrink-0 text-indigo-300 text-sm leading-5 font-medium font-['Roboto'] transition hover:bg-[rgba(99,102,241,0.30)] hover:border-[rgba(99,102,241,0.50)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.32852 7.33366V5.33366L10.9935 8.00033L8.32852 10.667V8.66699H5.66352V7.33366H8.32852ZM8.32852 1.33366C9.23462 1.33366 10.1007 1.50699 10.9269 1.85366C11.7175 2.19144 12.4215 2.66922 13.0389 3.28699C13.6563 3.90477 14.1338 4.60921 14.4713 5.40033C14.8178 6.22699 14.991 7.09366 14.991 8.00033C14.991 8.90699 14.8178 9.77366 14.4713 10.6003C14.1338 11.3914 13.6563 12.0959 13.0389 12.7137C12.4215 13.3314 11.7175 13.8092 10.9269 14.147C10.1007 14.4937 9.23462 14.667 8.32852 14.667C7.42242 14.667 6.55629 14.4937 5.73014 14.147C4.93952 13.8092 4.23552 13.3314 3.61813 12.7137C3.00074 12.0959 2.52326 11.3914 2.18569 10.6003C1.83924 9.77366 1.66602 8.90699 1.66602 8.00033C1.66602 7.09366 1.83924 6.22699 2.18569 5.40033C2.52326 4.60921 3.00074 3.90477 3.61813 3.28699C4.23552 2.66922 4.93952 2.19144 5.73014 1.85366C6.55629 1.50699 7.42242 1.33366 8.32852 1.33366ZM8.32852 13.3337C9.2968 13.3337 10.194 13.0892 11.0202 12.6003C11.8197 12.1292 12.4548 11.4937 12.9256 10.6937C13.4142 9.86699 13.6585 8.96921 13.6585 8.00033C13.6585 7.03144 13.4142 6.13366 12.9256 5.30699C12.4548 4.50699 11.8197 3.87144 11.0202 3.40033C10.194 2.91144 9.2968 2.66699 8.32852 2.66699C7.36023 2.66699 6.46302 2.91144 5.63687 3.40033C4.83737 3.87144 4.20221 4.50699 3.73139 5.30699C3.24281 6.13366 2.99852 7.03144 2.99852 8.00033C2.99852 8.96921 3.24281 9.86699 3.73139 10.6937C4.20221 11.4937 4.83737 12.1292 5.63687 12.6003C6.46302 13.0892 7.36023 13.3337 8.32852 13.3337Z"
                fill="#A5B4FC"
              />
            </svg>
            View Action Plan
          </button>
        </div>

        {/* Confidence Badge */}
        <div className="shrink-0 pt-[8px]">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[rgba(99,102,241,0.15)] border border-white/20 text-[12px] text-[#A5B4FC] font-semibold leading-[16px] font-roboto">
            {confidence}
          </span>
        </div>
      </div>
    </div>
  );
}
