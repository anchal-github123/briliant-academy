import HeroSection from "../components/heroSection";
import HeroLottieimg from "../assets/LottieIcon/STUDENT.json";
import { Suspense,lazy } from "react";
const Courses=lazy(() => import("./Courses"));

export default function Hero() {
  return (
      <section>
      {/*Hero Text Section============================================================================ */}
      <HeroSection text1="Your all in one  " text2=" learning platform" img={HeroLottieimg}></HeroSection>
      <Suspense fallback={<div>Loading....</div>}>
      <Courses/> </Suspense>
    </section>
   
  ) 
}