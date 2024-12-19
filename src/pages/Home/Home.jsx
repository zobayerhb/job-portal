import SectionHeader from "../../components/SectionHeader";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-10 md:mt-20">
        <SectionHeader></SectionHeader>
      </div>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
