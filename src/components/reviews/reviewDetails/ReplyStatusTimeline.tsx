export default function ReplyStatusTimeline() {
  return (
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
        <h3 className="text-white mb-4">Reply Status & Storage</h3>

        {/* STATUS */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-400 text-sm">Current Status:</span>
          <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
            Not Replied
          </span>
        </div>

        <p>Status Timeline</p>

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
  );
}