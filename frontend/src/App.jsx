import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
// import './App.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx"
import Navbar from "./component/Navbar.jsx";
import NavbarLogin from "./component/NavbarLogin.jsx";
import Homepage from "./pages/Homepage.jsx";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
const LayoutLogin = () => {
  return (
    <>
      <NavbarLogin />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path:"/home",
    element:<LayoutLogin/>,
    children:[
      {
        path:"/home",
        element:<Homepage/>
      }
    ]
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },

]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App
