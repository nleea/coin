import { useEffect, useMemo, useState, } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import { useUser } from "../../City/City";

export const Map = () => {
    const [map, setMap] = useState<any>(null);
    const [lon,lat] = useUser();
    useEffect(() => {
        
        if (map)
            map.setView([lon,lat]);
    }, [lon,lat,map]);

    const showMap = useMemo(
        () => (
            <MapContainer center={[lon,lat]} zoom={13} dragging={true} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
        , [lon,lat])

    return (
        <>
            {showMap}
        </>
    )
};
