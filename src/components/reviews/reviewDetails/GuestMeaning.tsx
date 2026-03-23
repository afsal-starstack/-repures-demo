export default function GuestMeaning() {
  return (
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
  );
}