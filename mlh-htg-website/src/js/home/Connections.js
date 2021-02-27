import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils' 
import faker from 'faker'

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
            <div id = "connectPanelWrapper">
                { nonProfits && nonProfits.map(org => <ConnectPanel key = {org.webURL} name = {org.name} photo = {photo}/>)}
            </div>
        </div>  
    )
}   

function ConnectPanel(props){
    var phoneNumber = faker.phone.phoneNumberFormat(0)
    var email = faker.internet.email()
    return(
        <div className = "nonProfitPanel">
        <img className = "nonProfitPhoto" src = { props.photo } alt = "profile pic"/> 
        <div className = "nonProfitInfo">
           <p>{ props.name }</p>
           <p>{ phoneNumber }</p>
           <p>{ email }</p>
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