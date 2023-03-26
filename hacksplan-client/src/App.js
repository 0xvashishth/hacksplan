import "./App.css";
import NavBar from "./components/navbar/navbar";
// import Home from "./components/home/home";
import {
  RouterProvider,
} from "react-router-dom";
import router from './router.js'

function App() {
  return (
    <>
      <NavBar/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
