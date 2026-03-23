export default function ReplyHistory() {
  return (
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
  );
}