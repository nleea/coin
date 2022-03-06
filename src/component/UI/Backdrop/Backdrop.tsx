import "./backdrop.scss";

interface props {
    show:boolean
    handlerClick: any;
}

export const  Backdrop = (props:props)=>{
    return (
        <div className="backdrop" style={{visibility: props.show ? "visible":"hidden"}} onClick={props.handlerClick} ></div>
    );
};