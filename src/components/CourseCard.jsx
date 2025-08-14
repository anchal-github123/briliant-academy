import { NavLink } from "react-router-dom";
import Button from "./Button"
export default function CourseCard({courseinfo}) {
 return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-10 flex flex-col gap-3 ">
      {/* Badge */}
      <div>
        <span className="bg-[#e0f2fe] text-[#0369a1] text-xs font-semibold px-3 py-1 rounded-md shadow">
        COURSE
      </span>
      </div>
      
 {/* Course Info */}
      <h3 className="text-xl font-bold mt-4 mb-2">
    {courseinfo?.name}
      </h3>
      {courseinfo?.price && (
        <p className="text-gray-700 font-bold mt-1">Price: {courseinfo.price}</p>
      )}

      {/* Button */}
      <div className="w-full flex items-center justify-center">
      
        <NavLink to="/Contact" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-all">
          Registration
        </NavLink>
      </div>
    </div>
  );
}

  
