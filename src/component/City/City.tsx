import { ChangeEvent, useState, useEffect, useContext } from "react";
import { useCityHooks } from "../../custom-hooks/useCityHooks";
import { Outlet, NavLink } from "react-router-dom";
import { AppContext } from "../../context/context";
import { List } from "../UI/List/List";
import { Search } from "../UI/Search/Search";
import "./city.scss";

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
                        <Search handlreChange={ChangeHandler} handlerClick={FetchHandler} input={input} >
                            <NavLink className="btn btn-primary mx-1" to={`/city/${state.city['name']}`} onClick={FetchHandler} >
                                <i className="bi bi-search"   ></i>
                            </NavLink>
                        </Search>
                    </div>
                </div>
                <div className="info rounded mx-2 p-2" >
                    <div className="card w-75 mx-auto bg-light border-1 border-dark">
                        <div className="card-header text-center background-color__i border-1 border-dark" style={{ fontFamily: "Roboto Serif", fontSize: "1.5rem" }}>
                            Information about {state.city['name']}
                        </div>
                        <div className="card-body border-1 row shadow">
                            <List property={[
                                "latitude",
                                "longitude",
                                "country",
                                "population",
                                "is_capital"
                            ]} ></List>
                            <List property={[
                                "humidity",
                                "wind_speed",
                                "temp",
                                "max_temp",
                                "cloud_pct"
                            ]} ></List>
                            <List property={[
                                "wind_degrees",
                                "sunset",
                                "min_temp",
                                "feels_like",
                                "sunrise"
                            ]} ></List>
                        </div>
                    </div>
                </div>
                {state.city.name ? <div className="map my-3 mx-5 card p-2 bg-dark shadow" >
                    <div className="card-body frame">
                        <Outlet />
                    </div>
                </div> : null}
            </div>
        </div>
    )
};