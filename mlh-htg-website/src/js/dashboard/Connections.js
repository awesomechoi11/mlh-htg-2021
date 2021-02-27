import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils'
import PerfectScrollbar from 'react-perfect-scrollbar'
import faker from 'faker'

export default function Connections() {
    const [nonProfits, setNonProfits] = useState()
    const [photo, setPhoto] = useState()

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')
        nonprofits.get().then(snapshot => {
            setNonProfits(snapshot.docs.map(doc => doc.data()))
        })

        // getPhotoUrl().then(url => {
        //     setPhoto(url.response[0].urls.raw)
        // })
    }, [])

    return (
        <div id="nonProfitConnections">
            <p id="nonProfitConnectionTitle">
                <span>NON-PROFIT ORGANIZATION CONNECTIONS</span>
                <span>VIEW ALL</span>
            </p>
            <PerfectScrollbar>
                <div id="connectPanelWrapper">
                    {nonProfits && nonProfits.map(org => <ConnectPanel key={org.webURL} name={org.name} photo={photo} />)}
                </div>
            </PerfectScrollbar>
        </div>

    )
}

function ConnectPanel(props) {
    var phoneNumber = faker.phone.phoneNumberFormat(0)
    var email = faker.internet.email()
    var time = faker.date.between('2021-02-29', '2021-03-20').toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    .replace(/(:\d{2})$/, "")
    var date = faker.date.between('2021-02-29', '2021-03-20').toLocaleString()
    date = date.split(", ")
    date = date[0]

    return(
        <div className = "nonProfitPanel">
            <img className = "nonProfitPhoto" src = { props.photo } alt = "profile pic"/> 
            <div className = "nonProfitInfo">
                <p>{ props.name }</p>
                <p>{ phoneNumber }</p>
                <p>PICKUP AVAILABLE: { "\xa0" + time + "\xa0\xa0" + date}</p>
            </div>

            <div className="nonProfitStatus">
                <p>STATUS: ACCEPTING</p>
                <br></br>
                <br></br>
                <p>GOTO PROFILE</p>
            </div>
        </div>
    )
}