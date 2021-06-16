import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

export default function Map() {
  return (
    <>
      <h1>Hier geht es zum nächsten Impfzentrum</h1>
      <MapWrapper id="mapid">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </>
  );
}

const MapWrapper = styled.div`
  .leaflet-container {
    height: 11.25rem;
    width: 600px;
  }
`;
