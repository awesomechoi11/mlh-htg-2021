import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils' 

export default function Connections(){
    const [nonProfits, setNonProfits] = useState()
    const [photo, setPhoto] = useState()

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')
        nonprofits.get().then(snapshot => {
            setNonProfits(snapshot.docs.map(doc => doc.data()))
        })
        getPhotoUrl().then(url => {
            setPhoto(url.response.results[0].urls.raw)
        })

    }, [])

    return(
        <div id = "nonProfitConnections">
            <p id = "nonProfitConnectionTitle">NON-PROFIT ORGANIZATION CONNECTIONS</p>
            <ConnectPanel photo = {photo}/>
        </div>
    )
}   

function ConnectPanel(props){
    return(
        <div className = "nonProfitPanel">
        <img className = "nonProfitPhoto" src = { photo } alt = "profile pic"/> 
        <div className = "nonProfitInfo">
           <p>ORGANIZATION NAME</p>
           <p>PHONE NUMBER</p>
           <p>EMAIL</p>
        </div>
       
        <div className = "nonProfitStatus">
           <p>STATUS: ACCEPTING</p>
           <br></br>
           <br></br>
           <p>GOTO PROFILE</p>
        </div>
   </div>
    )
}