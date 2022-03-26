import { Backdrop } from "../Backdrop/Backdrop";
import "./NutritionModal.scss"


export const NutritionModal = (props: any) => {
    const classess = [];
    const classessCard = [];

    if (props.show) {
        classess.push(...["visibility-vi", "bg-dark", "modal"]);
        classessCard.push(...["container-fluid", "w-50", "card", "bg-dark", "child", "rounded"])
    } else {
        classess.push(...["visibility"]);
        classessCard.push(...["visibility"]);
    }

    return (
        <>
            <Backdrop show={props.show} handlerClick={() => null} />
            <div className={classessCard.join(' ')}>
                <div className="card-header text-center p-2 border-bottom align-middle d-flex ">
                    <h1 className="col-11">Info</h1>
                    <i className="bi bi-x-square col-1 pointer dg-secondary" typeof="button" onClick={() => props.handlerClick()}></i>
                </div>
                <div className="card-body">
                    <div className="card d-flex bg-dark" >
                        <div className="row row-cols-2 ">
                            <div className="col-6 border-end">
                                <div className="list-group bg-dark">
                                    <li className="text-center text-light list-group-item bg-dark">
                                        {props.data['name']}
                                    </li>
                                    {Object.keys(props.data).map((key, p) => {
                                        if (key === "name") return null
                                        else if (key === "url") return null
                                        else return <li className="fs-4 fst-italic list-group-item bg-dark text-secondary" key={p}>{key}: {props.data[key]}</li>
                                    })}
                                </div>
                            </div>
                            <div className="col-6 p-0 " id="bg-image">
                                <img src={props.data['url']} alt={props.data['name']} style={{ height: "100%", width: "97.5%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer aling-center d-flex justify-content-center" >
                    <button className="text-light btn btn-primary shadow p-1 mx-2 rounded" onClick={() => props.handlerClick()}>Aceptar</button>
                    <button className="text-light btn btn-danger shadow p-1 mx-2 rounded" onClick={() => props.handlerClick()}>Cancelar</button>
                </div>
            </div>
        </>
    );
};