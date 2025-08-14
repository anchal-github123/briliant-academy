import {  scienceAndCommerce, softwareDevelopment, cbseAndOdishaBoard} from "../utils/constants";
import CourseCard from "./CourseCard";
import HeadingStyle from "./HeadingStyle";

export default function CoursecardSection({ type,heading }) {
  let coursetype = [];

  // Make sure type matches exactly what you send
  if (type === "CBSE") {
    coursetype = cbseAndOdishaBoard;
  } else if (type === "ScienceCommerce") {
    coursetype = scienceAndCommerce;
  } else if (type === "Software") {
    coursetype = softwareDevelopment;
    
  }
// Avoid rendering if no match found'

  
  return (
    <>
       <HeadingStyle text={heading}></HeadingStyle>
    <div className={`grid place-content-center gap-6 p-6 md:grid-cols-3 lg:grid-cols-4 `}>

      {coursetype.map((courseinfo, ind) => (
        <CourseCard key={ind} courseinfo={courseinfo} />
      ))}
    </div>
    </>
  );
}




