import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SContactMap from './SContactMap';

export default function ContactMap() {
  return (
    <SContactMap>
      <MapContainer center={[48.8786204, 2.3779959]} zoom={15} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8786204, 2.3779959]}>
          <Popup>
            Hôpital Fondation A. de Rothschild - Département
            d&apos;ophtalmologie
            <br /> 29 rue Manin, 75019 Paris
          </Popup>
        </Marker>
        <Marker position={[48.8784941, 2.3757991]}>
          <Popup>
            Institut Laser Vision Noémie de Rothschild
            <br /> 44 Avenue Mathurin Moreau, 75019 Paris
          </Popup>
        </Marker>
      </MapContainer>
    </SContactMap>
  );
}
