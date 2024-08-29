"use client";

import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import PositionMarker from "./PositionMarker";

export default function Map({ positionList, setIsInOffice }) {
    const [myPosition, setMyPosition] = useState([23.80280888002511, 90.41350570543808]);
    // const [officePosition, setOfficePosition] = useState([23.791439924943163, 90.4136576682079]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) =>
    //         setMyPosition([position.coords.latitude, position.coords.longitude])
    //     );
    // }, []);

    return (
        <MapContainer className="z-40 h-full w-full rounded-md" center={myPosition} zoom={20} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {positionList.length > 0 && positionList.map((pos: any) => <MultipleMarker userInfo={pos} />)} */}
            {/* <SingleMarker position={myPosition} setPosition={setMyPosition} /> */}
            <PositionMarker position={myPosition} />
            {/* <Circle center={officePosition} pathOptions={{ fillColor: "blue" }} radius={30} /> */}
        </MapContainer>
    );
}
