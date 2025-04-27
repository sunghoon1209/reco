import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../assets/components/Layout";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />                
                    <Route path="/login" element={<Login />} />                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;