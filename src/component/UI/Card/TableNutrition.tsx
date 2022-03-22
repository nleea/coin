import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import { useTable } from "../../../custom-hooks/useTable";
import { TableFooter } from "../Card/TableFooter";
import "../../../util/utilFonst.scss";
import "../../../util/utilColor.scss";
import "./card-style.scss";

interface props {
    cols: Array<string>
    rowsPerPage: number
}

export const TableNutrition = (props: props) => {
    const { state } = useContext(AppContext);
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(state.data, page, props.rowsPerPage);

    return (
        <div className="card mb-3 my-3 mx-2 shadow shadow-lg rounded bg-dark border  border-2 border-dark" style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }}>
            <table className="card-body table table-hover text-light text-center mb-3">
                <thead className="text-light text-center" >
                    <tr style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }} >
                        {props.cols.map((col) => {
                            return <th scope="col ">{col}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        slice.map((v: any) => {
                            return (
                                <tr className="table-dark border-bottom">
                                    {Object.keys(v).map((keys: any) => {
                                        if (keys === "url") return;
                                        else return keys === "name" ? <th scope="row" className="text-secondary text-start"
                                            style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}>{v[keys]}</th> : <td>{v[keys]}</td>
                                    })}
                                    <td><i typeof="button" className="bi bi-pencil text-light btn btn-primary shadow p-1"></i></td>
                                    <td><i typeof="button" className="bi bi-trash3 text-light btn btn-danger shadow p-1"></i></td>
                                </tr>
                            )
                        })}
                </tbody>

            </table>
            <TableFooter page={page} range={range} setPage={setPage} slice={slice} />
        </div>
    );
};


