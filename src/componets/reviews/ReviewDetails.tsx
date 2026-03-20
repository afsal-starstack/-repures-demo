export const ReviewDetails = ({ review }: any) => {
  if (!review) return null;

  return (
    <div className="space-y-6">



      {/* 🔹 MAIN REVIEW */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5">
        <h2 className="text-white text-lg font-semibold">{review.name}</h2>

        <p className="text-gray-400 mt-2 text-sm">
          {review.platform} • {review.time}
        </p>

        <p className="text-white mt-4">{review.text}</p>
      </div>





      {/* What Guest Really Means */}
      <div className="mt-6 p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/30 via-transparent to-purple-500/30">
        <div className="rounded-2xl bg-[#0B0F19]/90 p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white text-lg font-semibold">
                What the Guest REALLY Means
              </h3>
              <p className="text-gray-400 text-sm">
                Deep cultural sentiment analysis
              </p>
            </div>

            <span className="text-purple-400 text-sm font-semibold">
              Confidence 86%
            </span>
          </div>
          {/* Points */}
          <div className="space-y-3 mb-5">
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <span className="text-yellow-400 mt-[2px]">⚠</span>
              <p>
                The guest is upset due to service delays and felt ignored by
                staff
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-300">
              <span className="text-yellow-400 mt-[2px]">⚠</span>
              <p>
                They are warning future guests not to book here — high churn
                risk
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-300">
              <span className="text-yellow-400 mt-[2px]">⚠</span>
              <p>
                The review implies poor management responsiveness and
                accountability
              </p>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-purple-900/30 overflow-hidden">
            <div className="h-full w-[86%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
          </div>

          <div className="text-right text-xs text-gray-400 mt-1">86%</div>
        </div>
      </div>




      

      {/* 🔹 REPLY GENERATOR */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5">
        <h3 className="text-white mb-4">AI Reply</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <select className="bg-transparent border border-white/10 rounded px-3 py-2 text-sm">
            <option>Professional</option>
            <option>Friendly</option>
          </select>

          <select className="bg-transparent border border-white/10 rounded px-3 py-2 text-sm">
            <option>Modern UAE Hospitality</option>
            <option>Formal</option>
          </select>
        </div>

        <button className="w-full py-3 bg-teal-500 rounded-lg text-black font-medium">
          ✦ Generate AI Reply
        </button>
      </div>

      {/* 🔹 REPLY STATUS & TIMELINE */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5">
        <h3 className="text-white mb-4">Reply Status & Storage</h3>

        {/* STATUS */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-400 text-sm">Current Status:</span>
          <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
            Not Replied
          </span>
        </div>

        {/* TIMELINE */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-white">Review received</p>
              <p className="text-gray-400 text-xs">
                Booking.com • Arabic • Rating 2.0
              </p>
            </div>
            <span className="text-gray-500 text-xs">Today • 9:32 AM</span>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-white">AI translation generated</p>
              <p className="text-gray-400 text-xs">
                Arabic → English • Confidence 86%
              </p>
            </div>
            <span className="text-gray-500 text-xs">Today • 9:32 AM</span>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-white">AI reply generated</p>
              <p className="text-gray-400 text-xs">Tone: Professional</p>
            </div>
            <span className="text-gray-500 text-xs">Today • 2:10 PM</span>
          </div>

          <div className="flex justify-between opacity-60">
            <div>
              <p className="text-white">Reply sent</p>
              <p className="text-gray-400 text-xs">Awaiting manager action</p>
            </div>
            <span className="text-gray-500 text-xs">Pending</span>
          </div>
        </div>
      </div>

      {/* 🔹 REPLY HISTORY */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white">Reply History</h3>
          <button className="text-xs border border-white/10 px-3 py-1 rounded">
            Export History
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          All replies stored for this review
        </p>

        <div className="p-4 rounded-lg border border-white/10 bg-black/30">
          <div className="flex justify-between">
            <p className="text-white text-sm">AI Generated — Original</p>
            <span className="text-gray-500 text-xs">Today • 2:10 PM</span>
          </div>

          <p className="text-gray-400 text-xs mt-2">
            Arabic • Professional • 312 chars
          </p>

          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 text-xs border border-white/10 rounded">
              View
            </button>
            <button className="px-3 py-1 text-xs border border-white/10 rounded">
              Restore
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          No saved or sent replies yet for this review
        </p>
      </div>
    </div>
  );
};
