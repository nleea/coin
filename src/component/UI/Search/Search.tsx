interface propsI {
    input: any;
    handlerClick: () => void;
    handlreChange: (e: any) => void;
    children?: any;
}

export const Search = (props: propsI) => {
    return (
        <div className="card w-50 m-auto shadow bg-body rounded-pill " >
            <div className="p-4 d-flex gray-9 rounded-pill ">
                <input type="text" className="form-control gray-9 gray-text-1" value={props.input} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={props.handlreChange} placeholder="Tomatoes" />
                {props.children}
            </div>
        </div>
    )
};