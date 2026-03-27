import { useState, useRef } from "react";
import ReviewMain from "@/components/reviews/reviewDetails/ReviewMain";
import TranslationAnalysis from "@/components/reviews/reviewDetails/TranslationAnalysis";
import GuestMeaning from "@/components/reviews/reviewDetails/GuestMeaning";
import AIReplyGenerator from "@/components/reviews/reviewDetails/AIReplyGenerator";
import AIReplyMeaning from "@/components/reviews/reviewDetails/AIReplyMeaning";
import EditSendReply from "@/components/reviews/reviewDetails/EditSendReply";
import ReplyStatusTimeline from "@/components/reviews/reviewDetails/ReplyStatusTimeline";
import ReplyHistory from "@/components/reviews/reviewDetails/ReplyHistory";

export const ReviewDetails = ({
  review,
  viewIndex,
  setViewIndex,
  totalReviews,
  showAIReply,
  setShowAIReply,
}: any) => {
  if (!review) return null;

  const generateSectionRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];

  const handleCopyEnglish = async (englishText: string): Promise<void> => {
    await navigator.clipboard.writeText(englishText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* Full width on all screens, left border on desktop to separate from list */
    <div className="space-y-4 sm:space-y-6 bg-[rgba(17,19,24,0.5)] p-4 sm:p-5 rounded-md border border-white/10">
      <ReviewMain
        review={review}
        viewIndex={viewIndex}
        setViewIndex={setViewIndex}
        totalReviews={totalReviews}
      />
      <TranslationAnalysis review={review} />
      <GuestMeaning sentiment={review.sentiment} />
      <AIReplyGenerator
        review={review}
        showAIReply={showAIReply}
        setShowAIReply={setShowAIReply}
        generateSectionRef={generateSectionRef}
      />
      {showAIReply && (
        <AIReplyMeaning copied={copied} handleCopyEnglish={handleCopyEnglish} />
      )}
      {showAIReply && (
        <EditSendReply
          review={review}
          setShowAIReply={setShowAIReply}
          generateSectionRef={generateSectionRef}
          languages={languages}
        />
      )}
      <ReplyStatusTimeline status={review.status} />
      <ReplyHistory />
    </div>
  );
};
