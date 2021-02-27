import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
}

export default function GoogleMaps(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCumPp-MUvheo1S7ixUDqVoz-13ypCnjE4"
    })
    
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: 38.575764, lng: -121.478851 }}
            zoom={11}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={{ lat: 38.575764, lng: -121.478851 }} />
            <Marker position={{ lat: 38.608764, lng: -121.528851 }} />
            <Marker position={{ lat: 38.608764, lng: -121.408851 }} />
            <Marker position={{ lat: 38.518764, lng: -121.438851 }} />
        <></>
        </GoogleMap>
    ) : <></>
}