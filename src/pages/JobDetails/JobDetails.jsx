import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, hr_name, hr_email, responsibilities, company } = useLoaderData();

  return (
    <div className="">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <div>
            <span>Company Name: {company}</span>
            <h2 className="card-title">Hr Name: {hr_name}</h2>
            <span>Hr Email: {hr_email}</span>
            <div className="mt-3">
              <span className="block text-xl text-white font-semibold">
                Responsibilities:
              </span>
              <ul className="flex flex-col gap-1 ml-3">
                {responsibilities.map((work, index) => (
                  <li key={index} className="text-gray-300">
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/jobApply/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
