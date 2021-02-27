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

        getPhotoUrl().then(url => {
            setPhoto(url.response[0].urls.raw)
        })
        var str = faker.date.soon().toLocaleString()
        var arr = str.split(", ")
        console.log(arr)
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
    var str = faker.date.soon().toLocaleString()
    // var date = faker.date.soon()
    // console.log(date)

    return(
        <div className = "nonProfitPanel">
            <img className = "nonProfitPhoto" src = { props.photo } alt = "profile pic"/> 
            <div className = "nonProfitInfo">
                <p>{ props.name }</p>
                <p>{ phoneNumber }</p>
                <p>{ str }</p>
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