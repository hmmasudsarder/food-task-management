import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <SignIn/>
            },
        ]
    }
])

export default Router;