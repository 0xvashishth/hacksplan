import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Home from "./components/home/home"
import Sponsorships from "./components/sponsorships/sponsorships";
import Communities from "./components/communities/communities";
import Experiences from "./components/experiences/experiences";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sponsorships",
      element: <Sponsorships/>,
    },
    {
      path: "/communities",
      element: <Communities/>
    },
    {
      path: "/experiences",
      element: <Experiences/>
    }
  ]);
  
  
  export default router;
  