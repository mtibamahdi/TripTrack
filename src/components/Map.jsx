import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lng = searchParams.get('lng');
  const lat = searchParams.get('lat');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 20, lng: 33 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Map;
