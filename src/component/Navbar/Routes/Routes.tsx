import { Routes, Route } from "react-router-dom";
import { Nutrition } from "../../Nutrition/Nutrition";
import { City } from "../../City/City";

export const MainRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/nutrition" element={<Nutrition />} caseSensitive={true}></Route>
                <Route path="/city" element={<City />} ></Route>
            </Routes>
        </>
    );
};