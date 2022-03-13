import { useState } from "react";
import { Backdrop } from "../UI/Backdrop/Backdrop";
import { Navs } from "../UI/Nav/Navs";
import "./router.css";


export const Navbar = () => {
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
        <>
            <Backdrop show={button} handlerClick={ShowOrHideCanvaHandler} />
            <div className="container-fluid my-1 ">
                <button onClick={ShowOrHideCanvaHandler} style={{ visibility: button ? 'hidden' : 'visible' }} className="navbar-toggler border border-2 p-1 float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                </button>
            </div>
            <div className={canvaClass.join(' ')} tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" role="dialog" aria-modal="true">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-light" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close" onClick={ShowOrHideCanvaHandler}></button>
                </div>
                <div className="offcanvas-body text-start">
                    <nav className="navbar navbar-dark my-3">
                        <div className="container-fluid">
                            <Navs handlerClick={ShowOrHideCanvaHandler} />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};