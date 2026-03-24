import { useState, useEffect } from "react";
import { ReviewsHeader } from "@/components/reviews/ReviewHeader";
import { PlatformCards } from "@/components/reviews/platformCards";
import { FiltersBar } from "@/components/reviews/FilterBar";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewDetails } from "@/components/reviews/ReviewDetails";

const Reviews = () => {
  const [sort, setSort] = useState("Newest");
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

  const defaultFilters = {
    platform: "Platform",
    rating: null as number | null,
    sentiment: "All",
    status: "All",
    language: "Language",
    date: "Last 30 days",
    search: "",
  };

  const [filters, setFilters] = useState(defaultFilters);

  const updateFilter = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearAll = () => {
    setFilters(defaultFilters);
  };

  // Review Data
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
      date: "2026-03-01",
      priority: "High",
      avatar: "https://picsum.photos/id/237/250",
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
      date: "2026-03-21",
      priority: "High",
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
      date: "2026-03-19",
      priority: "Medium",
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
      status: "Pending",
      date: "2026-03-22",
      priority: "Medium",
    },
  ];

  // FILTER + SORT
  const filteredReviews = reviews
    .filter((review) => {
      const searchText = filters.search.toLowerCase();

      const matchesSearch = Object.values(review)
        .join(" ")
        .toLowerCase()
        .includes(searchText);

      // Date filter
      let matchesDate = true;
      const today = new Date();
      const reviewDate = new Date(review.date);
      const diffDays =
        (today.getTime() - reviewDate.getTime()) / (1000 * 3600 * 24);

      if (filters.date === "Last 7 days") matchesDate = diffDays <= 7;
      if (filters.date === "Last 30 days") matchesDate = diffDays <= 30;
      if (filters.date === "Last 1 year") matchesDate = diffDays <= 365;

      return (
        matchesSearch &&
        (filters.platform === "Platform" ||
          review.platform === filters.platform) &&
        (filters.rating === null || review.rating === filters.rating) &&
        (filters.sentiment === "All" ||
          review.sentiment === filters.sentiment) &&
        (filters.status === "All" || review.status === filters.status) &&
        (filters.language === "Language" ||
          review.language === filters.language) &&
        matchesDate
      );
    })
    .sort((a, b) => {
      if (sort === "Newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }

      if (sort === "Oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

      if (sort === "Highest Rating") {
        return b.rating - a.rating;
      }

      if (sort === "Lowest Rating") {
        return a.rating - b.rating;
      }

      if (sort === "Priority") {
        const order: any = { High: 1, Medium: 2, Low: 3 };
        return order[a.priority] - order[b.priority];
      }

      return 0;
    });

  // Reset selected review when filter or sort changes
  useEffect(() => {
    setSelectedReviewIndex(0);
  }, [filters, sort]);

  console.log("selectedReviewIndex========", selectedReviewIndex);

  const selectedReview =
    filteredReviews.length > 0 ? filteredReviews[selectedReviewIndex] : null;

  return (
    <div className="p-6 space-y-6">
      <ReviewsHeader />
      <PlatformCards />

      <FiltersBar
        filters={filters}
        updateFilter={updateFilter}
        clearAll={clearAll}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <ReviewList
            reviews={filteredReviews}
            selected={selectedReviewIndex}
            onSelect={setSelectedReviewIndex}
            sort={sort}
            setSort={setSort}
          />
        </div>

        <div className="col-span-7">
          <div className="col-span-7">
            <ReviewDetails
              review={selectedReview}
              viewIndex={selectedReviewIndex}
              setViewIndex={setSelectedReviewIndex}
              totalReviews={filteredReviews.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
