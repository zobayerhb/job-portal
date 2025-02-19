import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatus = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
        status: e.target.value,
    };

    fetch(`https://jobsportal-ten.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      body: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  return (
    <div>
      <h3 className="text-3xl">
        Applications for this job list: {applications.length}
      </h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatus(e, app._id)}
                      defaultValue={app.status || "Change Status"}
                      className="select select-bordered select-xs w-full max-w-xs"
                    >
                      <option disabled>Change Status</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                    </select>
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

export default ViewApplications;
