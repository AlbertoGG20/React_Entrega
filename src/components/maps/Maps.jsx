import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importar estilos de Leaflet
import './Maps.css';

function Maps() {
  return (
    <section className='maps-wrapper'>
      <div className='maps-text-wrapper'>
        <h2>Ubicación</h2>
        <p>Esta es la dirección donde empieza esta ruta.</p>
      </div>
      <MapContainer center={[27.996322, -15.421502]} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[27.996322, -15.421502]}>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Maps;
