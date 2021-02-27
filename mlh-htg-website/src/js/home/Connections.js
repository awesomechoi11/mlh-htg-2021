import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'

export default function Connections(){
    const [nonProfits, setNonProfits] = useState()

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')
        nonprofits.get().then(snapshot => {
            setNonProfits(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return(
        <div id = "nonProfitConnections">
            <p id = "nonProfitConnectionTitle">NON-PROFIT ORGANIZATION CONNECTIONS</p>
            <div className = "nonProfitPanel">
                {/* <img className = "nonProfitPhoto" alt = "profile pic"/> */}
                <div className = "nonProfitPhoto"></div>

                <div>
                    <p>ORGANIZATION NAME</p>
                    <p>PHONE NUMBER</p>
                    <p>EMAIL</p>
                </div>
                
                <div>
                    <p>STATUS: ACCEPTING</p>
                    <p>GOTO PROFILE</p>
                </div>
            </div>
        </div>
    )
}