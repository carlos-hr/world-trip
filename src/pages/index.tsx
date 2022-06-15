import type { NextPage } from "next";
import { Banner, Header } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
