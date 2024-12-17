import { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";

const SocialLogin = () => {
  const { socialLogin } = useContext(AuthContext);

  const handleSocialLogin = () => {
    socialLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button onClick={handleSocialLogin} className="btn">
        SignIn with google
      </button>
    </div>
  );
};

export default SocialLogin;
