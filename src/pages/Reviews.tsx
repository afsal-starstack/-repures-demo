// import { useState, useEffect } from "react";
// import { ReviewsHeader } from "@/components/reviews/ReviewHeader";
// import { PlatformCards } from "@/components/reviews/platformCards";
// import { FiltersBar } from "@/components/reviews/FilterBar";
// import { ReviewList } from "@/components/reviews/ReviewList";
// import { ReviewDetails } from "@/components/reviews/ReviewDetails";

// const Reviews = () => {
//   const [sort, setSort] = useState("Newest");
//   const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);

//   const defaultFilters = {
//     platform: "Platform",
//     rating: null as number | null,
//     sentiment: "All",
//     status: "All",
//     language: "Language",
//     date: "Last 30 days",
//     search: "",
//   };

//   const [filters, setFilters] = useState(defaultFilters);

//   const updateFilter = (key: string, value: any) => {
//     setFilters((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const clearAll = () => {
//     setFilters(defaultFilters);
//   };

//   const reviews = [
//     {
//       id: 1,
//       name: "Ahmed Al Mansouri",
//       platform: "Booking.com",
//       rating: 2,
//       time: "5 hours ago",
//       text: "تجربة سيئة للغاية. استقبال سيء وتأخير في الخدمة. الغرفة لم تكن نظيفة والموظفون لم يكونوا متعاونين. لا أنصح بهذا الفندق على الإطلاق.",
//       language: "Arabic",
//       sentiment: "Negative",
//       status: "Unanswered",
//       date: "2026-03-25",
//       priority: "High",
//       avatar: "https://i.pravatar.cc/150?img=12",
//       culturalAi: true,
//       urgent: true,
//     },
//     {
//       id: 2,
//       name: "Sarah Mitchell",
//       platform: "Google",
//       rating: 5,
//       time: "8 hours ago",
//       text: "Absolutely wonderful stay! Staff was amazing.",
//       language: "English",
//       sentiment: "Positive",
//       status: "Answered",
//       date: "2026-03-15",
//       priority: "High",
//       avatar: "https://i.pravatar.cc/150?img=5",
//       culturalAi: true,
//       urgent: false,
//     },
//     {
//       id: 3,
//       name: "Klaus Weber",
//       platform: "TripAdvisor",
//       rating: 3,
//       time: "12 hours ago",
//       text: "Hotel is good but service can be improved.",
//       language: "German",
//       sentiment: "Neutral",
//       status: "Pending",
//       date: "2026-03-22",
//       priority: "Medium",
//       avatar: "https://i.pravatar.cc/150?img=8",
//       culturalAi: false,
//       urgent: false,
//     },
//     {
//       id: 4,
//       name: "Ananthu Prasad",
//       platform: "TripAdvisor",
//       rating: 3,
//       time: "12 hours ago",
//       text: "Hotel is good but service can be improved.",
//       language: "English",
//       sentiment: "Neutral",
//       status: "Pending",
//       date: "2026-02-01",
//       priority: "Medium",
//       avatar: "https://i.pravatar.cc/150?img=3",
//       culturalAi: true,
//       urgent: true,
//     },
//   ];
//   // FILTER + SORT
//   let filteredReviews = reviews
//     .filter((review) => {
//       const searchText = filters.search.toLowerCase();

//       const matchesSearch = Object.values(review)
//         .join(" ")
//         .toLowerCase()
//         .includes(searchText);

//       // Date filter
//       let matchesDate = true;
//       const today = new Date();
//       const reviewDate = new Date(review.date);
//       const diffDays =
//         (today.getTime() - reviewDate.getTime()) / (1000 * 3600 * 24);

//       if (filters.date === "Last 7 days") matchesDate = diffDays <= 7;
//       if (filters.date === "Last 30 days") matchesDate = diffDays <= 30;
//       if (filters.date === "Last 1 year") matchesDate = diffDays <= 365;

//       return (
//         matchesSearch &&
//         (filters.platform === "Platform" ||
//           review.platform === filters.platform) &&
//         (filters.rating === null || review.rating === filters.rating) &&
//         (filters.sentiment === "All" ||
//           review.sentiment === filters.sentiment) &&
//         (filters.status === "All" || review.status === filters.status) &&
//         (filters.language === "Language" ||
//           review.language === filters.language) &&
//         matchesDate
//       );
//     })
//     .sort((a, b) => {
//       if (sort === "Newest") {
//         return new Date(b.date).getTime() - new Date(a.date).getTime();
//       }
//       if (sort === "Positive Reviews") {
//         return b.rating - a.rating;
//       }

