import { ChangeEvent, useState } from "react";
import { useCityHooks } from "../../custom-hooks/useCityHooks";
import { Outlet, NavLink, useOutletContext, useLocation } from "react-router-dom";
import "./city.scss"

export function useUser() {
    return useOutletContext<any>();
}

export const City = () => {
    const [input, setCity] = useState("");
    const { state, fetchCity } = useCityHooks();
    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value);

    const FetchHandler = () => fetchCity(input);

    return (
        <div className="container-fluid my-3">
            <div className=" text-light text-center" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem" }}>
                Find city
            </div>
            <div className="grid-content__city">
                <div className="search" >
                    <div className="p-3 my-5 w-75 mx-auto border-0">
                        <div className="card w-75 m-auto shadow bg-body rounded-pill" >
                            <div className="p-4 d-flex gray-9 rounded-pill ">
                                <input type="text" className="form-control gray-9 gray-text-1" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ChangeHandler} placeholder="London" />
                                <NavLink className="btn btn-primary mx-1" to={`/city/${state['name']}`} onClick={FetchHandler} >
                                    <i className="bi bi-search"   ></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                {state.name ? <div className="map m-3 card p-2 bg-dark shadow-sm" >
                    <div className="card-body">
                        {<Outlet context={[state["latitude"], state["longitude"]]} />}
                    </div>
                </div> : null}
            </div>
        </div>

    )
};