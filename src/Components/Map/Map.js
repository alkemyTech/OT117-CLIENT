import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const MapContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(9, 1fr);
  position: relative;

  &::before{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`
const Map = ({ coordinates }) => {
  const { isLoaded, loadError} = useLoadScript({
    id: "alchemy-location",
    googleMapsApiKey: `${apiKey}`,
  })

  if (loadError) return <p>Error al cargar el mapa.</p>
  if (!isLoaded || coordinates.length <= 0) return <p>Cargando Mapa....</p>

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
          position: "absolute"
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
      </GoogleMap>
    </MapContainer>
  )
};

export default Map;
