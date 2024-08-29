import { Marker, Popup, useMapEvents } from "react-leaflet";

const SetLocationMarker = ({ position, setPosition, animateRef }) => {
    const map = useMapEvents({
        click(e) {
            map.locate();
            setPosition([e?.latlng?.lat, e?.latlng?.lng]);
            map.setView(e.latlng, map.getZoom(), {
                animate: animateRef.current || false,
            });
        },
    });

    map.setView(position, map.getZoom(), {
        animate: animateRef.current || false,
    });

    return (
        <div>
            <Marker
                position={position}
                icon={
                    new L.icon({
                        iconUrl: "/images/marker-icon-2x.png",
                        shadowUrl: "/images/marker-shadow.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41],
                    })
                }
            >
                <Popup>
                    <div>
                        <p>Lat: {position[0]}</p>
                        <p>Long: {position[1]}</p>
                    </div>
                </Popup>
            </Marker>
        </div>
    );
};

export default SetLocationMarker;
