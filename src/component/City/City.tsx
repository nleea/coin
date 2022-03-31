import { ChangeEvent, useState } from "react";
import { Map } from "../UI/Map/Map";
import { useCityHooks } from "../../custom-hooks/useCityHooks";
import "./city.scss"

export const City = () => {
    const [input, setCity] = useState("");
    const { state, fetchCity } = useCityHooks();

    const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value);

    const FetchHandler = () => fetchCity(input);

    const MapComponent = () => {
        return state !== undefined && state !== null ? <Map center={[state["latitude"], state["longitude"]]} /> : null
    };

    return (
        <div className="container-fluid" >
            <div className="grid-content__city">
                <div className="search" >
                    <div className="card my-5 w-75 mx-auto">
                        <div className="card-header bg-dark text-light text-center" style={{ fontFamily: "Roboto Serif", fontSize: "2.5rem" }}>
                            Find city
                        </div>
                        <div className="card-body bg-dark p-3">
                            <div className="card m-auto shadow bg-body rounded-pill " >
                                <div className="p-4 d-flex gray-9 rounded-pill ">
                                    <input type="text" className="form-control gray-9 gray-text-1" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ChangeHandler} placeholder="London" />
                                    <button className="btn btn-primary mx-1" onClick={FetchHandler} value={input} >
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map m-3" >
                    {MapComponent()}
                </div>
            </div>
        </div>

    )
};