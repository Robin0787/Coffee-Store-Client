import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import EditCoffeeInfo from "../Pages/Edit-Coffee-Info/EditCoffeeInfo";
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
            },
            {
                path: "/edit-coffee-info/:id",
                element: <EditCoffeeInfo />,
                loader: ({params}) => fetch(`http://localhost:1000/coffee/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])


export default router;