import { Link } from "react-router-dom";
import "./navs-style.scss";

export const Navs = () => {
    return (
        <>
            <ul className="nav row ">
                <li className="nav-item hover-nav">
                    <Link className="nav-link active text-light" aria-current="page" to={"/nutrition"}>Active</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/">Link</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/">Link</Link>
                </li>
                <li className="nav-item hover-nav">
                    <Link className="nav-link text-light" to="/">Disabled</Link>
                </li>
            </ul>
        </>
    );
};