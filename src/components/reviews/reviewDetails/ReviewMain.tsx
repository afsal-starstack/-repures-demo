interface Review {
  avatar?: string;
  name: string;
  platform: string;
  time: string;
  rating: number;
  text: string;
}

interface ReviewMainProps {
  review: Review;
  viewIndex: number;
  setViewIndex: (index: number) => void;
  totalReviews: number;
}

export default function ReviewMain({
  review,
  viewIndex,
  setViewIndex,
  totalReviews,
}: ReviewMainProps) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          {/* Avatar */}
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-medium">
              {review.name.charAt(0)}
            </div>
          )}

          {/* Name + Platform */}
          <div>
            <h2 className="text-white text-lg font-semibold">
              {review.name}
            </h2>
            <p className="text-gray-400 text-sm">
              {review.platform} • {review.time}
            </p>
          </div>
        </div>

        {/* Draft Badge */}
        <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
          Draft Saved
        </span>
      </div>

      {/* Divider */}
      <div className="border-b border-white/10 my-4"></div>

      {/* Stars */}
      <div className="flex items-center gap-3">
        <div className="text-yellow-400">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
        <span className="text-gray-300">{review.rating}.0</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 mt-4 leading-relaxed">
        {review.text}
      </p>

      {/* Divider */}
      <div className="border-b border-white/10 my-4"></div>

      {/* Prev / Next Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => {
            if (viewIndex > 0) {
              setViewIndex(viewIndex - 1);
            }
          }}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40"
          disabled={viewIndex === 0}
        >
          ← Prev
        </button>

        <button
          onClick={() => {
            if (viewIndex < totalReviews - 1) {
              setViewIndex(viewIndex + 1);
            }
          }}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 disabled:opacity-40"
          disabled={viewIndex === totalReviews - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}