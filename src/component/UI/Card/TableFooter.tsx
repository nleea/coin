import { useEffect, useState } from "react";


interface props {
    range: any;
    setPage: any, page: any, slice: any
}

const TableFooter = (props: props) => {

    useEffect(() => {
        if (props.slice.length < 1 && props.page !== 1) {
            props.setPage(props.page - 1);
        }
    }, [props.slice, props.page, props.setPage]);

    const PageHandler = (el: number) => {
        props.setPage(el);
    };


    return (
        <nav aria-label="Page navigation" className="card-footer my-1" >
            <ul className="pagination justify-content-center m-0">
                <li className="page-item">
                    <button className="page-link pa-color" type="button">Previous</button>
                </li>
                {props.range.map((el: any) => {
                    return <li className="page-item"><button className={["page-link", "bg-dark", "text-light"].join(' ')} type="button" onClick={() => PageHandler(el)}>{el}</button></li>
                })}
                <li className="page-item">
                    <button className="page-link pa-color" >Next</button>
                </li>
            </ul>
        </nav>
    );
};

export { TableFooter };