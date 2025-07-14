import { createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "../layout/MainLayout";
// pages...
import Home from "../pages/Home";
import About from "../pages/About";
import Notification from "../pages/Notification";
import Errorpage from "../pages/Errorpage";
const routes=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[{
            index:true,
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/Notification",
            element:<Notification/>
        },
        
    ]
      
    },
    {
            path:"*",
            element:<Errorpage/>
    }

])
export default function Approutes() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
