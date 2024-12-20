import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    company_logo,
    salaryRange,
    description,
    requirements,
    category,
  } = job || {};
  return (
    <div className="flex">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="flex gap-1 ">
          <figure>
            <img className="w-[50px]" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="flex items-center gap-1">
              <CiLocationOn /> {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
          <div className="flex flex-wrap gap-2">
            {requirements.map((requ, index) => (
              <button
                key={index}
                className="border-[1px] border-blue-400 rounded-md px-5 py-2"
              >
                {requ}
              </button>
            ))}
          </div>
          <div className="card-actions justify-between items-center mt-auto">
            <div>
              <p>
                $ {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </p>
            </div>
            <Link to={`/jobs/${_id}`}>
              <button className="border-[1px] py-3 px-6 rounded-md font-semibold">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
