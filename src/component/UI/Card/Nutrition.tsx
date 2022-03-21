import { useContext } from "react";
import { AppContext } from "../../../context/context";
import "../../../util/utilFonst.scss";
import "../../../util/utilColor.scss";
import "./card-style.scss";

export const CardNutrition = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="card mb-3 my-3 mx-2 shadow shadow-lg rounded bg-dark border  border-2 border-dark" style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }}>
            <table className="card-body table table-hover text-light text-center mb-3">
                <thead className="text-light text-center" >
                    <tr style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }} >
                        <th scope="col ">Name</th>
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
                        <th scope="col">Edit</th>
                        <th scope="col" >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.data.map((value, p) => {
                        if (p < 7)
                            return (
                                <tr className="table-dark border-bottom" >
                                    <th scope="row" className="text-secondary text-start" style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}>{value['name']}</th>
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
                                    <td><i typeof="button" className="bi bi-pencil text-light btn btn-primary shadow p-1"></i></td>
                                    <td><i typeof="button" className="bi bi-trash3 text-light btn btn-danger shadow p-1"></i></td>
                                </tr>
                            );

                    })}
                </tbody>
            </table>
            <nav aria-label="Page navigation" className="card-footer my-1" >
                <ul className="pagination justify-content-center m-0">
                    <li className="page-item">
                        <a className="page-link pa-color" href="/">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link pa-color" href="/" >1</a></li>
                    <li className="page-item"><a className="page-link pa-color" href="/">2</a></li>
                    <li className="page-item"><a className="page-link pa-color" href="/">3</a></li>
                    <li className="page-item">
                        <a className="page-link pa-color" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};