import { useEffect, useMemo, useState, } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

interface props {
    center: Array<number>
}

export const Map = (props: props) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        if (map)
            map.setView(props.center);
    }, [props.center]);

    const showMap = useMemo(
        () => (
            <MapContainer center={props.center as any} zoom={13} dragging={true} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
        , [])

    return (
        <>
            {showMap}
        </>
    )
};
