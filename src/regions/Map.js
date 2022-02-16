import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import MapClick from "./new/MapClick";

const Map = ({cor, setCor}) => {
    const position = [51.505, -0.09]

    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <MapClick cor={cor} setCor={setCor} />
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        <Polygon positions={cor} />
        </MapContainer>
    )
}


export default Map