import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./router.css";


export const MainRouter = () => {
    const [canvaClass, setCanvaClass] = useState(["offcanvas", "offcanvas-start", "bg-dark"]);
    const [button, setButton] = useState(false);

    const ShowOrHideCanvaHandler = () => {
        const classes = ["offcanvas", "offcanvas-start", "bg-dark"];
        if (canvaClass.includes('show')) {
            setCanvaClass(classes);
            setButton(false);
        } else {
            classes.push(...['canvas-visivility', 'show']);
            setButton(true);
            setCanvaClass(classes);
        }
    };

    return (
        <Router>
            <>
                <div className="container-fluid">
                    <button onClick={ShowOrHideCanvaHandler} style={{ display: button ? 'none' : 'block' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg></span>
                    </button>
                </div>
                <div className={canvaClass.join(' ')} tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" role="dialog" aria-modal="true">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={ShowOrHideCanvaHandler}></button>
                    </div>
                    <div className="offcanvas-body ">
                        <nav className="navbar navbar-dark bg-dark">
                            <div className="container-fluid">
                                <h1>dddd</h1>
                                <h2>ddddddd</h2>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        </Router>
    );
};