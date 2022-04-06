import { useContext, useState } from "react";
import { AppContext } from "../../../../context/context";
import { useTable } from "../../../../custom-hooks/useTable";
import { TableFooter } from "./TableFooter";
import { NutritionModal } from "../../Modal/NutritionModal";
import "../../../../util/utilFonst.scss";
import "./card-style.scss";

interface props {
    cols: Array<string>
    rowsPerPage: number
}

export const TableNutrition = (props: props) => {
    const { state } = useContext(AppContext);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const { slice, range } = useTable(state.data, page, props.rowsPerPage);

    const HandlerClick = (value = {}) => {
        setShow((p) => !p);
        setData(value);
    }

    return (
        <>
            <NutritionModal show={show} data={data} handlerClick={HandlerClick} />
            <div className="card mb-3 my-3 mx-2 shadow shadow-lg rounded bg-dark border  border-1 border-secondary" style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }}>
                <table className="card-body table table-hover text-light text-center mb-3 shadow">
                    <thead className="text-light text-center" >
                        <tr style={{ fontFamily: "Roboto Serif", fontSize: "1rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize", maxHeight: "500px" }} >
                            {props.cols.map((col,p) => {
                                return <th scope="col" key={p}>{col}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            slice.map((v: any,p) =>
                            (
                                <>
                                    <tr className="table-dark border-bottom align-self-center" key={p}>
                                        {Object.keys(v).map((keys: any,posicion) => {
                                            if (keys === "url") return null;
                                            else return keys === "name" ? <th scope="row" className="text-secondary text-start "
                                                style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }} key={posicion} >{v[keys]}</th> : <td key={keys} className="p-3 align-self-center">{v[keys]}</td>
                                        })}
                                        <td><i typeof="button" className="bi bi-pencil text-light btn btn-primary shadow p-1 button-style" key={p+100} onClick={() => HandlerClick(v)} ></i></td>
                                        <td><i typeof="button" className="bi bi-trash text-light btn btn-danger shadow p-1 button-style"  key={p+10} onClick={() => HandlerClick(v)}></i></td>
                                    </tr>
                                </>
                            )
                            )}
                    </tbody>
                </table>
                <TableFooter page={page} range={range} setPage={setPage} slice={slice} />
            </div>
        </>
    );
};
