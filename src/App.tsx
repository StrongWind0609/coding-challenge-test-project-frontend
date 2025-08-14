// Main application file for Job Vacancy Search frontend
// Uses modular components for filters, job list, and pagination

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import "./index.css";
import "./App.css";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import JobsList from "./components/JobsList";

// Job type definition for type safety
interface Job {
  id: string;
  jobTitle: string;
  location: string;
  dateFound: string;
  description: string;
}

// Number of jobs per page
const PAGE_SIZE = 10;

// Main App component
const App = () => {
  // State for job data and filters
  const [jobs, setJobs] = useState<Job[]>([]); // List of jobs for current page
  const [search, setSearch] = useState(""); // Search text
  const [location, setLocation] = useState(""); // Location filter
  const [maxAgeDays, setMaxAgeDays] = useState<number | "">(""); // Max age filter
  const [page, setPage] = useState(1); // Current page number

  // Fetch jobs whenever filters or page changes
  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, [search, location, maxAgeDays, page]);

  // Fetch jobs from backend API with current filters and page
  async function fetchJobs() {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (location) params.append("location", location);
    if (maxAgeDays !== "") params.append("maxAgeDays", maxAgeDays.toString());
    params.append("page", page.toString());
    params.append("pageSize", PAGE_SIZE.toString());

    // Fetch jobs from backend
    const res = await fetch(
      `http://localhost:8000/api/jobs?${params.toString()}`
    );
    const data: Job[] = await res.json();
    setJobs(data);
  }

  // Handlers for filter and pagination changes
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value);
  const handleMaxAgeDaysChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxAgeDays(e.target.value === "" ? "" : Number(e.target.value));

  // Handle filter form submit: reset to page 1 and fetch jobs
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    fetchJobs();
  };

  // Pagination handlers
  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => p + 1);

  // Render main UI
  return (
    <div className="container">
      {/* App title */}
      <h1>Job Vacancy Search</h1>
      {/* Filters form */}
      <Filters
        search={search}
        location={location}
        maxAgeDays={maxAgeDays}
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
        onMaxAgeDaysChange={handleMaxAgeDaysChange}
        onSubmit={handleSubmit}
      />
      {/* List of jobs */}
      <JobsList jobs={jobs} />
      {/* Pagination controls */}
      <Pagination
        page={page}
        hasNext={jobs.length === PAGE_SIZE}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default App;
