import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/index';
// pages
import { Home, AboutUs, Products, Categories, Login, Register, Error } from '@pages/index';
import { c } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: '/about-us', element: <AboutUs /> },
            { path: '/categories', element: <Categories /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            {
                path: '/products/:prefix', element: <Products />, loader: ({params}) => {
                    if (!^[a-z]+$/i.test(params.prefix)) {  // if prefix is not a word

                    } 
                    console.log(params.prefix)
                    return true
                }
            },

        ]
    }
]);
export default function AppRouter() {
    return (
        <RouterProvider router={routes} />
    )
}
