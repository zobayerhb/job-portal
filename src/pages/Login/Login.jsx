import Lottie from "lottie-react";
import lottieRegiAni from "../../assets/register.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location?.state || "/";

    setError("");

    userLogin(email, password)
      .then((result) => {
        console.log("success", result.user);
        const user = { email: email };
        axios
          .post(`http://localhost:5000/jwt`, user, {withCredentials: true})
          .then((res) => console.log(res.data))
          .catch((error) => {
            console.log(error.message);
          });
        // navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={lottieRegiAni}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold ml-8 mt-4">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="ml-8 text-red-500 mb-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
