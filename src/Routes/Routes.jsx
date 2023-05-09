import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'add-coffee',
                element: <AddCoffee />
            },
            {
                path: 'update-coffee',
                element: <UpdateCoffee />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])


export default router;