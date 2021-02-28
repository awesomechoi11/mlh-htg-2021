import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils'
import PerfectScrollbar from 'react-perfect-scrollbar'
import faker from 'faker'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
    scheduleAtom
} from '../../utils/atoms'

export default function Connections(props) {
    const [nonProfits, setNonProfits] = useState()



    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('nonprofits').limit(25)
        nonprofits.get().then(snapshot => {
            var phoneNumber = faker.phone.phoneNumberFormat(0)
            var email = faker.internet.email()
            var time = faker.date.between('2021-02-29', '2021-03-20').toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit' })
                .replace(/(:\d{2})$/, "")
            var date = faker.date.between('2021-02-29', '2021-03-20').toLocaleString()
            date = date.split(", ")
            date = faker.date.past().toDateString()
            setNonProfits(snapshot.docs.map(doc => ({ id: doc.id, time, date, email, phoneNumber, ...doc.data() })))
        })
        // getPhotoUrl().then(url => {
        //     setPhoto(url.response[0].urls.raw)
        // })
    }, [])

    return (
        <div id="nonProfitConnections" className={props.owo && 'connections-inner'}>
            {!props.owo &&
                <p id="nonProfitConnectionTitle">
                    <span>NON-PROFIT ORGANIZATION CONNECTIONS</span>
                    <span>VIEW ALL</span>
                </p>
            }
            {props.owo && <ConnectionsBanner />}
            <PerfectScrollbar>
                <div id={"connectPanelWrapper"}  >
                    {nonProfits && nonProfits.map(org => <ConnectPanel key={org.id} {...org} owo={props.owo} showProfile={props.showProfile} />)}
                </div>
            </PerfectScrollbar>
        </div>
    )
}

function ConnectPanel(props) {
    const schedules = useRecoilValue(scheduleAtom)
    const status = [
        'accepting',
        'closed',
        'in progress'
    ]
    const [currstatus, setCurrStatus] = useState(status[Math.floor(Math.random() * Math.floor(2))])

    let history = useHistory()
    const pic = faker.image.image()
    //'https://picsum.photos/200/200'

    useEffect(() => {
        for (var i = 0; i < schedules.length; i++) {
            if (schedules[i].name == props.name) {
                setCurrStatus(status[2])
                break;
            }
        }
    }, [])
    //console.log(props)
    return (
        <div className="nonProfitPanel card-item dashboard-card">

            <img className="nonProfitPhoto" src={'https://picsum.photos/200/200'} alt="profile pic" />
            <div className="nonProfitInfo">
                <p className='title'>{props.name}</p>
                <p className='number'>{props.phoneNumber}</p>
                <p className='time'>PICKUP AVAILABLE: {"\xa0\xa0" + props.date}</p>
            </div>

            <div className="nonProfitStatus">
                <div className={'status-pill ' + currstatus}>
                    {currstatus}
                </div>
                {props.owo &&
                    <div className='phonenumber'>
                        {props.webURL}
                    </div>
                }
                {!props.owo &&
                    <div className='view-btn' onClick={e => { history.push(`/dashboard/connections/${props.id}`) }}>
                        view organization profile {' '}
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.39526 8.5H15.3953" stroke="#EAE9DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.39526 1.5L15.3953 8.5L8.39526 15.5" stroke="#EAE9DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                }
            </div>
        </div>
    )
}


function ConnectionsBanner() {

    return (
        <div className='d-home-welcome connections-banner' >
            <div className='profile-image'>
                img here
            </div>
            <div className='welcome-info dashboard-card'>
                <div className='top'>
                    <span className='prefix'>
                        Connections
                    </span>
                    {' '}
                    <span className='name'>

                    </span>
                </div>
                <div className='bottom'>
                    View your local non-profit organizations here.
                </div>
            </div>

        </div>
    )

}


export function ConnectionRight() {

    let { id } = useParams();
    const [docData, setDocData] = useState('loading');

    var docRef = firestore.doc('hackathonstuff/mlhhtg2021/nonprofits/' + id)
    docRef.get().then(data => {
        //console.log(data.data())
        setDocData(JSON.stringify(data.data()))
    }).catch(e => {
        setDocData('not found!')
        console.log('connectionright ', e)
    })

    return (
        <div>
            {docData}
        </div>
    )

}