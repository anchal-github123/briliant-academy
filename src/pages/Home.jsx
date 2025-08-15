import HeroSection from "../components/heroSection";
import HeroLottieimg from "../assets/LottieIcon/STUDENT.json";
import Courses from "./Courses";
export default function Hero() {
  return (
      <section>
      {/*Hero Text Section============================================================================ */}
      <HeroSection text1="Your all in one  " text2=" learning platform" img={HeroLottieimg}></HeroSection>
      <Courses></Courses>
    </section>
   
  ) 
}