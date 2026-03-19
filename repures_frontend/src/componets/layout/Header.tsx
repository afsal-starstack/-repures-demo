export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <div>
        <h2 className="text-lg font-semibold">
          Burj Al Salam Hotel
        </h2>
        <p className="text-sm text-gray-400">
          Downtown Dubai • 4 Star • 180 Rooms
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">
          Last sync: 18 hours ago
        </span>

        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
          AH
        </div>
      </div>
    </div>
  );
}