import { useState, useRef } from "react";
import ReviewMain from "@/components/reviews/reviewDetails/ReviewMain";
import TranslationAnalysis from "@/components/reviews/reviewDetails/TranslationAnalysis";
import GuestMeaning from "@/components/reviews/reviewDetails/GuestMeaning";
import AIReplyGenerator from "@/components/reviews/reviewDetails/AIReplyGenerator";
import AIReplyMeaning from "@/components/reviews/reviewDetails/AIReplyMeaning";
import EditSendReply from "@/components/reviews/reviewDetails/EditSendReply";
import ReplyStatusTimeline from "@/components/reviews/reviewDetails/ReplyStatusTimeline";
import ReplyHistory from "@/components/reviews/reviewDetails/ReplyHistory";

export const ReviewDetails = ({ review, viewIndex, setViewIndex, totalReviews }: any) => {
  if (!review) return null;

  const generateSectionRef = useRef<HTMLDivElement | null>(null);
  const [showAIReply, setShowAIReply] = useState(false);
  const [copied, setCopied] = useState<boolean>(false);

  const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];

  const handleCopyEnglish = async (englishText: string): Promise<void> => {
    await navigator.clipboard.writeText(englishText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 bg-[#0B1C2E] p-5 rounded-2xl border border-white/10">

      <ReviewMain
        review={review}
        viewIndex={viewIndex}
        setViewIndex={setViewIndex}
        totalReviews={totalReviews}
      />

      <TranslationAnalysis review={review} />

      <GuestMeaning />

      <AIReplyGenerator
        review={review}
        showAIReply={showAIReply}
        setShowAIReply={setShowAIReply}
        generateSectionRef={generateSectionRef}
      />

      {showAIReply && (
        <AIReplyMeaning
          copied={copied}
          handleCopyEnglish={handleCopyEnglish}
        />
      )}

      {showAIReply && (
        <EditSendReply
          review={review}
          setShowAIReply={setShowAIReply}
          generateSectionRef={generateSectionRef}
          languages={languages}
        />
      )}

      <ReplyStatusTimeline />

      <ReplyHistory />

    </div>
  );
};


// import { useState, useRef } from "react";

// export const ReviewDetails = ({ review, viewIndex, setViewIndex, totalReviews }: any) => {
//   if (!review) return null;

// const generateSectionRef = useRef<HTMLDivElement | null>(null);
// const [showAIReply, setShowAIReply] = useState(false);
// const [copied, setCopied] = useState<boolean>(false);

// const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];

// const handleCopyEnglish = async (englishText: string): Promise<void> => {
//   await navigator.clipboard.writeText(englishText);
//   setCopied(true);

//   setTimeout(() => {
//     setCopied(false);
//   }, 2000);
// };

//   return (
//     <div className="space-y-6 bg-[#0B1C2E] p-5 rounded-2xl border border-white/10">


// {/* 🔹 MAIN REVIEW */}
// <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
//   {/* Header */}
//   <div className="flex justify-between items-start">
//     <div className="flex gap-4">
//       {/* Avatar */}
//       {review.avatar ? (
//         <img
//           src={review.avatar}
//           alt={review.name}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//       ) : (
//         <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-medium">
//           {review.name.charAt(0)}
//         </div>
//       )}

//       {/* Name + Platform */}
//       <div>
//         <h2 className="text-white text-lg font-semibold">
//           {review.name}
//         </h2>
//         <p className="text-gray-400 text-sm">
//           {review.platform} • {review.time}
//         </p>
//       </div>
//     </div>

//     {/* Draft Badge */}
//     <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
//       Draft Saved
//     </span>
//   </div>

//   {/* Divider */}
//   <div className="border-b border-white/10 my-4"></div>

//   {/* Stars */}
//   <div className="flex items-center gap-3">
//     <div className="text-yellow-400">
//       {"★".repeat(review.rating)}
//       {"☆".repeat(5 - review.rating)}
//     </div>
//     <span className="text-gray-300">{review.rating}.0</span>
//   </div>

//   {/* Review Text */}
//   <p className="text-gray-300 mt-4 leading-relaxed">
//     {review.text}
//   </p>

//   {/* Divider */}
//   <div className="border-b border-white/10 my-4"></div>

//   {/* Prev / Next Buttons */}
// {/* Prev / Next Buttons */}
// <div className="flex justify-between">
//   <button
//     onClick={() => {
//       if (viewIndex > 0) {
//         setViewIndex(viewIndex - 1);
//       }
//     }}
//     className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40"
//     disabled={viewIndex === 0}
//   >
//     ← Prev
//   </button>

//   <button
//     onClick={() => {
//       if (viewIndex < totalReviews - 1) {
//         setViewIndex(viewIndex + 1);
//       }
//     }}
//     className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40"
//     disabled={viewIndex === totalReviews - 1}
//   >
//     Next →
//   </button>
// </div>
// </div>


// {/* 🔹 TRANSLATION & AI ANALYSIS */}
// <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E] mt-6">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-white font-semibold">
//       Translation & AI Analysis
//       <span className="text-purple-400 ml-2 text-sm">✦ Cultural AI</span>
//     </h2>

//     <p className="text-gray-400 text-sm">
//       Auto-detected: {review.language} &nbsp; Cultural Mode
//       <span className="text-green-400 ml-2">● ON</span>
//     </p>
//   </div>

//   {/* Two Columns */}
//   <div className="grid grid-cols-2 gap-6">
//     {/* LEFT — Original Review */}
//     <div className="p-5 rounded-xl border border-white/10 bg-[#091521]">
//       <div className="flex justify-between mb-3">
//         <p className="text-gray-400 text-sm">Original Review</p>
//         <p className="text-teal-400 text-sm">{review.language}</p>
//       </div>

//       <p className="text-gray-300 text-sm leading-relaxed">
//         {review.text}
//       </p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mt-4 text-xs">
//         <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
//           {review.language}
//         </span>

//         <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
//           {review.platform}
//         </span>

//         <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
//           ⭐ {review.rating}.0
//         </span>

//         <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
//           {review.sentiment}
//         </span>
//       </div>
//     </div>

//     {/* RIGHT — English Translation + AI */}
//     <div className="p-5 rounded-xl border border-white/10 bg-[#091521]">
//       <div className="flex justify-between mb-3">
//         <p className="text-gray-400 text-sm">English Translation</p>
//         <p className="text-purple-400 text-sm">✦ AI</p>
//       </div>

//       <p className="text-gray-300 text-sm leading-relaxed">
//         {review.translation}
//       </p>

//       {/* AI Tags */}
//       <div className="flex flex-wrap gap-2 mt-4 text-xs">
//         <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
//           Tone: Angry
//         </span>

//         <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
//           Sentiment: Negative
//         </span>

//         <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
//           Risk: High
//         </span>

//         <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
//           Intent: Warning others
//         </span>
//       </div>

//       <p className="text-gray-500 text-xs mt-4 italic">
//         "Culturally adapted to preserve implicit meaning and tone common in guest communication."
//       </p>
//     </div>
//   </div>
// </div>


//       {/* What Guest Really Means */}
//       <div className="mt-6 p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/30 via-transparent to-purple-500/30">
//         <div className="rounded-2xl bg-[#0B0F19]/90 p-6">
//           {/* Header */}
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-white text-lg font-semibold">
//                 What the Guest REALLY Means
//               </h3>
//               <p className="text-gray-400 text-sm">
//                 Deep cultural sentiment analysis
//               </p>
//             </div>

//             <span className="text-purple-400 text-sm font-semibold">
//               Confidence 86%
//             </span>
//           </div>
//           {/* Points */}
//           <div className="space-y-3 mb-5">
//             <div className="flex items-start gap-3 text-sm text-gray-300">
//               <span className="text-yellow-400 mt-[2px]">⚠</span>
//               <p>
//                 The guest is upset due to service delays and felt ignored by
//                 staff
//               </p>
//             </div>

//             <div className="flex items-start gap-3 text-sm text-gray-300">
//               <span className="text-yellow-400 mt-[2px]">⚠</span>
//               <p>
//                 They are warning future guests not to book here — high churn
//                 risk
//               </p>
//             </div>

//             <div className="flex items-start gap-3 text-sm text-gray-300">
//               <span className="text-yellow-400 mt-[2px]">⚠</span>
//               <p>
//                 The review implies poor management responsiveness and
//                 accountability
//               </p>
//             </div>
//           </div>
//           {/* Progress Bar */}
//           <div className="w-full h-2 rounded-full bg-purple-900/30 overflow-hidden">
//             <div className="h-full w-[86%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
//           </div>

//           <div className="text-right text-xs text-gray-400 mt-1">86%</div>
//         </div>
//       </div>




      

//   {/* 🔹 AI REPLY — Native Language Response */}
// <div ref={generateSectionRef} className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-2">
//     <h3 className="text-white font-semibold">
//       ✦ AI Reply — Native Language Response
//     </h3>

//     <span className="text-xs px-3 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
//       [{review.language}]
//     </span>
//   </div>

//   {/* Description */}
//   <p className="text-gray-400 text-sm mb-5">
//     Generates a culturally respectful reply in the guest's language while protecting hotel reputation.
//   </p>

//   {/* Dropdowns */}
//   <div className="grid grid-cols-2 gap-4 mb-5">
//     <div>
//       <label className="text-gray-400 text-xs">Reply Tone</label>
//       <select className="w-full mt-1 bg-[#091521] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 outline-none">
//         <option>Professional</option>
//         <option>Empathetic</option>
//         <option>concise</option>
//       </select>
//     </div>

//     <div>
//       <label className="text-gray-400 text-xs">Brand Voice</label>
//       <select className="w-full mt-1 bg-[#091521] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 outline-none">
//         <option>Modern UAE Hospitality</option>
//         <option>Luxury Hotel</option>
//         <option>Budget Hotel</option>
//       </select>
//     </div>
//   </div>

//   {/* Generate Button */}
//  <button
//   onClick={() => setShowAIReply(true)}
//   className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all"
// >
//  { showAIReply ? "✦ Regenerate AI Reply" : "✦ Generate AI Reply" }
// </button>
// </div>


// {showAIReply && (
//   <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
//     <h3 className="text-white font-semibold mb-4">
//       AI Reply Meaning (English + Cultural Context)
//     </h3>

//     {/* English Meaning */}
// <div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
//   <div className="flex items-center justify-between mb-3">
//     <p className="text-gray-400 text-sm">
//       🌐 AI Reply Meaning (English)
//     </p>

//     <button
//       onClick={() =>
//         handleCopyEnglish(
//           "We sincerely apologize that your stay did not meet our usual standards. The issues you described have been immediately discussed with the relevant department heads. We would be happy to give you the opportunity to experience our hotel at its best."
//         )
//       }
//       className="text-xs px-3 py-1.5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition"
//     >
//       {copied ? "Copied" : "Copy English"}
//     </button>
//   </div>

//   <p className="text-gray-300 text-sm leading-6">
//     We sincerely apologize that your stay did not meet our usual standards.
//     The issues you described have been immediately discussed with the relevant
//     department heads. We would be happy to give you the opportunity to
//     experience our hotel at its best.
//   </p>
// </div>

//     {/* Cultural Context */}
//     <div className="p-4 rounded-xl border border-white/10 bg-[#091521]">
//       <p className="text-gray-300 text-sm mb-3">
//        🌐 Cultural & Context Meaning
//       </p>

//       <ul className="text-sm text-gray-400 space-y-2">
//         <li>✓ Direct and factual tone preferred by German guests</li>
//         <li>✓ Concrete action steps mentioned — builds credibility</li>
//         <li>✓ Avoids over-apologising — focuses on resolution</li>
//         <li>✓ Formal address maintained</li>
//         <li>✓ Solution-oriented closing</li>
//       </ul>
//     </div>

//     <div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
//   {/* Header */}
//   <div className="flex items-center gap-2 mb-3">
//     <p className="text-gray-400 text-sm">Reply Relevance to Review</p>
//     <span className="text-gray-500 text-xs">ⓘ</span>
//   </div>

//   {/* Percentage + Badge */}
//   <div className="flex items-center gap-3 mb-3">
//     <h2 className="text-3xl font-semibold text-teal-400">88%</h2>
//     <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
//       Relevant
//     </span>
//   </div>

//   {/* Progress Bar */}
//   <div className="w-full h-2 bg-[#1F2A37] rounded-full overflow-hidden">
//     <div
//       className="h-full bg-teal-400 rounded-full"
//       style={{ width: "88%" }}
//     ></div>
//   </div>
// </div>

// <div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
//   {/* Header */}
//   <div className="flex items-center gap-3 mb-2">
//     <div className="w-4 h-4 rounded-full border-2 border-purple-400"></div>
//     <p className="text-gray-300 text-sm font-medium">
//       Unique Reply Guarantee
//     </p>
//   </div>

//   {/* Description */}
//   <p className="text-gray-400 text-sm mb-4">
//     Repures generates a new response every time — no templates, adapts phrasing
//     per cultural norms and sentiment intensity.
//   </p>

//   {/* Tags */}
//   <div className="flex gap-3 flex-wrap">
//     <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
//       ✓ No template repetition
//     </span>

//     <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
//       ✓ Cultural tone preserved
//     </span>

//     <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
//       ✓ Reputation-safe language
//     </span>
//   </div>
// </div>
//   </div>
// )}


// {showAIReply && (
//   <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
//     <h3 className="text-white font-semibold mb-4">Edit & Send Reply</h3>

//     {/* Language Switch */}
//     <div className="flex items-center gap-3 mb-4">
//       <span className="text-gray-400 text-sm">Edit in:</span>
//     <select className="bg-[#091521] border border-white/10 rounded px-3 py-1 text-sm">
//   <option>{review.language}</option>

//   {languages
//     .filter((lang) => lang !== review.language)
//     .map((lang) => (
//       <option key={lang}>{lang}</option>
//     ))}
// </select>

//       <button className="text-teal-400 text-sm">
//         Switch to English
//       </button>
//     </div>

//     {/* Textarea */}
//     <textarea
//       className="w-full h-40 bg-[#091521] border border-white/10 rounded-xl p-4 text-gray-300 outline-none"
//       defaultValue="Sehr geehrter Gast, vielen Dank für Ihr ehrliches Feedback..."
//     />

//     {/* Character Count */}
//     <p className="text-xs text-yellow-400 mt-2">
//       475 / 500 characters
//     </p>

//     {/* Buttons */}
//     <div className="flex gap-3 mt-4">
//       <button className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400">
//         Regenerate
//       </button>

//      <button
//           onClick={() => {
//             setShowAIReply(false);
//             generateSectionRef.current?.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//             });
//           }}
//           className="px-4 py-2 rounded-lg border border-white/10 text-gray-300"
//         >
//           Discard
//         </button>

//       <button className="px-4 py-2 rounded-lg border border-yellow-500 text-yellow-400">
//         Save Draft
//       </button>

//       <button className="ml-auto px-6 py-2 rounded-lg bg-teal-500 text-black font-medium">
//         Send Reply →
//       </button>
//     </div>
//   </div>
// )}




//       {/* 🔹 REPLY STATUS & TIMELINE */}
//       <div className="p-6 rounded-xl border border-white/10 bg-white/5">
//         <h3 className="text-white mb-4">Reply Status & Storage</h3>

//         {/* STATUS */}
//         <div className="flex items-center gap-3 mb-6">
//           <span className="text-gray-400 text-sm">Current Status:</span>
//           <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
//             Not Replied
//           </span>
//         </div>

//         <p>Status Timeline</p>

//         {/* TIMELINE */}
//         <div className="space-y-4 text-sm">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-white">Review received</p>
//               <p className="text-gray-400 text-xs">
//                 Booking.com • Arabic • Rating 2.0
//               </p>
//             </div>
//             <span className="text-gray-500 text-xs">Today • 9:32 AM</span>
//           </div>

//           <div className="flex justify-between">
//             <div>
//               <p className="text-white">AI translation generated</p>
//               <p className="text-gray-400 text-xs">
//                 Arabic → English • Confidence 86%
//               </p>
//             </div>
//             <span className="text-gray-500 text-xs">Today • 9:32 AM</span>
//           </div>

//           <div className="flex justify-between">
//             <div>
//               <p className="text-white">AI reply generated</p>
//               <p className="text-gray-400 text-xs">Tone: Professional</p>
//             </div>
//             <span className="text-gray-500 text-xs">Today • 2:10 PM</span>
//           </div>

//           <div className="flex justify-between opacity-60">
//             <div>
//               <p className="text-white">Reply sent</p>
//               <p className="text-gray-400 text-xs">Awaiting manager action</p>
//             </div>
//             <span className="text-gray-500 text-xs">Pending</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 REPLY HISTORY */}
//       <div className="p-6 rounded-xl border border-white/10 bg-white/5">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-white">Reply History</h3>
//           <button className="text-xs border border-white/10 px-3 py-1 rounded">
//             Export History
//           </button>
//         </div>

//         <p className="text-gray-400 text-sm mb-4">
//           All replies stored for this review
//         </p>

//         <div className="p-4 rounded-lg border border-white/10 bg-black/30">
//           <div className="flex justify-between">
//             <p className="text-white text-sm">AI Generated — Original</p>
//             <span className="text-gray-500 text-xs">Today • 2:10 PM</span>
//           </div>

//           <p className="text-gray-400 text-xs mt-2">
//             Arabic • Professional • 312 chars
//           </p>

//           <div className="flex gap-2 mt-4">
//             <button className="px-3 py-1 text-xs border border-white/10 rounded">
//               View
//             </button>
//             <button className="px-3 py-1 text-xs border border-white/10 rounded">
//               Restore
//             </button>
//           </div>
//         </div>

//         <p className="text-center text-gray-500 text-xs mt-6">
//           No saved or sent replies yet for this review
//         </p>
//       </div>
//     </div>
//   );
// };  
