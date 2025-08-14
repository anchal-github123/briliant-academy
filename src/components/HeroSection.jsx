import Lottie from "lottie-react";
import Button from "./Button";
export default function HeroSection({text1,text2,img,size}) {
  const lottieClass =
    size === "small"
      ? "w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96"
      : "w-full  h-auto";
return (
    <div className='grid place-items-center gap-5 lg:grid-cols-2 container'>
  <div className="mt-5 flex flex-col gap-5 lg:mt-0 " >
      <h1 className="text-3xl font-heading font-semibold lg:text-4xl ">
        {text1}<br />
        <span className="text-primary">{text2}</span> in The World
      </h1>
      <p className="text-para text-[1.2rem] ">
          Start your journey with Swedesh Academy today.
        </p>
       <div className="flex items-center justify-center gap-3 lg:justify-start">
          <Button name="Contact Us" styleType="outline"  link= "Contact"/>
         <a href="#Course_Section" className="bg-primary text-white hover:bg-white hover:text-primary px-5 py-2 rounded-full shadow-md border-3 inline-block">Explor More</a>
        </div>

      </div>
      {/* Hero lottie Image */}
       <div className="w-full flex justify-center items-center">
        <Lottie animationData={img} loop={true} className={lottieClass} />
      </div>
      </div>
  )
}
