import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { useEffect, useState } from 'react'
import { firestore } from '../../utils/firebase'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode"
import faker from 'faker'

const containerStyle = {
    width: '400px',
    height: '400px'
}

export default function OrgProfile(props){
    let { id } = useParams()
    const [data, setData] = useState()
    const [center, setCenter] = useState()
    const [zoom, setZoom] = useState(13)

    var phoneNumber = faker.phone.phoneNumberFormat(0)
    var email = faker.internet.email()
    var time = faker.date.between('2021-02-29', '2021-03-20').toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit' })
        .replace(/(:\d{2})$/, "")
    var date = faker.date.between('2021-02-29', '2021-03-20').toLocaleString()
    date = date.split(", ")
    date = date[0]
    
    Geocode.setApiKey("AIzaSyCumPp-MUvheo1S7ixUDqVoz-13ypCnjE4")

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

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')
        nonprofits.doc(id).get().then(doc => {
            setData(doc.data())
            console.log(doc.data().address)
            Geocode.fromAddress(doc.data().address).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  //console.log(lat, lng);
                  setCenter({lat, lng})
                  setZoom(15)
                },
                (error) => {
                  console.error(error);
                }
            )
        })
    }, [])

    //lat: 38.575764, lng: -121.478851
    return(
        <div>
            {data && 
                <div>
                    <p>{data.name}</p>
                    <p>{data.address}</p>
                    <p>{phoneNumber}</p>
                    <p>{email}</p>
                    <p>{time}</p>
                    <p>{date}</p>
                </div>
            }
            {isLoaded ? 
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                <Marker position={center} />
            <></>
            </GoogleMap> : <></>}
            <div onClick = {props.schedule}></div>
        </div>
    )
}