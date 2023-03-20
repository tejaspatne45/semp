import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
    const router = createBrowserRouter([
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/explore",
            element: <Explore />,
        },
        {
            path: "/",
            element: <Home />,
        },
    ]);
    return (
        <div className="text-center">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
