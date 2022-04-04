import { useState } from "react";
import { GetNutritionHooks } from "../../custom-hooks/useNutrition";
import { API_NINJA_NUTRITION } from "../../util/config";
import { TableNutrition } from "../UI/Table/Nutrition/TableNutrition";
import "../../util/utilFonst.scss";
import "../../util/utilColor.scss";
import "./style-nutrition.scss";

export const Nutrition = () => {
    const [input, setInput] = useState<string>("");
    const { FetchNutrition } = GetNutritionHooks();
    const tableOptions = ["Name", "Calories", "Serving size g", "Fat total g", "Fat saturated g", "Protein g",
        "Sodium mg", "Potassium mg", "Cholesterol mg", "Carbohydrates total", "Fiber g", "Sugar g", "Edit", "Delete"];

    const handlreChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const handlerClick = () => {
        FetchNutrition({ url: API_NINJA_NUTRITION, complement: input });
        setInput("");
    };

    return (
        <div className="container-fluid">
            <h1 className="p-2 my-3 text-light text-center" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem" }} >Nutrition</h1>
            <hr />
            <div className="card w-50 m-auto shadow bg-body rounded-pill " >
                <div className="p-4 d-flex gray-9 rounded-pill ">
                    <input type="text" className="form-control gray-9 gray-text-1" value={input} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handlreChange} placeholder="Tomatoes" />
                    <button className="btn btn-primary mx-1" onClick={handlerClick}  >
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <div className="container-fluid my-4 mx-auto bg-dark text-white card shadow-lg" >
                <div className="card-header text-center border-bottom border-secondary" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem",fontWeight:"bold" }}>
                    Nutrition Table
                </div>
                <div className="card-body">
                    <TableNutrition cols={tableOptions} rowsPerPage={6} />
                </div>
            </div>
        </div>
    );
};