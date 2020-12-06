import { Map as PMap, Marker } from "pigeon-maps";
import React from "react";

const MAPTILER_ACCESS_TOKEN = "EtRiQu8SqYRnXsMbpLkA";
const MAP_ID = "outdoor";

function mapTilerProvider(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${MAPTILER_ACCESS_TOKEN}`;
}

const Map = ({ supplier }) => {
  const [center, setCenter] = React.useState([
    supplier.latitue,
    supplier.longitude,
  ]);

  React.useEffect(() => {
    setCenter([supplier.latitue, supplier.longitude]);
  }, [supplier]);

  const [zoom, setZoom] = React.useState(15);
  return (
    <PMap
      provider={mapTilerProvider}
      width={600}
      height={400}
      center={center}
      zoom={zoom}
    >
      <Marker
        anchor={center}
        payload={1}
        onClick={({ event, anchor, payload }) => {}}
      />
    </PMap>
  );
};

export default Map;
