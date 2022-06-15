import type { NextPage } from "next";
import { Banner, Header, TravelTypes } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TravelTypes />
    </div>
  );
};

export default Home;
