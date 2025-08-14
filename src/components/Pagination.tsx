// Pagination component: controls for navigating job pages
import React from "react";

interface PaginationProps {
  // Current page number
  page: number;
  // Whether there is a next page
  hasNext: boolean;
  // Handler for previous page
  onPrev: () => void;
  // Handler for next page
  onNext: () => void;
}

// Renders pagination controls
const Pagination: React.FC<PaginationProps> = ({
  page,
  hasNext,
  onPrev,
  onNext,
}) => (
  <div className="pagination">
    {/* Previous page button */}
    <button disabled={page === 1} onClick={onPrev}>
      Previous
    </button>
    {/* Current page indicator */}
    <span>Page {page}</span>
    {/* Next page button */}
    <button disabled={!hasNext} onClick={onNext}>
      Next
    </button>
  </div>
);

export default Pagination;
