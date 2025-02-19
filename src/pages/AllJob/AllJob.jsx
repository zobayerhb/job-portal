import React, { useState } from "react";
import useJob from "../../hooks/useJob";
import JobCard from "../../components/JobCard";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [min, setMinSalary] = useState("");
  const [max, setMaxSalary] = useState("");
  const { loading, jobs } = useJob(sort, search, min, max);

  if (loading) {
    return <h2>Data loading....</h2>;
  }

//   console.log(sort);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">All Jobs</h1>
      {/* sort and search */}
      <div className="p-5 rounded flex gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort ? "sorted by sallery" : "Sort by sallery"}
        </button>
        <input
          className="rounded-xl px-5 w-full max-w-2xl"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by word..."
        />
        {/* search by min and max Salary */}
        <div className="space-y-2">
          <input
            className="rounded-xl px-5 w-full max-w-xs py-3"
            type="text"
            value={min}
            onChange={(e) => setMinSalary(e.target.value)}
            placeholder="Min Salary..."
          />
          <input
            className="rounded-xl px-5 w-full max-w-xs py-3"
            type="text"
            value={max}
            onChange={(e) => setMaxSalary(e.target.value)}
            placeholder="Max Salary..."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;
