import { useState } from "react";

type Reply = {
  id: number;
  title: string;
  lang: string;
  tone: string;
  chars: number;
  tag: string;
  createdAt: string;
  content: string;
};

const repliesData: Reply[] = [
  {
    id: 1,
    title: "AI Generated — Original",
    lang: "German",
    tone: "Professional",
    chars: 312,
    tag: "Original AI output",
    createdAt: "Today 2:10 PM",
    content:
      "Sehr geehrter Gast, vielen Dank für Ihr ehrliches Feedback. Wir bedauern aufrichtig, dass Ihr Aufenthalt nicht unseren üblichen Standards entsprach. Die von Ihnen geschilderten Mängel wurden umgehend mit den zuständigen Abteilungsleitern besprochen. Wir würden uns freuen, Ihnen die Möglichkeit zu geben, unser Hotel von seiner besten Seite kennenzulernen.",
  },
];

export default function ReplyHistory() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggle = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="p-[26.36px] rounded-md border border-white/10 bg-[rgba(17,19,24,1)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[#FFFFFF] font-roboto text-[11.111px] font-semibold leading-[15.873px]">
          Reply History
        </h3>
        <button className="text-[#94A3B8] text-center font-roboto text-[9.524px] font-normal leading-[12.698px] border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
          Export History
        </button>
      </div>

      <p className="text-[#64748B] font-roboto text-[9.524px] font-normal leading-[12.698px] mb-4">
        All replies stored for this review
      </p>

      {/* Reply Cards */}
      <div className="flex flex-col gap-3">
        {repliesData.map((reply) => {
          const isExpanded = expandedIds.includes(reply.id);

          return (
            <div
              key={reply.id}
              className="rounded-xl border border-white/10 bg-[rgba(10,13,18,1)] p-[13.49px]"
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-roboto text-[9.524px] font-medium leading-[12.698px]">
                    {reply.title}
                  </p>
                  <p className="text-[#64748B] font-roboto text-[9.524px] font-normal leading-[12.698px] mt-1">
                    {reply.lang} · {reply.tone} · {reply.chars} chars ·{" "}
                    {reply.tag}
                  </p>
                </div>
                <span className="text-[#475569] font-roboto text-[9.524px] font-normal leading-[12.698px] whitespace-nowrap ml-4 mt-0.5">
                  Created: {reply.createdAt}
                </span>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04]  p-[10.65px]">
                  <p className="text-[#CBD5E1] text-[12px] leading-relaxed font-roboto">
                    {reply.content}
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-2 mt-3">
                {isExpanded ? (
                  <button
                    onClick={() => toggle(reply.id)}
                    className="px-3 py-1 text-[#94A3B8] text-center font-roboto text-[9.524px] font-normal leading-[12.698px] border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Hide
                  </button>
                ) : (
                  <button
                    onClick={() => toggle(reply.id)}
                    className="px-3 py-1 text-[#94A3B8] text-center font-roboto text-[9.524px] font-normal leading-[12.698px] border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    View
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[#475569] text-center font-roboto text-[9.524px] font-normal leading-[12.698px] mt-[28.74px]">
        No saved or sent replies yet for this review
      </p>
    </div>
  );
}
