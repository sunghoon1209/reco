import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../assets/components/Layout";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;