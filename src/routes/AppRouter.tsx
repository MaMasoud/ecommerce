import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@layouts/index';
// pages
import { Home, AboutUs, Products, Categories, Login, Register, Error } from '@pages/index';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                path: '/products/:prefix', element: <Products />, loader: ({ params }) => {
                    if (typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)) {  // if prefix is not a word
                        throw new Response('Bad Request',
                            {
                                statusText: 'Category not found',
                                status: 400
                            });
                    }
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