//       if (sort === "Negative First") {
//         return a.rating - b.rating;
//       }

//       if (sort === "Priority Reviews") {
//         const order: any = { High: 1, Medium: 2, Low: 3 };
//         return order[a.priority] - order[b.priority];
//       }

//       return 0;
//     });

//     if(sort === "Needs Response"){
//       filteredReviews = filteredReviews.filter((r) => r.status === "Unanswered");
//     }


//   // Reset selected review when filter or sort changes
//   useEffect(() => {
//     setSelectedReviewIndex(0);
//   }, [filters, sort]);

//   const selectedReview =
//     filteredReviews.length > 0 ? filteredReviews[selectedReviewIndex] : null;

//   return (
//     <div>
//       <ReviewsHeader />
//       <PlatformCards />

//       <FiltersBar
//         filters={filters}
//         updateFilter={updateFilter}
//         clearAll={clearAll}
//       />

//       <div className="grid grid-cols-12 gap-6">
//         <div className="col-span-5">
//           <ReviewList
//             reviews={filteredReviews}
//             selected={selectedReviewIndex}
//             onSelect={setSelectedReviewIndex}
//             sort={sort}
//             setSort={setSort}
//           />
//         </div>

//         <div className="col-span-7">
//           <div className="col-span-7">
//             <ReviewDetails
//               review={selectedReview}
//               viewIndex={selectedReviewIndex}
//               setViewIndex={setSelectedReviewIndex}
//               totalReviews={filteredReviews.length}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;


import { useState, useEffect, useMemo } from "react";
import { ReviewsHeader } from "@/components/reviews/ReviewHeader";
import { PlatformCards } from "@/components/reviews/platformCards";
import { FiltersBar } from "@/components/reviews/FilterBar";
import { ReviewList } from "@/components/reviews/ReviewList";
import { ReviewDetails } from "@/components/reviews/ReviewDetails";

// Default filters outside component to avoid re-creation
const defaultFilters = {
  platform: "Platform",
  rating: null as number | null,
  sentiment: "All",
  status: "All",
  language: "Language",
  date: "Last 30 days",
  search: "",
};

// Precomputed reviews with timestamps for faster date calculations
const reviewsData = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
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
    text: "Absolutely wonderful stay! Staff was amazing.",
    language: "English",
    sentiment: "Positive",
    status: "Answered",
    date: "2026-03-15",
    priority: "High",
    avatar: "https://i.pravatar.cc/150?img=5",
    culturalAi: true,
    urgent: false,
    timestamp: new Date("2026-03-15").getTime(),
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
    date: "2026-03-22",
    priority: "Medium",
    avatar: "https://i.pravatar.cc/150?img=8",
    culturalAi: false,
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
    status: "Pending",
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

  // Type-safe update filter
 const updateFilter = (key: string, value: any) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
};
  const clearAll = () => setFilters(defaultFilters);

  // Filter & sort logic
  const filteredReviews = useMemo(() => {
    const today = new Date().getTime();

    let result = reviewsData.filter((review) => {
      const searchText = filters.search.toLowerCase();
      const matchesSearch = Object.values(review)
        .join(" ")
        .toLowerCase()
        .includes(searchText);

      // Date filter
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

    // Sort
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

    // Special filter for "Needs Response"
    if (sort === "Needs Response") {
      result = result.filter((r) => r.status === "Unanswered");
    }

    return result;
  }, [filters, sort]);

  // Reset selected review when filters or sort changes
  useEffect(() => {
    setSelectedReviewIndex(0);
  }, [filters, sort]);

  const selectedReview =
    filteredReviews.length > 0 ? filteredReviews[selectedReviewIndex] : null;

  return (
    <div>
      <ReviewsHeader />
      <PlatformCards />

      <FiltersBar filters={filters} updateFilter={updateFilter} clearAll={clearAll} />

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
          <ReviewDetails
            review={selectedReview}
            viewIndex={selectedReviewIndex}
            setViewIndex={setSelectedReviewIndex}
            totalReviews={filteredReviews.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;