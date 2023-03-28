import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { MainPage } from "../components/Pages/MainPage/MainPage.jsx";
import { ProductPage } from "../components/Pages/ProductPage/ProductPage.jsx";
import { Cart } from "../components/Pages/Cart/Cart.jsx";
import { FavouritePage } from "../components/Pages/FouritePage/FavouritePage.jsx";
const LoginPage = React.lazy(() => import("../components/Pages/LoginPage/LoginPage.jsx"))
const AuthPage = React.lazy(() => import("../components/Pages/AuthPage/AuthPage.jsx"));
const AdminPage = React.lazy(() => import("../components/Pages/AdminPage/AdminPage.jsx"));



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
                element:
                    <Suspense fallback={<div>Loading</div>}>
                        <AdminPage />
                    </Suspense>
            }
        ]
    },
    {
        path: '/login',
        element:
            <Suspense fallback={<div>Loading</div>}>
                <LoginPage />
            </Suspense>
    },
    {
        path: '/auth',
        element:
            <Suspense fallback={<div>Loading</div>}>
                <AuthPage />
            </Suspense>
    }
]);