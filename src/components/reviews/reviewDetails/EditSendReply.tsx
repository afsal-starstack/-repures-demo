import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown } from "lucide-react";

export default function EditSendReply({ review, setShowAIReply, generateSectionRef, languages }: any) {
  const [selectedLanguage, setSelectedLanguage] = useState(review.language);
  const [text, setText] = useState("");
  const [openLang, setOpenLang] = useState(false);

  const langRef = useRef(null);
  useClickOutside(langRef, () => setOpenLang(false));

  const maxChars = 500;

  const defaultTexts: any = {
    English: `Dear Guest, thank you for your honest feedback. We sincerely regret that your stay did not meet our usual standards. The issues you mentioned have been discussed with the responsible department heads. We would be delighted to welcome you again and provide you with a better experience.`,
    German: `Sehr geehrter Gast, vielen Dank für Ihr ehrliches Feedback. Wir bedauern aufrichtig, dass Ihr Aufenthalt nicht unseren üblichen Standards entsprach.`,
    Arabic: `عزيزي الضيف، شكرًا لك على ملاحظاتك الصادقة. نأسف بصدق لأن إقامتك لم تكن على مستوى معاييرنا المعتادة.`,
  };

  useEffect(() => {
    setSelectedLanguage(review.language);
    setText(defaultTexts[review.language] || defaultTexts["English"]);
  }, [review]);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setText(defaultTexts[lang] || defaultTexts["English"]);
  };

  return (
    <div className="p-4 sm:p-[17.2px] rounded-md border border-white/10 bg-[#111318]">
      <h3 className="text-white font-roboto text-[11px] font-semibold leading-[16px] mb-4">
        ✏ Edit & Send Reply
      </h3>

      {/* Language Switch */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-[#94A3B8] font-roboto text-[9px]">Edit in:</span>

        <div className="relative" ref={langRef}>
          <div
            onClick={() => setOpenLang(!openLang)}
            className="flex text-[12px] items-center justify-between w-[88px] h-[24px] px-2 rounded-md border border-white/10 bg-[#111318] text-gray-300 text-[9px] cursor-pointer"
          >
            {selectedLanguage}
            <ChevronDown size={12} className={`ml-auto transition-transform ${openLang ? "rotate-180" : ""}`} />
          </div>
          {openLang && (
            <div className="absolute left-0 mt-1 w-[150px] rounded-md border border-white/10 bg-[#111318] overflow-hidden z-50">
              {languages.filter((lang: string) => lang !== selectedLanguage).map((lang: string) => (
                <div
                  key={lang}
                  onClick={() => { handleLanguageChange(lang); setOpenLang(false); }}
                  className="text-[12px] h-[32px] px-4 py-2 cursor-pointer text-[#CBD5E1] hover:bg-teal-500 hover:text-white transition-all"
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => handleLanguageChange("English")}
          className="text-[#2DD4BF] text-center font-roboto text-[9px] font-normal cursor-pointer"
        >
          Switch to English
        </button>
      </div>

      {/* Textarea */}
      <textarea
        maxLength={maxChars}
        value={text}
        onChange={(e) => setText(e.target.value)}
        dir={selectedLanguage === "Arabic" ? "rtl" : "ltr"}
        className={`w-full min-h-[120px] sm:min-h-40 bg-[#0A0D12] border border-white/10 rounded-md p-4 box-border text-white font-roboto text-[11px] font-normal leading-[18px] outline-none resize-none transition-colors
          [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-black
          [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full
          ${selectedLanguage === "Arabic" ? "text-right" : "text-left"}`}
      />

      <p className="mt-2 text-[#64748B] font-roboto text-[9px]">
        {text.length} / {maxChars} characters
      </p>

      {/* Buttons — wrap on small screens */}
      <div className="flex flex-wrap gap-2 mt-4 items-center">
        <button className="flex items-center justify-center h-7 px-3 rounded-[6px] border border-[rgba(139,92,246,0.40)] text-purple-400 text-[10px] font-medium hover:bg-purple-500/10">
          ⟳ Regenerate
        </button>

        <button
          onClick={() => {
            setShowAIReply(false);
            generateSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="flex items-center justify-center h-[28px] px-[13px] py-[7px] rounded-lg border border-white/10 text-[#94A3B8] font-roboto text-[9px] font-medium hover:bg-white/5"
        >
          ✕ Discard
        </button>

        <button className="flex items-center justify-center h-7 px-3 rounded-md border border-yellow-500/40 text-yellow-400 text-[10px] font-medium hover:bg-yellow-500/10">
          💾 Save Draft
        </button>

        {/* Send — full width on mobile, auto on larger */}
        <button className="flex-1 sm:flex-none sm:ml-auto flex items-center justify-center min-w-[120px] h-[26px] px-[19px] py-[6px] rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-roboto text-[9px] font-semibold leading-[13px]">
          Send Reply →
        </button>
      </div>
    </div>
  );
}
