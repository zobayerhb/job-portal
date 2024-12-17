import { easeInOut } from "motion";
import team1 from "../../assets/team1.jpg";
// import team2 from "../../assets/team2.jpg";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 ">
          <motion.img
            animate={{ y: [0, 35, 0] }}
            transition={{ duration: 10, delay: 1, repeat: Infinity }}
            src={team1}
            className="max-w-72 rounded-t-[40px] rounded-br-[40px] border-l-[8px] border-b-[8px] border-blue-700"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 1, repeat: Infinity }}
            src={team1}
            className="max-w-72 rounded-t-[40px] rounded-br-[40px] border-l-[8px] border-b-[8px] border-blue-700"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 1,
              ease: easeInOut,
            }}
            className="text-5xl font-bold"
          >
            Job Portal{" "}
            <motion.span
              transition={{ duration: 1, repeat: Infinity }}
              animate={{ color: ["#001bff", "#ffe400"] }}
            >
              News
            </motion.span>
            !
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
