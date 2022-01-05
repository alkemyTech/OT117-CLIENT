import React, { useState } from "react";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript, useJsApiLoader } from "@react-google-maps/api";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
//const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const apiKey = "AIzaSyCt3D_qHvxmUaD5_0fauXKSe9XTX_29V-E"
const libraries = ["places"]

const Map = ({ coordinates }) => {
  const [latitude, setLatitude] = useState(-34.55881726737178);
  const [longitude, setLongitude] = useState(-58.47476996280374);

  const { isLoaded, loadError} = useLoadScript({
    id: "alchemy-location",
    googleMapsApiKey: `${apiKey}`,
    libraries,
  })

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
          lat: latitude,
          lng: longitude,
        }}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </div>
  )
};

export default Map;
