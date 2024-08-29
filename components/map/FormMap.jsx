"use client";

import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import SetLocationMarker from "./SetLocationMarker";

export default function FormMap({ position, setPosition }) {
    const animateRef = useRef(true);
    return (
        <MapContainer className="z-40 h-full w-full rounded-md" center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <SetLocationMarker position={position} setPosition={setPosition} animateRef={animateRef} />
        </MapContainer>
    );
}
