import Image from "next/image";
import BannerPage from "./components/banner/page";
import CoursePage from "./components/api/page";
import Navbar from "./(main)/navbar/page";
import PopularPage from "./components/popularCard/page";
import PriceingPage from "./components/priceing/page";
import LearningPage from "./components/learningTips/page";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <PopularPage></PopularPage>
      <CoursePage></CoursePage>
      <PriceingPage></PriceingPage>
      <LearningPage></LearningPage>
    </div>
  );
}
