import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Home/Home/Shared/Terms/Terms";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0' />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <Terms />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'career',
                element: <Career />
            }
        ]
    },
    {
        path: '/category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;