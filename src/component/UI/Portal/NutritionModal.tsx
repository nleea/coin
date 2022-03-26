import { useEffect} from "react";
import ReactDOM from "react-dom";

export const NutritionModal = (props: any) => {
    const div = document.createElement("div");

    useEffect(() => {
        document.querySelector('#modal-root')?.appendChild(div)
    });

    return (
        ReactDOM.createPortal(props.children, div)
    );
};
