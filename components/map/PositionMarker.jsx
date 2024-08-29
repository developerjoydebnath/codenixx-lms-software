import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

export default function PositionMarker({ position }) {
    const map = useMap();

    map.setView(position);
    map.getZoom();

    const customIcon = L.icon({
        iconUrl: "/images/marker-icon-2x.png",
        shadowUrl: "/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    return (
        <Marker icon={customIcon} position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    );
}
