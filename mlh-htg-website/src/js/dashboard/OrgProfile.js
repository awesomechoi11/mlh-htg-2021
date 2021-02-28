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
import { useRecoilState, useRecoilValue } from 'recoil'
import { scheduleAtom, userUIDFromFirebaseAtom } from '../../utils/atoms'
import { addSchedule } from '../../utils/firebaseFunctions'

const containerStyle = {
    width: '400px',
    height: '400px'
}

export default function OrgProfile(){
    const [scheduled, setSchedule] = useRecoilState(scheduleAtom)
    const uid = useRecoilValue(userUIDFromFirebaseAtom)
    const [data, setData] = useState()
    const [center, setCenter] = useState()
    const [zoom, setZoom] = useState(13)
    const [fakeData, setFakeData] = useState()

    function addToSchedule(){
        data.time = fakeData.time
        data.date = fakeData.date
        setSchedule([...scheduled, data])
        //adds schedule to firestore
        if(uid){
            addSchedule(uid, data)
        }
    }
    
    Geocode.setApiKey("AIzaSyCumPp-MUvheo1S7ixUDqVoz-13ypCnjE4")

    let { id } = useParams()
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
            if (doc.exists) {

                setData(doc.data())
                Geocode.fromAddress(doc.data().address).then(
                    (response) => {
                        const { lat, lng } = response.results[0].geometry.location;
                        //console.log(lat, lng);
                        setCenter({ lat, lng })
                        setZoom(15)
                    },
                    (error) => {
                        console.error(error);
                    }
                )
            }
        })
        var phoneNumber = faker.phone.phoneNumberFormat(0)
        var email = faker.internet.email()
        var time = faker.date.between('2021-02-29', '2021-03-20').toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit' })
            .replace(/(:\d{2})$/, "")
        var date = faker.date.between('2021-02-29', '2021-03-20').toLocaleString()
        date = date.split(", ")
        date = date[0]
        setFakeData({phoneNumber, email, time, date})
    }, [])

    return (
        <div>
            <button onClick = {addToSchedule}>Schedule</button>
            {data && 
                <div>
                    <p>{data.name}</p>
                    <p>{data.address}</p>
                    <p>{fakeData.phoneNumber}</p>
                    <p>{fakeData.email}</p>
                    <p>{fakeData.time}</p>
                    <p>{fakeData.date}</p>
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
        </div>
    )
}