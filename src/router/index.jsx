import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AppComponent = lazy(() => import("../App"));

/** DASHBOARD */
const DashboardManiComponent = lazy(() => import("../component/dashboard/Dashboard-Main-Component"));
const DashboardPageMainComponent = lazy(() => import("../component/dashboard/Dashboard-Page-Main-Component/Dashboard-Page-Main-Component"));
const DashboardPageProductDetailComponent = lazy(() => import("../component/dashboard/Dashboard-Page-Product-Detail-Component/Dashboard-Page-Product-Detail-Component"));
const DashboardPageCartComponent = lazy(() => import("../component/dashboard/Dashboard-Page-Cart-Component/Dashboard-Page-Cart-Component"));

/** AUTH */
const AuthMainComponent = lazy(() => import("../component/auth/Auth-Main-Component"));
const AuthSigninComponent = lazy(() => import("../component/auth/Auth-Signin-Component/Auth-Signin-Component"));
const AuthSignUpComponent = lazy(() => import("../component/auth/Auth-Signup-Component/Auth-Signup-Component"));

const router = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<p>Loading...</p>}><AppComponent /></Suspense>,
        children: [
            {
                path: "",
                element: <Suspense fallback={<p>Loading...</p>}><DashboardManiComponent /></Suspense>,
                children: [
                    {
                        path: "",
                        loader: (() => import("../component/dashboard/Dashboard-Page-Main-Component/Dashboard-Page-Main-Component").then((m) => m.loader())),
                        element: <Suspense><DashboardPageMainComponent /></Suspense>
                    },
                    {
                        path: "product-detail/:product",
                        loader: (({request, params}) => import("../component/dashboard/Dashboard-Page-Product-Detail-Component/Dashboard-Page-Product-Detail-Component").then((m) => m.loader(request, params))),
                        element: <Suspense><DashboardPageProductDetailComponent /></Suspense>
                    },
                    {
                        path: "cart",
                        element: <Suspense><DashboardPageCartComponent /></Suspense>
                    }
                ]
            },
            {
                path: "auth",
                element: <Suspense fallback={<p>Loading...</p>}><AuthMainComponent /></Suspense>,
                children: [
                    {
                        path: "",
                        element: <Suspense fallback={<p>Loading...</p>}><AuthSigninComponent /></Suspense>
                    },
                    {
                        path: "signup",
                        element: <Suspense fallback={<p>Loading...</p>}><AuthSignUpComponent /></Suspense>
                    }
                ]
            }
        ]
    },
    {
        path: "/*",
        element: <div>Not found page</div>
    }
])

export default router;