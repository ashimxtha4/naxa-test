import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet/Popup";
import { LatLngExpression } from "leaflet";
import * as L from "leaflet";

export default function Map() {
  // useEffect(() => {
  //   // Check if we are on the client-side before accessing the window object
  //   if (typeof window !== "undefined") {
  //     // Access the window object safely here
  //     const position: LatLngExpression = [51.505, -0.09]; // Initial map coordinates

  //     const map = L.map("map").setView(position, 13);

  //     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //       attribution:
  //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //     }).addTo(map);

  //     L.marker(position).addTo(map);
  //   }
  // }, []);
  return (
    <MapContainer
      center={[27.700769, 85.30014]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
