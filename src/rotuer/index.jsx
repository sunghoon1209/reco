import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Join from "../pages/Join";
import EditInfo from "../pages/EditInfo";

import Layout from "../assets/components/Layout";

const AppRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />                
                    <Route path="/login" element={<Login />} />               
                    <Route path="/edit_info" element={<EditInfo />} />               

                    <Route path="/join" element={<Join />} />                


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;