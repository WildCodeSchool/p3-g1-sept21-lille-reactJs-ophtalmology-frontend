import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ContactMap() {
  return (
    <div className="testMap">
      <MapContainer center={[48.8786204, 2.3779959]} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8786204, 2.3779959]}>
          <Popup>
            Cabinet du Dr.Jeannerot <br /> 29 rue Manin, 75019 Paris
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
