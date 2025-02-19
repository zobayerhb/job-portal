import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { users } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://jobsportal-ten.vercel.app/jobs?email=${users?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [users?.email]);

  return (
    <div>
      <h2 className="text-3xl">My posted jobs: {jobs.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Application Deadline</th>
                <th>View Applications</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>
                    <Link to={`/viewApplications/${job._id}`}>
                      <button className="btn btn-link">
                        View Applications
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
