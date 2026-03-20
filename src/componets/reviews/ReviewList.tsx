export default function TranslationPanel(){ return <div>Translation Panel</div> }export const ReviewList = ({ reviews, selected, onSelect }: any) => {
  return (
    <div className="space-y-4">
      {reviews.map((r: any, i: number) => (
        <div
          key={r.id}
          onClick={() => onSelect(i)}
          className={`p-4 rounded-xl border cursor-pointer transition ${
            selected === i
              ? "border-teal-400 bg-teal-400/10"
              : "border-white/10 bg-white/5 hover:border-white/20"
          }`}
        >
          <div className="flex justify-between">
            <h3 className="text-white font-medium">{r.name}</h3>
            <span className="text-xs text-gray-400">{r.platform}</span>
          </div>

          <p className="text-sm text-gray-400 mt-2 line-clamp-2">
            {r.text}
          </p>

          <div className="flex gap-2 mt-3 text-xs">
            <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
              {r.sentiment}
            </span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
              {r.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};