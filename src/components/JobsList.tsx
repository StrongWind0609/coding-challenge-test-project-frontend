// JobsList component: displays a list of jobs using JobCard
import React from "react";
import JobCard from "./JobCard";

interface Job {
  // Job ID
  id: string;
  // Job title
  jobTitle: string;
  // Job location
  location: string;
  // Date the job was found
  dateFound: string;
  // Job description
  description: string;
}

// Renders a list of jobs or a message if none are found
const JobsList: React.FC<{ jobs: Job[] }> = ({ jobs }) => (
  <div className="jobs-list">
    {jobs.length === 0 ? (
      // No jobs found message
      <p>No jobs found.</p>
    ) : (
      // Render each job using JobCard
      jobs.map((job) => <JobCard key={job.id} job={job} />)
    )}
  </div>
);

export default JobsList;
