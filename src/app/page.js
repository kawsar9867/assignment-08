import Image from "next/image";
import BannerPage from "./components/banner/page";
import CoursePage from "./components/api/page";
import Navbar from "./(main)/navbar/page";

export default function Home() {
  return (
    <div>
      
      <BannerPage></BannerPage>
      <CoursePage></CoursePage>
    </div>
  );
}
