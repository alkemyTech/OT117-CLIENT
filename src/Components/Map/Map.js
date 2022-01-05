import React from "react";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
//const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const apiKey = "AIzaSyCt3D_qHvxmUaD5_0fauXKSe9XTX_29V-E"
const libraries = ["places"]

const Map = ({ coordinates }) => {
  const { isLoaded, loadError} = useLoadScript({
    id: "alchemy-location",
    googleMapsApiKey: `${apiKey}`,
    libraries
  })
  console.log(coordinates)

  if (loadError) return <p>Error al cargar el mapa.</p>
  if (!isLoaded) return <p>Cargando Mapa....</p>

  return (
    <div style={{ height: "60vh", width: "620px", padding: "20px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        zoom={15}
        center={{
          lat: coordinates[0],
          lng: coordinates[1],
        }}
        defaultCenter={{
          lat: 10,
          lng: 10
        }}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        <Marker position={{ lat: coordinates[0], lng: coordinates[1] }} />
      </GoogleMap>
    </div>
  )
};

export default Map;
