import { useContext } from "react";
import { AppContext } from "../../../context/context";
import "../../../util/utilFonst.scss";
import "../../../util/utilColor.scss";
import "./card-style.scss";

export const CardNutrition = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="card mb-3 my-3 mx-2 shadow shadow-light rounded bg-body card-color border" style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize" }}>
            <table className="table table-hover text-light m-0">
                <thead className="text-dark" >
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Calories</th>
                        <th scope="col">Serving size g</th>
                        <th scope="col">Fat total g</th>
                        <th scope="col">Fat saturated g</th>
                        <th scope="col">Protein g</th>
                        <th scope="col">Sodium mg</th>
                        <th scope="col">Potassium mg</th>
                        <th scope="col">Cholesterol mg</th>
                        <th scope="col">Carbohydrates total</th>
                        <th scope="col">Fiber g</th>
                        <th scope="col">Sugar g</th>
                    </tr>
                </thead>
                <tbody>
                    {state.data.map((value) => {
                        return (
                            <tr className="table-dark" >
                                <th scope="row" className="text-secondary text-start" style={{ fontFamily: "Oswald, sans-serif",fontSize:"1.3rem" }}>{value['name']}</th>
                                <td>{value['calories']}</td>
                                <td>{value['serving_size_g']}</td>
                                <td>{value['fat_total_g']}</td>
                                <td>{value['fat_saturated_g']}</td>
                                <td>{value['protein_g']}</td>
                                <td>{value['sodium_mg']}</td>
                                <td>{value['potassium_mg']}</td>
                                <td>{value['cholesterol_mg']}</td>
                                <td>{value['carbohydrates_total_g']}</td>
                                <td>{value['fiber_g']}</td>
                                <td>{value['sugar_g']}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};