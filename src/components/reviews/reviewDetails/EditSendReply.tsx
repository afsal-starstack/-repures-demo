import { useState, useEffect } from "react";

export default function EditSendReply({
  review,
  setShowAIReply,
  generateSectionRef,
  languages,
}: any) {

  const [selectedLanguage, setSelectedLanguage] = useState(review.language);

   useEffect(() => {
    setSelectedLanguage(review.language);
  }, [review]);

  const defaultText = `Sehr geehrter Gast, vielen Dank für Ihr ehrliches Feedback. Wir bedauern aufrichtig, dass Ihr Aufenthalt nicht unseren üblichen Standards entsprach. Die von Ihnen geschilderten Mängel wurden umgehend mit den zuständigen Abteilungsleitern besprochen. Wir würden uns freuen, Ihnen die Möglichkeit zu geben, unser Hotel von seiner besten Seite kennenzulernen.`;
  const maxChars = 500;

  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
      <h3 className="text-white font-semibold mb-4">Edit & Send Reply</h3>

      {/* Language Switch */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-gray-400 text-sm">Edit in:</span>

       <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-[#091521] border border-white/10 rounded px-3 py-1 text-sm text-gray-300"
        >
          <option value={review.language}>{review.language}</option>

          {languages
            .filter((lang: string) => lang !== review.language)
            .map((lang: string) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
        </select>

       <button className="text-teal-400 text-sm cursor-pointer">
        Switch to English
       </button>
      </div>

      {/* Textarea */}
      <textarea
        maxLength={maxChars}
        defaultValue={defaultText}
        className="w-full h-40 bg-[#091521] border border-white/10 rounded-xl p-4 text-gray-300 outline-none leading-6"
      />

      {/* Character Count */}
      <p className="text-xs text-yellow-400 mt-2">
        {defaultText.length} / {maxChars} characters
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 items-center">
        <button className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10">
          ⟳ Regenerate
        </button>

        <button
          onClick={() => {
            setShowAIReply(false);
            generateSectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5"
        >
          ✕ Discard
        </button>

        <button className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10">
          💾 Save Draft
        </button>

        <button className="ml-auto px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-black font-medium">
          Send Reply →
        </button>
      </div>
    </div>
  );
}