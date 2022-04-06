import { useState } from "react";
import { GetNutritionHooks } from "../../custom-hooks/useNutrition";
import { API_NINJA_NUTRITION } from "../../util/config";
import { TableNutrition } from "../UI/Table/Nutrition/TableNutrition";
import { Search } from "../UI/Search/Search";
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
            <Search handlerClick={handlerClick} handlreChange={handlreChange} input={input} >
                <button className="btn btn-primary mx-1" onClick={handlerClick}  >
                    <i className="bi bi-search"></i>
                </button>
            </Search>
            <div className="container-fluid my-4 mx-auto bg-dark text-white card shadow-lg" style={{width:"90%"}}>
                <div className="card-header text-center border-bottom border-secondary" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem", fontWeight: "bold" }}>
                    Nutrition Table
                </div>
                <div className="card-body">
                    <TableNutrition cols={tableOptions} rowsPerPage={6} />
                </div>
            </div>
        </div>
    );
};