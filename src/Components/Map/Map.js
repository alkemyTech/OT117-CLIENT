import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const libraries = ["places"]
const MapContainer = styled.div`
  --container-padding: 1rem;
  height: 20rem;
  width: 100%;
`
const Map = ({ coordinates }) => {
  const { isLoaded, loadError} = useLoadScript({
    id: "alchemy-location",
    googleMapsApiKey: `${apiKey}`,
    libraries
  })

  if (loadError) return <p>Error al cargar el mapa.</p>
  if (!isLoaded || coordinates.length <= 0) return <p>Cargando Mapa....</p>

  return (
    <MapContainer>
      {/* <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        zoom={15}
        center={{
          lat: coordinates[0],
          lng: coordinates[1]
        }}
        options={{
          disableDefaultUI: true,
          zoomControl: true
        }}
      >
        <Marker
          position={{
            lat: coordinates[0],
            lng: coordinates[1]
          }} />
      </GoogleMap> */}
    </MapContainer>
  )
};

export default Map;
