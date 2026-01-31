import { Navbar } from "../../components/Navbar";
import { Space } from "../../components/Space";
import { Banner } from "./Banner";
import { Categories } from "./Categories";

import "./home.css";

export function Home() {
  return (
    <>
      <Navbar />
      <Space/>
      <Banner/>
      <Categories/>



    </>
  );
}
