import { Routes, Route } from "react-router-dom";
import { Nutrition } from "../../Nutrition/Nutrition";

export const MainRoutes = () => { 
    return (
        <>
            <Routes >
                <Route path="/nutrition" element={<Nutrition/>} ></Route>
            </Routes>
        </>
    );
};