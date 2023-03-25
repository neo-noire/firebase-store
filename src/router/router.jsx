import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../components/Pages/LoginPage/LoginPage.jsx";
import { Layout } from "../components/Layout/Layout";
import { MainPage } from "../components/Pages/MainPage/MainPage.jsx";
import { ProductPage } from "../components/Pages/ProductPage/ProductPage.jsx";
import { AuthPage } from "../components/Pages/AuthPage/AuthPage.jsx";
import { Cart } from "../components/Pages/Cart/Cart.jsx";
import { FavouritePage } from "../components/Pages/FouritePage/FavouritePage.jsx";
import { AdminPage } from "../components/Pages/AdminPage/AdminPage.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/product/:id',
                element: <ProductPage />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/favourite',
                element: <FavouritePage />
            },
            {
                path: '/admin',
                element: <AdminPage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/auth',
        element: <AuthPage />
    }
]);