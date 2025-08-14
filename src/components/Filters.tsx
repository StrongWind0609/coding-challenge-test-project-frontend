import React, { ChangeEvent, FormEvent } from "react";

// Props for the Filters component
interface FiltersProps {
  // Current search text
  search: string;
  // Current location filter
  location: string;
  // Current max age filter (number of days or empty string)
  maxAgeDays: number | "";
  // Handler for search input change
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // Handler for location input change
  onLocationChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // Handler for max age input change
  onMaxAgeDaysChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // Handler for form submit
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// Filters component: renders the search and filter form for jobs
const Filters: React.FC<FiltersProps> = ({
  search,
  location,
  maxAgeDays,
  onSearchChange,
  onLocationChange,
  onMaxAgeDaysChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="filters">
    {/* Search input field */}
    <input
      type="text"
      placeholder="Search jobs..."
      value={search}
      onChange={onSearchChange}
      aria-label="Search"
    />
    {/* Location input field */}
    <input
      type="text"
      placeholder="Location..."
      value={location}
      onChange={onLocationChange}
      aria-label="Location"
    />
    {/* Max vacancy age input field */}
    <input
      type="number"
      min={1}
      placeholder="Max vacancy age (days)"
      value={maxAgeDays}
      onChange={onMaxAgeDaysChange}
      aria-label="Max Vacancy Age"
    />
    {/* Submit button */}
    <button type="submit">Search</button>
  </form>
);

export default Filters;
