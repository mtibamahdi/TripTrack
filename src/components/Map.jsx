import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([
    38.727881642324164, -9.140900099907554,
  ]);

  const mapLng = searchParams.get('lng') || -9.140900099907554;
  const mapLat = searchParams.get('lat') || 38.727881642324164;

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        // center={mapPosition}
        center={[mapLat, mapLng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat, mapLng]} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
