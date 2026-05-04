import Image from "next/image";
import BannerPage from "./components/banner/page";
import AllCourses from "./components/AllCoureses";
import PopularPage from "./components/popularCard/page";
import Allinstractor from "./components/Allinstractor";
import PriceingPage from "./components/priceing/page";
import LearningPage from "./components/learningTips/page";
import CommentPage from "./components/comments/page";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <PopularPage />
      <AllCourses />
      <PriceingPage />
      <LearningPage />
      <CommentPage />
      <Allinstractor />
    </div>
  );
}
