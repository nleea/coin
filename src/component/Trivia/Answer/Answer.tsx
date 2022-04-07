import { useContext } from "react";
import { OutletContext } from "../Trivia";
import { AppContext } from "../../../context/context";
import "./Answer.scss";

export const Answer = () => {
    const { state } = useContext(AppContext);
    const { refresh } = OutletContext();
    let render = <div></div>
    if (state.trivia && state.trivia.question !== " ") {
        render = (
            <div className="card rounded-0 w-75  mx-auto my-5 shadow bg-color bg-body-1">
                <div className="card-header text-center">
                    <h1 className="text-light">Trivia Topic {state.trivia.category}</h1>
                </div>
                <div className="card-body ps-2 pe-2 pt-3 row">
                    <div className="card bg-dark text-light p-2 text-center shadow col-12">
                        <h2>{state.trivia.question}</h2>
                    </div>
                    <div className="col-12 row mt-4">
                        <div className="col-12 d-flex justify-content-center"><button className="btn btn-success m-2 w-25" >{state.trivia.answer}</button></div>
                        <div className="col-12 d-flex justify-content-center"><button className="btn btn-primary m-2 w-25">d</button></div>
                        <div className="col-12 d-flex justify-content-center"><button className="btn btn-warning m-2 w-25">d</button></div>
                        <div className="col-12 d-flex justify-content-center"><button className="btn btn-dark m-2 w-25" onClick={refresh} ><i className="bi bi-arrow-clockwise"></i></button></div>

                    </div>
                </div>
            </div>
        );
    }
    return <>{render}</>;
};