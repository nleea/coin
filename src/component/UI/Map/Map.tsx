import { useEffect, useMemo, useState, useContext } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import { AppContext } from "../../../context/context";

export const Map = () => {
    const [map, setMap] = useState<any>(null);
    const { state } = useContext(AppContext);
    useEffect(() => {
        if (map)
            map.setView([state.city.latitude, state.city.longitude]);

    }, [state.city.latitude, state.city.longitude, map]);

    const showMap = useMemo(
        () => (
            <MapContainer center={[state.city.latitude, state.city.longitude]} zoom={13} dragging={true} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
        , [state.city.latitude, state.city.longitude])

    return (
        <>
            {showMap}
        </>
    )
};
