import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Home from "../Pages/Home/Home";
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
    }
])


export default router;