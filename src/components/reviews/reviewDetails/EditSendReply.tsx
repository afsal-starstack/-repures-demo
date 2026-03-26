import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown } from "lucide-react";

export default function EditSendReply({
  review,
  setShowAIReply,
  generateSectionRef,
  languages,
}: any) {
  const [selectedLanguage, setSelectedLanguage] = useState(review.language);
  const [text, setText] = useState("");
  const [openLang, setOpenLang] = useState(false);

  const langRef = useRef(null);
  useClickOutside(langRef, () => setOpenLang(false));

  const maxChars = 500;

  const defaultTexts: any = {
    English: `Dear Guest, thank you for your honest feedback. We sincerely regret that your stay did not meet our usual standards. The issues you mentioned have been discussed with the responsible department heads. We would be delighted to welcome you again and provide you with a better experience.`,
    German: `Sehr geehrter Gast, vielen Dank für Ihr ehrliches Feedback. Wir bedauern aufrichtig, dass Ihr Aufenthalt nicht unseren üblichen Standards entsprach. Die von Ihnen geschilderten Mängel wurden umgehend mit den zuständigen Abteilungsleitern besprochen. Wir würden uns freuen, Ihnen die Möglichkeit zu geben, unser Hotel von seiner besten Seite kennenzulernen.`,
    Arabic: `عزيزي الضيف، شكرًا لك على ملاحظاتك الصادقة. نأسف بصدق لأن إقامتك لم تكن على مستوى معاييرنا المعتادة. تم مناقشة المشكلات التي ذكرتها مع رؤساء الأقسام المعنيين. يسعدنا أن نرحب بك مرة أخرى ونقدم لك تجربة أفضل.`,
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
    <div className="p-[17.2px] rounded-md border border-white/10 bg-[#111318]">
      <h3 className="text-white font-['Roboto'] text-[11.467px] font-semibold leading-[16.381px] mb-4">
        ✏ Edit & Send Reply
      </h3>

      {/* Language Switch */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#94A3B8] font-['Roboto'] text-[9.828px] font-normal leading-[13.105px]">
          Edit in:
        </span>

        <div className="relative" ref={langRef}>
          <div
            onClick={() => setOpenLang(!openLang)}
            className="flex text-[12px] items-center justify-between w-[88px] h-[24px] px-2  rounded-md border border-white/10 bg-[#111318] text-gray-300 text-[9px]"
          >
            {selectedLanguage}
            <ChevronDown
              size={12}
              className={`ml-auto transition-transform ${openLang ? "rotate-180" : ""}`}
            />
          </div>

          {openLang && (
            <div className="absolute left-0 mt-1 w-[150px] rounded-md border border-white/10 bg-[#111318] overflow-hidden z-50">
              {languages
                .filter((lang: string) => lang !== selectedLanguage)
                .map((lang: string) => (
                  <div
                    key={lang}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setOpenLang(false);
                    }}
                    className="text-[12px] h-[32px] px-4 py-2 cursor-pointer text-[#CBD5E1] hover:bg-teal-500 hover:text-white transition-all duration-150"
                  >
                    {lang}
                  </div>
                ))}
            </div>
          )}
        </div>

        <button
          onClick={() => handleLanguageChange("English")}
          className="text-[#2DD4BF] text-center font-['Roboto'] text-[9.828px] font-normal leading-[13.105px] cursor-pointer"
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
        className={`w-full min-h-40 bg-[#0A0D12] border border-white/10 rounded-md p-4 pr-3 box-border overflow-y-auto text-white font-['Roboto'] text-[11.467px] font-normal leading-[18.633px] outline-none resize-none transition-colors
        [&::-webkit-scrollbar]:w-3
        [&::-webkit-scrollbar-track]:bg-black
        [&::-webkit-scrollbar-thumb]:bg-white/20
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb:hover]:bg-white/30
        ${selectedLanguage === "Arabic" ? "text-right" : "text-left"}`}
      />

      <p className="mt-2 text-[#64748B] font-['Roboto'] text-[9.828px] font-normal leading-[13.105px]">
        {text.length} / {maxChars} characters
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 items-center">
        <button className="flex items-center justify-center h-7 px-3 rounded-[6.552px] border-[0.819px] border-[rgba(139,92,246,0.40)] text-purple-400 text-[10px] font-medium leading-[13px] hover:bg-purple-500/10">
          ⟳ Regenerate
        </button>

        <button
          onClick={() => {
            setShowAIReply(false);
            generateSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="flex items-center justify-center  h-[27.847px] px-[13.924px] py-[7.371px] rounded-lg border border-white/10 text-[#94A3B8] font-['Roboto'] text-[9.828px] font-medium leading-[13.105px] hover:bg-white/5"
        >
          ✕ Discard
        </button>

        <button className="flex items-center justify-center h-7 px-3 rounded-md border border-yellow-500/40 text-yellow-400 text-[10px] font-medium hover:bg-yellow-500/10">
          💾 Save Draft
        </button>

        <button className="ml-auto flex items-center justify-center w-[319.771px] h-[26.209px] px-[19.657px] py-[6.552px] rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-['Roboto'] text-[9.828px] font-semibold leading-[13.105px]">
          Send Reply →
        </button>
      </div>
    </div>
  );
}