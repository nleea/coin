import { ChangeEvent, useState, useEffect, useContext } from "react";
import { useCityHooks } from "../../custom-hooks/useCityHooks";
import { Outlet, NavLink } from "react-router-dom";
import { AppContext } from "../../context/context";
import "./city.scss"

export const City = () => {
    const [input, setCity] = useState("");
    const { fetchCity } = useCityHooks();
    const { state } = useContext(AppContext);
    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value);
    const FetchHandler = () => fetchCity(input);
    let a = document.querySelector(".content") as HTMLElement;
    useEffect(() => {
        if (state.city["latitude"] > 0 && a !== null) {
            a.style.height = "auto";
            a.style.width = "99vw";
        }
        return () => {
            if (a !== null) {
                a.style.height = "100vh";
                a.style.width = "100vw";
            }
        }
    }, [a?.clientHeight, a?.style, state, a]);

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
                                <NavLink className="btn btn-primary mx-1" to={`/city/${state.city['name']}`} onClick={FetchHandler} >
                                    <i className="bi bi-search"   ></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info" >
                    <div className="card w-50 mx-auto bg-light shadow border-1 border-dark">
                        <div className="card-header text-center background-color__i border-1 border-dark" style={{ fontFamily: "Roboto Serif", fontSize: "1.5rem" }}>
                            Information about {state.city['name']}
                        </div>
                        <div className="card-body shadow border-1">
                            <ul className="list-group list-group-flush bg-light">
                                <li className="list-group-item background-color__i d-flex justify-content-between">
                                    <div className="text-style" >Longitude</div>
                                    <div className="text-style-2" >{state.city["longitude"]}</div>
                                </li>
                                <li className="list-group-item background-color__i d-flex justify-content-between">
                                    <div className="text-style" >Latitude</div>
                                    <div className="text-style-2">{state.city["latitude"]}</div>
                                </li>
                                <li className="list-group-item background-color__i d-flex justify-content-between">
                                    <div className="text-style" >Country</div>
                                    <div className="text-style-2">{state.city["country"]}</div>
                                </li>
                                <li className="list-group-item background-color__i d-flex justify-content-between">
                                    <div className="text-style" >Population</div>
                                    <div className="text-style-2">{state.city["population"]}</div>
                                </li>
                                <li className="list-group-item background-color__i d-flex justify-content-between">
                                    <div className="text-style" >Is Capital</div>
                                    <div className="text-style-2">{`${state.city["is_capital"]}`}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {state.city.name ? <div className="map m-2 mx-5 card p-2 bg-dark shadow-sm" >
                    <div className="card-body frame">
                        {<Outlet />}
                    </div>
                </div> : null}
            </div>
        </div>

    )
};