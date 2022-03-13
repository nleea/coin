import "../../../util/utilFonst.scss";

export const CardNutrition = (props: any) => {
    return (
        <div className="card mb-3 my-3 mx-2 col-6 shadow-sm text-dark" style={{ maxWidth: "540px", fontFamily: "Roboto Serif", fontSize: "2rem", fontWeight: "bold", fontStyle: "italic", textTransform: "capitalize" }}>
            <div className="row h-100">
                <div className="col-md-4 p-0 m-0">
                    <img src={props.url} className="img-fluid h-100" alt="..." />
                </div>
                <div className="col-md-8 p-0">
                    <h5 className="card-header">{props.name}</h5>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item row row-cols-2 d-flex text-start">
                                <h6 className="col-6">Calories: <small>{props.calories}</small></h6>
                                <h6 className="col-6">Proteina: <small>{props.protein_g}</small></h6>
                            </li>
                            <li className="list-group-item row row-cols-2 d-flex text-start">
                                <h6 className="col-6">Serving Size: <small>{props.serving_size_g}</small></h6>
                                <h6 className="col-6">Sodio: <small>{props.sodium_mg}</small></h6>
                            </li>
                            <li className="list-group-item row row-cols-2 d-flex text-start">
                                <h6 className="col-6">Grasa Total: <small>{props.fat_total_g}</small></h6>
                                <h6 className="col-6">Grasa Saturada: <small>{props.fat_saturated_g}</small></h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer p-1" style={{ fontSize: "1rem", fontStyle: "normal" }} >
                    <ul className="nav  card-header-pills d-flex justify-content-center p-0 nav-tabs">
                        <li className="nav-item p-0">
                            <a className="nav-link active" href="/">Active</a>
                        </li>
                        <li className="nav-item p-0">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item p-0">
                            <a className="nav-link disabled" href="/" >Disabled</a>
                        </li>
                    </ul></div>
            </div>
        </div>
    );
};