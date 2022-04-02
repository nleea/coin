import { NavLink } from "react-router-dom";
import "./navs-style.scss";

interface props {
    handlerClick: any;
}

export const Navs = (props: props) => {
    const defectClass = ["nav-link", "text-light", "hover-nav", "nav-item"];
    return (
        <>
            <ul className="nav row ">

                <NavLink className={({ isActive }) => isActive ? defectClass.join(" ").concat(" active") : defectClass.join(" ")} aria-current="page" to={"/nutrition"} onClick={props.handlerClick} >Nutrition</NavLink>


                <NavLink className={({ isActive }) => isActive ? defectClass.join(" ").concat(" active") : defectClass.join(" ")} to="/city" onClick={props.handlerClick}>City</NavLink>


                <NavLink className={({ isActive }) => isActive ? defectClass.join(" ").concat(" active") : defectClass.join(" ")} to="/" onClick={props.handlerClick}>Link</NavLink>


                <NavLink className={({ isActive }) => isActive ? defectClass.join(" ").concat(" active") : defectClass.join(" ")} to="/" onClick={props.handlerClick}>Disabled</NavLink>

            </ul>
        </>
    );
};