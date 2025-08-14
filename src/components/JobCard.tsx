// JobCard component: displays a single job's details
import React from "react";

interface JobCardProps {
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

// Renders a card with job information
const JobCard: React.FC<{ job: JobCardProps }> = ({ job }) => {
  return (
    <div className="job-card">
      {/* Job title */}
      <h2>{job.jobTitle}</h2>
      {/* Job location */}
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      {/* Date found */}
      <p>
        <strong>Date Found:</strong>{" "}
        {new Date(job.dateFound).toLocaleDateString()}
      </p>
      {/* Job description */}
      <p>{job.description}</p>
    </div>
  );
};

export default JobCard;
