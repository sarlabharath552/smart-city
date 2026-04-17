import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_FREE_MAPBOX_TOKEN";

const MapView = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [78.4867, 17.3850],
      zoom: 12,
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default MapView;