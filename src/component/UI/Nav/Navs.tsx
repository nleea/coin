import { Link } from "react-router-dom";
import "./navs-style.scss";

interface props {
    handlerClick: any;
}

export const Navs = (props: props) => {
    return (
        <>
            <ul className="nav row ">
                <li className="nav-item hover-nav">
                    <Link className="nav-link active text-light" aria-current="page" to={"/nutrition"} onClick={props.handlerClick} >Active</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/" onClick={props.handlerClick}>Link</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/" onClick={props.handlerClick}>Link</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/" onClick={props.handlerClick}>Disabled</Link>
                </li>
            </ul>
        </>
    );
};