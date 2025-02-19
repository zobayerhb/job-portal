import Lottie from "lottie-react";
import lottieRegiAni from "../../assets/register.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

    // password validation
    if (password.length < 6) {
      setError("Password must be longer 6 characters");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least one uppercase letter and one number"
      );
      return;
    }
    // console.log(name, email, password);

    createUser(email, password).then((result) => {
      // console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={lottieRegiAni}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold ml-8 mt-4">Register now!</h1>
          <form onSubmit={handleRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          {error && <p className="ml-8 text-red-500 mb-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
