export const ReviewList = ({
  reviews,
  selected,
  onSelect,
  sort,
  setSort,
}: any) => {
  return (
    <div className="bg-[#0B1C2E] p-5 rounded-2xl border border-white/10">
      {/* Header */}
  {reviews.length > 0 ? (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <p className="text-gray-400 text-sm">
        Showing {reviews.length} reviews
      </p>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="bg-transparent border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 outline-none"
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Rating</option>
        <option>Lowest Rating</option>
        <option>Priority</option>
      </select>
    </div>

    <div className="border-b border-white/10 mt-4"></div>
  </div>
) : (
  <div className="text-center text-gray-500 py-10">
    No reviews found with the given filters
  </div>
)}

      {/* Review Cards */}
      <div className="space-y-4">
        {reviews.map((r: any, i: number) => (
          <div
            key={r.id}
            onClick={() => onSelect(i)}
            className={`p-6 rounded-2xl border cursor-pointer transition-all
              ${
                selected === i
                  ? "border-teal-400 bg-[#0B2E2E]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
          >
            {/* Top */}
            <div className="flex justify-between">
              <div className="flex gap-3">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-medium">
                    {r.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-white font-medium">{r.name}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md">
                    {r.platform}
                  </span>
                </div>
              </div>

              <span className="text-xs text-gray-400">{r.time}</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2 mt-3">
              <div className="text-yellow-400 text-sm">
                {"★".repeat(r.rating)}
              </div>
              <span className="text-sm text-gray-400">{r.rating}.0</span>
            </div>

            {/* Text */}
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {r.text}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                {r.language}
              </span>

              <span
                className={`px-2 py-1 rounded ${
                  r.sentiment === "Positive"
                    ? "bg-green-500/20 text-green-400"
                    : r.sentiment === "Negative"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {r.sentiment}
              </span>

              <span
                className={`px-2 py-1 rounded ${
                  r.status === "Answered"
                    ? "bg-green-500/20 text-green-400"
                    : r.status === "Unanswered"
                    ? "border border-red-500 text-red-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};