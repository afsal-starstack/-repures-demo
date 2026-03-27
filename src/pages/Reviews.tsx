import { useState, useEffect, useMemo } from "react";
import { ReviewsHeader } from "@/components/reviews/ReviewHeader";
import { PlatformCards } from "@/components/reviews/platformCards";
import { FiltersBar } from "@/components/reviews/FilterBar";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewDetails } from "@/components/reviews/ReviewDetails";

const defaultFilters = {
  platform: "Platform",
  rating: null as number | null,
  sentiment: "All",
  status: "All",
  language: "Language",
  date: "Last 30 days",
  search: "",
};

const reviewsData = [
  {
    id: 1,
    name: "Ahmed Al Mansouri ",
    platform: "Booking.com",
    rating: 2,
    time: "5 hours ago",
    text: "تجربة سيئة للغاية. استقبال سيء وتأخير في الخدمة. الغرفة لم تكن نظيفة والموظفون لم يكونوا متعاونين. لا أنصح بهذا الفندق على الإطلاق.",
    language: "Arabic",
    sentiment: "Negative",
    status: "Unanswered",
    date: "2026-03-25",
    priority: "High",
    avatar: "https://i.pravatar.cc/150?img=12",
    culturalAi: true,
    urgent: true,
    timestamp: new Date("2026-03-25").getTime(),
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    platform: "Google",
    rating: 5,
    time: "8 hours ago",
    text: "Absolutely wonderful stay! Staff was amazing. Absolutely wonderful stay!",
    language: "English",
    sentiment: "Positive",
    status: "Answered",
    date: "2026-03-24",
    priority: "High",
    avatar: "https://i.pravatar.cc/150?img=5",
    culturalAi: false,
    urgent: false,
    timestamp: new Date("2026-03-24").getTime(),
  },
  {
    id: 3,
    name: "Klaus Weber",
    platform: "TripAdvisor",
    rating: 3,
    time: "12 hours ago",
    text: "Tolles Hotel, sehr freundliches Personal und saubere Zimmer.",
    language: "German",
    sentiment: "Neutral",
    status: "Draft",
    date: "2026-03-22",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/150?img=8",
    culturalAi: true,
    urgent: false,
    timestamp: new Date("2026-03-22").getTime(),
  },
  {
    id: 4,
    name: "Ananthu Prasad",
    platform: "TripAdvisor",
    rating: 3,
    time: "12 hours ago",
    text: "Hotel is good but service can be improved.",
    language: "English",
    sentiment: "Neutral",
    status: "Unanswered",
    date: "2026-02-01",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/150?img=3",
    culturalAi: true,
    urgent: true,
    timestamp: new Date("2026-02-01").getTime(),
  },
];

const Reviews = () => {
  const [sort, setSort] = useState("Newest");
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);
  const [showAIReply, setShowAIReply] = useState(false);
  // On mobile/tablet, show detail panel when a review is selected
  const [showDetail, setShowDetail] = useState(false);

  const updateFilter = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const clearAll = () => setFilters(defaultFilters);

  const filteredReviews = useMemo(() => {
    const today = new Date().getTime();
    let result = reviewsData.filter((review) => {
      const searchText = filters.search.toLowerCase();
      const matchesSearch = Object.values(review)
        .join(" ")
        .toLowerCase()
        .includes(searchText);
      const diffDays = (today - review.timestamp) / (1000 * 3600 * 24);
      let matchesDate = true;
      if (filters.date === "Last 7 days") matchesDate = diffDays <= 7;
      if (filters.date === "Last 30 days") matchesDate = diffDays <= 30;
      if (filters.date === "Last 1 year") matchesDate = diffDays <= 365;
      return (
        matchesSearch &&
        (filters.platform === "Platform" || review.platform === filters.platform) &&
        (filters.rating === null || review.rating === filters.rating) &&
        (filters.sentiment === "All" || review.sentiment === filters.sentiment) &&
        (filters.status === "All" || review.status === filters.status) &&
        (filters.language === "Language" || review.language === filters.language) &&
        matchesDate
      );
    });

    result.sort((a, b) => {
      if (sort === "Newest") return b.timestamp - a.timestamp;
      if (sort === "Positive Reviews") return b.rating - a.rating;
      if (sort === "Negative First") return a.rating - b.rating;
      if (sort === "Priority Reviews") {
        const order: Record<string, number> = { High: 1, Medium: 2, Low: 3 };
        return order[a.priority] - order[b.priority];
      }
      return 0;
    });

    if (sort === "Needs Response") {
      result = result.filter((r) => r.status === "Unanswered");
    }
    return result;
  }, [filters, sort]);

  useEffect(() => {
    setSelectedReviewIndex(0);
    setShowAIReply(false);
    setShowDetail(false);
  }, [filters, sort]);

  const selectedReview =
    filteredReviews.length > 0 ? filteredReviews[selectedReviewIndex] : null;

  return (
    <div className="lg:mt-[115px]">
      <ReviewsHeader />
      <PlatformCards />
      <FiltersBar filters={filters} updateFilter={updateFilter} clearAll={clearAll} />

      {/* DESKTOP: side by side | MOBILE/TABLET: stacked with back button */}
      <div className="block lg:grid lg:grid-cols-12 lg:gap-0">

        {/* ReviewList — hidden on mobile when detail is open */}
        <div className={`lg:col-span-5 ${showDetail ? "hidden lg:block" : "block"}`}>
          <ReviewList
            reviews={filteredReviews}
            selected={selectedReviewIndex}
            onSelect={(index: number) => {
              setSelectedReviewIndex(index);
              setShowAIReply(false);
              setShowDetail(true);
            }}
            sort={sort}
            setSort={setSort}
            setShowAIReply={setShowAIReply}
          />
        </div>

        {/* ReviewDetails — hidden on mobile when list is shown */}
        <div className={`lg:col-span-7 ${showDetail ? "block" : "hidden lg:block"}`}>
          {/* Back button — mobile/tablet only */}
          <button
            onClick={() => setShowDetail(false)}
            className="lg:hidden flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-3 transition-colors"
          >
            ← Back to Reviews
          </button>

          <ReviewDetails
            review={selectedReview}
            viewIndex={selectedReviewIndex}
            setViewIndex={(index: number) => {
              setSelectedReviewIndex(index);
              setShowAIReply(false);
            }}
            totalReviews={filteredReviews.length}
            showAIReply={showAIReply}
            setShowAIReply={setShowAIReply}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
