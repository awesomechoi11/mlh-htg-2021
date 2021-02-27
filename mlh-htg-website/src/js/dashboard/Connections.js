import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils'
import PerfectScrollbar from 'react-perfect-scrollbar'
import faker from 'faker'

export default function Connections() {
    const [nonProfits, setNonProfits] = useState()
    const [photo, setPhoto] = useState()
    const [schedules, setSchedules] = useState([])

    function schedule(newSchedule) {
        setSchedules(schedules => [...schedules, newSchedule])
    }

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits')
        nonprofits.get().then(snapshot => {
            var phoneNumber = faker.phone.phoneNumberFormat(0)
            var email = faker.internet.email()
            var time = faker.date.between('2021-02-29', '2021-03-20').toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit' })
                .replace(/(:\d{2})$/, "")
            var date = faker.date.between('2021-02-29', '2021-03-20').toLocaleString()
            date = date.split(", ")
            date = date[0]
            console.log(faker.date.between('2021-02-29', '2021-03-20'))
            setNonProfits(snapshot.docs.map(doc => ({ time, date, email, phoneNumber, ...doc.data() })))
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
                    {nonProfits && nonProfits.map(org => <ConnectPanel key={org.webURL} {...org} schedule={schedule} />)}
                </div>
            </PerfectScrollbar>
        </div>

    )
}

function ConnectPanel(props) {
    const [scheduled, setScheduled] = useState(false)

    const status = [
        'in progress',
        'accepting',
        'closed'
    ]

    function schedule() {
        props.schedule({ name: props.name, time: props.time, date: props.date, address: props.address })
        setScheduled(true)
    }

    return (
        <div className="nonProfitPanel card-item dashboard-card">

            <img className="nonProfitPhoto" src={props.photo} alt="profile pic" />
            <div className="nonProfitInfo">
                <p className='title'>{props.name}</p>
                <p className='number'>{props.phoneNumber}</p>
                <p className='time'>PICKUP AVAILABLE: {"\xa0" + props.time + "\xa0\xa0" + props.date}</p>
            </div>

            <div className="nonProfitStatus">
                {!scheduled ? <p>STATUS: ACCEPTING</p> : <p>STATUS: SCHEDULED</p>}
                <p>GOTO PROFILE</p>
                {!scheduled && <button onClick={schedule}>Schedule</button>}
            </div>
        </div>
    )
}