import syncIcon from "@/assets/icons/dashboardHeader/syncIcon.svg";
import bellIcon from "@/assets/icons/dashboardHeader/bellIcon.svg"

type HotelData = {
  name: string;
  location: string;
  stars: number;
  rooms: number;
  reputation: "Healthy" | "Warning" | "Critical";
  actionsPending: number;
  rank: number;
  lastSync: string;
  userInitials: string;
};

const dummyData: HotelData = {
  name: "Burj Al Salam Hotel",
  location: "Downtown Dubai",
  stars: 4,
  rooms: 180,
  reputation: "Healthy",
  actionsPending: 6,
  rank: 3,
  lastSync: "18 hours ago",
  userInitials: "AH",
};

export default function Header() {
  const data = dummyData;

  return (
    <div className="fixed top-0 left-[255px] z-40 flex items-center justify-between w-[calc(100%-255px)] h-[115px] pl-8 pt-4 pb-[17px] border-b border-[#1F2937] bg-[#13161C]">
      {/* LEFT */}
      <div className="flex flex-col">
        <h2 className="text-white font-roboto text-[20px] font-bold leading-[28px]">
          {data.name}
        </h2>

        <p className="text-[#9CA3AF] font-roboto text-[14px] font-normal leading-[20px]">
          {data.location} • {data.stars} Star • {data.rooms} Rooms
        </p>

        {/* STATUS */}
        <div className="flex items-center mt-1 text-[12px] font-roboto font-medium leading-[16px]">

          <div className="flex items-center gap-1 text-[#34D399]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#34D399]"></div>
            <span>Reputation: {data.reputation}</span>
          </div>

          <div className="flex items-center text-[#FBBF24]">
            <div className="w-1 h-1 rounded-full bg-[#374151] mr-[12px] ml-[12px]"></div>
            <span>{data.actionsPending} actions pending</span>
          </div>

          <div className="flex items-center text-gray-500">
            <div className="w-1 h-1 rounded-full bg-[#374151] mr-[12px] ml-[12px]"></div>
            <span>Ranked #{data.rank} locally</span>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 mr-[60px]">

        {/* SYNC */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <img src={syncIcon} alt="sync" className="w-4 h-4" />
          <p className="text-[#9CA3AF] font-roboto text-[14px] font-normal leading-[20px]">
            Last sync: {data.lastSync}
          </p>
        </div>

        {/* NOTIFICATION */}
        <div className="relative">
          <div className="w-9 h-9 rounded-lg bg-[#161B22] flex items-center justify-center">
            <img src={bellIcon} alt="notifications" className="w-5 h-5" />
          </div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>

        {/* AVATAR */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-sm font-semibold text-white">
          {data.userInitials}
        </div>
      </div>
    </div>
  );
}
