import { useContext } from "react";
import { AppContext } from "../../../context/context";

interface props {
    property: Array<any>;
}

export const List = (props: props) => {
    const { state } = useContext(AppContext);
    return (
        <ul className="list-group list-group-flush bg-light col-4" >
            {
                props.property.map((p) =>
                (<li className="list-group-item background-color__i d-flex justify-content-between" >
                    <div className="text-style text-capitalize" >{(p as string).replace("_", " ")}</div>
                    <div className="text-style-2" >{`${(state.city as any)[p]}`}</div>
                </li>)
                )
            }
        </ul>
    );
};