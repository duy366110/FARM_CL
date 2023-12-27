import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AppComponent = lazy(() => import("../App"));

/** DASHBOARD */
const DashboardManiComponent = lazy(() => import("../component/dashboard/Dashboard-Main-Component"));


/** AUTH */
const AuthMainComponent = lazy(() => import("../component/auth/Auth-Main-Component"));

const router = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={<p>Loading...</p>}><AppComponent /></Suspense>,
        children: [
            {
                path: "",
                element: <Suspense fallback={<p>Loading...</p>}><DashboardManiComponent /></Suspense>
            },
            {
                path: "auth",
                element: <Suspense fallback={<p>Loading...</p>}><AuthMainComponent /></Suspense>
            }
        ]
    }
])

export default router;