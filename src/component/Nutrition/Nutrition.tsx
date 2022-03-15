import { useState, useContext } from "react";
import { GetNutritionHooks } from "../../custom-hooks/useNutrition";
import { API_NINJA_NUTRITION } from "../../util/config";
import { AppContext } from "../../context/context";
import { CardNutrition } from "../UI/Card/Nutrition";
import "../../util/utilFonst.scss";
import "../../util/utilColor.scss";
import "./style-nutrition.scss"

export const Nutrition = () => {
    const [input, setInput] = useState<any>();
    const { FetchNutrition } = GetNutritionHooks();
    const { state } = useContext(AppContext);
    const handlreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handlerClick = () => {
        FetchNutrition({ url: API_NINJA_NUTRITION, complement: input });
    };

    return (
        <div className="container-fluid">
            <h1 className="p-2 my-3 gray-9" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem" }} >Nutrition</h1>
            <hr />
            <div className="card w-50 m-auto shadow bg-body rounded-pill " >
                <div className="p-4 d-flex gray-9 rounded-pill ">
                    <input type="text" className="form-control gray-9 gray-text-1" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handlreChange} placeholder="Tomatoes"/>
                    <button className="btn btn-primary mx-1" onClick={handlerClick}>
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div className="container-fluid row row-cols-3 d-flex justify-content-center my-4 mx-auto" >
                {
                    state.data.map((i) => {
                        return <CardNutrition {...i} />
                    })
                }
            </div>
        </div>
    );
};