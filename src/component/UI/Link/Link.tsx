import { ReactChild, PropsWithChildren } from "react";
import { Link as R_LINK } from "react-router-dom";

interface propsI extends PropsWithChildren<any> {
    color: string;
    click?: () => void;
    children: ReactChild;
    link: string;
}

export const Link = (props: propsI) => {
    return <R_LINK className={"btn btn-dark mx-1 my-1 button-style-font ".concat(props.color)} onClick={props.click} to={`${props.link}`} >{props.children}</R_LINK>;
};