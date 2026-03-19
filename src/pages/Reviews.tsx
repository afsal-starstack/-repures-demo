import { useState, useEffect } from "react";
import { ReviewsHeader } from "../componets/reviews/ReviewHeader";
import { PlatformCards } from "../componets/reviews/platformCards";
import { FiltersBar } from "../componets/reviews/FilterBar";
import { ReviewList } from "../componets/reviews/ReviewList";
import { ReviewDetails } from "../componets/reviews/ReviewDetails";

const Reviews = () => {
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

  // ✅ FILTER STATES (GLOBAL)
  const [platform, setPlatform] = useState("All");
  const [rating, setRating] = useState<number | null>(null);
  const [sentiment, setSentiment] = useState("All");
  const [status, setStatus] = useState("All");
  const [language, setLanguage] = useState("Language");
  const [date, setDate] = useState("Last 30 days");

  // 👉 DATA
  const reviews = [
    {
      id: 1,
      name: "Ahmed Al Mansouri",
      platform: "Booking.com",
      rating: 2,
      time: "5 hours ago",
      text: "Very poor experience. Bad reception and delays in service.",
      language: "Arabic",
      sentiment: "Negative",
      status: "Unanswered",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      platform: "Google",
      rating: 5,
      time: "8 hours ago",
      text: "Absolutely wonderful stay! Staff was amazing.",
      language: "English",
      sentiment: "Positive",
      status: "Answered",
    },
    {
      id: 3,
      name: "Klaus Weber",
      platform: "TripAdvisor",
      rating: 3,
      time: "12 hours ago",
      text: "Hotel is good but service can be improved.",
      language: "German",
      sentiment: "Neutral",
      status: "Pending",
    },
  ];

  // ✅ FILTER LOGIC
  const filteredReviews = reviews.filter((r) => {
    if (platform !== "All" && r.platform !== platform) return false;
    if (rating !== null && r.rating !== rating) return false;
    if (sentiment !== "All" && r.sentiment !== sentiment) return false;
    if (status !== "All" && r.status !== status) return false;
    if (language !== "Language" && r.language !== language) return false;

    return true;
  });

  // ✅ RESET SELECTION WHEN FILTER CHANGES
  useEffect(() => {
    setSelectedReviewIndex(0);
  }, [platform, rating, sentiment, status, language, date]);

  const selectedReview =
    filteredReviews[selectedReviewIndex] || filteredReviews[0];

  return (
    <div className="p-6 space-y-6">
      <ReviewsHeader />
      <PlatformCards />

      <FiltersBar
        platform={platform}
        setPlatform={setPlatform}
        rating={rating}
        setRating={setRating}
        sentiment={sentiment}
        setSentiment={setSentiment}
        status={status}
        setStatus={setStatus}
        language={language}
        setLanguage={setLanguage}
        date={date}
        setDate={setDate}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <ReviewList
            reviews={filteredReviews}
            selected={selectedReviewIndex}
            onSelect={setSelectedReviewIndex}
          />
        </div>

        <div className="col-span-7">
          <ReviewDetails review={selectedReview} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;