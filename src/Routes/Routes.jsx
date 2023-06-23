import { createBrowserRouter } from "react-router-dom";
import Survey from "../components/Survey/Survey";
import Home from "../components/Home/Home";
import ThankYou from "../components/ThankYou/ThankYou";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'survey',
        element: <Survey />
    },
    {
        path: 'survey/thank-you',
        element: <ThankYou />,
    }
])

export default router;