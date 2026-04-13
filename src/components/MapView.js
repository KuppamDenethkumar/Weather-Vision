import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ FIX marker icon issue in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Set default marker icon
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView({ coords }) {
  useEffect(() => {
    if (!coords) return;

    // Remove previous map if exists
    let map = L.map("map").setView([coords.lat, coords.lon], 10);

    // Add map tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: ""
    }).addTo(map);

    // Add marker
    L.marker([coords.lat, coords.lon]).addTo(map);

    // Cleanup (important in React)
    return () => map.remove();
  }, [coords]);

  return (
    <div
      id="map"
      style={{
        height: "200px",
        marginTop: "20px",
        borderRadius: "15px"
      }}
    ></div>
  );
}