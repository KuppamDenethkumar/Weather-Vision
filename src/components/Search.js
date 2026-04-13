import { useState } from "react";

export default function Search({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className="search-box">
      <input
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)}>🔍</button>
    </div>
  );
}