import { createBrowserRouter } from "react-router-dom";
import Survey from "../components/Survey/Survey";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'survey',
        element: <Survey />
    }
])

export default router;