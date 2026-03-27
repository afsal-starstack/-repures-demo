interface Review {
  avatar?: string;
  name: string;
  platform: string;
  time: string;
  rating: number;
  text: string;
  language?: "Arabic" | "English";
  status?: "Unanswered" | "Answered";
  urgent?: boolean;
}

interface ReviewMainProps {
  review: Review;
  viewIndex: number;
  setViewIndex: (index: number) => void;
  totalReviews: number;
}

export default function ReviewMain({ review, viewIndex, setViewIndex, totalReviews }: ReviewMainProps) {
  const navButtonClass =
    "flex justify-center items-center flex-shrink-0 rounded-lg text-[12px] bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40 w-[70px] h-[30px] px-[13px] py-[6px]";

  return (
    <div className="p-4 sm:p-[17.6px] rounded-md border border-white/10 bg-[#111318]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 sm:gap-4">
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-medium flex-shrink-0">
              {review.name.charAt(0)}
            </div>
          )}
          <div>
            <h2 className="text-white font-roboto font-semibold text-[13px] sm:text-[14.743px] leading-[20px] sm:leading-[22.933px]">
              {review.name}
            </h2>
            <p className="text-[#94A3B8] font-roboto font-normal text-[11px] sm:text-[11.467px] leading-[16px]">
              {review.platform} • {review.time}
            </p>
          </div>
        </div>

        {/* Status badges — wrap on small screens */}
        <div className="flex flex-wrap gap-2 justify-end ml-2">
          {review.status === "Unanswered" ? (
            <div className="flex items-center gap-[1px] flex-shrink-0 rounded-full border-[0.819px] border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.2)] px-[10px] h-[21px]">
              <span className="text-[9px] pb-[2px]">⚠</span>
              <span className="text-[9px] font-roboto font-medium leading-[13px] text-[#F87171]">Not Replied</span>
            </div>
          ) : review.status === "Answered" ? (
            <div className="flex items-center gap-[1px] flex-shrink-0 rounded-full bg-[rgba(45,212,191,0.2)] px-[10px] h-[21px]">
              <span className="text-[9px] pb-[2px]">✓</span>
              <span className="text-[9px] font-roboto font-normal leading-[13px] text-[#2DD4BF]">Replied</span>
            </div>
          ) : review.status === "Draft" ? (
            <div className="flex items-center gap-[1px] flex-shrink-0 rounded-full border-[0.819px] border-[rgba(250,204,21,0.3)] bg-[rgba(250,204,21,0.2)] px-[10px] h-[21px]">
              <span className="text-[9px] pb-[2px]">💾</span>
              <span className="text-[9px] font-roboto font-normal leading-[13px] text-[#FACC15]">Save Draft</span>
            </div>
          ) : null}

          {review.urgent && (
            <span className="px-2 py-1 rounded-full bg-[#EF4444] border border-red-500/30 text-white font-roboto text-[9px] font-medium leading-[13px]">
              🔴 Urgent
            </span>
          )}
        </div>
      </div>

      <div className="border-b border-white/10 my-4"></div>

      {/* Stars */}
      <div className="flex items-center gap-3 h-[23px]">
        <div className="flex">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={`filled-${i}`} className="text-[#FBBF24] font-roboto text-[16px]">★</span>
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, i) => (
            <span key={`empty-${i}`} className="text-[#334155] font-roboto text-[16px]">☆</span>
          ))}
        </div>
        <span className="text-white font-inter text-[13px] font-normal leading-[19px]">
          {review.rating}.0
        </span>
      </div>

      {/* Review Text */}
      <p
        dir={review.language === "Arabic" ? "rtl" : "ltr"}
        className={`overflow-hidden break-words font-roboto text-[11px] sm:text-[11.467px] font-normal leading-[18px] text-[#CBD5E1] mt-4 ${review.language === "Arabic" ? "text-right" : "text-left"}`}
      >
        {review.text}
      </p>

      <div className="border-b border-white/10 my-4"></div>

      {/* Prev / Next */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => { if (viewIndex > 0) setViewIndex(viewIndex - 1); }}
          className={navButtonClass}
          disabled={viewIndex === 0}
        >
          ← Prev
        </button>
        <span className="text-gray-500 text-[11px]">{viewIndex + 1} / {totalReviews}</span>
        <button
          onClick={() => { if (viewIndex < totalReviews - 1) setViewIndex(viewIndex + 1); }}
          className={navButtonClass}
          disabled={viewIndex === totalReviews - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
