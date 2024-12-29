import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { users } = useAuth();

  const handelJobApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: users.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // console.log(linkedIn, github, resume);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Apply now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelJobApplyForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                type="url"
                name="linkedIn"
                placeholder="LinkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="Github URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Resume URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
