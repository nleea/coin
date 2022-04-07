import { Routes, Route } from "react-router-dom";
import { Nutrition } from "../../Nutrition/Nutrition";
import { City } from "../../City/City";
import { Map } from "../../UI/Map/Map";
import { Trivia } from "../../Trivia/Trivia";
import { Answer } from "../../Trivia/Answer/Answer";

export const MainRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/nutrition" element={<Nutrition />} caseSensitive={true} ></Route>
                <Route path="/city" element={<City />} >
                    <Route path="/city/:id" element={<Map />} />
                </Route>
                <Route path="/trivia" element={<Trivia />}>
                    <Route path="/trivia/:id" element={<Answer />}></Route>
                </Route>
            </Routes>
        </>
    );
};