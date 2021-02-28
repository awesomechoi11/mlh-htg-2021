import { firestore } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { getPhotoUrl } from '../../utils/utils'
import PerfectScrollbar from 'react-perfect-scrollbar'
import faker from 'faker'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import {
    scheduleAtom,
    orgInfoAtom
} from '../../utils/atoms'
import { add, trash, calender } from '../../assets/svgs/svg'

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
                    {nonProfits && nonProfits.map(org => <ConnectPanel key={org.id} {...org} owo={props.owo} />)}
                </div>
            </PerfectScrollbar>
        </div>
    )
}

function ConnectPanel(props) {
    const schedules = useRecoilValue(scheduleAtom)
    const setSelectedOrg = useSetRecoilState(orgInfoAtom)

    const status = [
        'accepting',
        'closed',
        'in progress'
    ]
    const [currstatus, setCurrStatus] = useState(status[Math.floor(Math.random() * Math.floor(2))])
    var cursor = props.owo ? { cursor: 'pointer' } : null
    let history = useHistory()
    const pic = faker.image.image()
    //'https://picsum.photos/200/200'

    function selectOrg() {
        var obj = JSON.parse(JSON.stringify(props))
        obj.status = currstatus
        setSelectedOrg(obj)
    }

    useEffect(() => {
        if (schedules) {
            for (var i = 0; i < schedules.length; i++) {
                if (schedules[i].name == props.name) {
                    setCurrStatus(status[2])
                    break;
                }
            }
        }
    }, [])

    return (
        // <div className="nonProfitPanel card-item dashboard-card"
        //     onClick={e => {
        //         if (props.owo) {
        //             history.push('/dashboard/connections/' + props.id)
        //         }
        //     }}
        // >
        <div className="nonProfitPanel card-item dashboard-card" style={cursor} onClick={selectOrg}>

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
    const orgInfo = useRecoilValue(orgInfoAtom)
    const [selectedOrg, setSelectedOrg] = useRecoilState(orgInfoAtom)
    const [scheduled, setSchedule] = useRecoilState(scheduleAtom)

    var status
    if (orgInfo) {
        status = orgInfo.status == "in progress" ? "progress" : orgInfo.status
    }
    function requestPickUp() {
        if (orgInfo.status != "in progress") {
            var obj = JSON.parse(JSON.stringify(selectedOrg))
            obj.status = "in progress"
            setSelectedOrg(obj)
            setSchedule([...scheduled, obj])
        }
    }
    return (
        <>
            <div className="connectRight">
                <p id="details">connection details</p>
                <div id="connectInfo">
                    <div id='connectInfo-inner'>
                        {orgInfo && <>
                            <div id="titleAndStatus">
                                <p id="title">{orgInfo.name}</p>
                                <div className={'status-pill ' + status}>{orgInfo.status}</div>
                            </div>
                            <p id="connectAddress">{orgInfo.address}</p>
                            <div id="hoursWrapper">
                                <p id="hoursTitle">AVAILABLE PICKUP HOURS:</p>
                                <p>MWF 9:30AM-5PM</p>
                                <p>TR 12PM-5PM</p>
                            </div>
                            <p id="available">search availability for pick-up</p>
                            <div id="searchAndCalender">
                                <input id="searchInput" placeholder="2/27/2021" />
                                <div id="calender">{calender}</div>
                            </div>
                            <div id="btnWrapper">
                                <div className={'status-pill pickup'} onClick={requestPickUp}>request pickup</div>
                                <div className={'status-pill cancel'}>cancel pickup appointment</div>
                            </div>
                        </>
                        }
                    </div>
                    <div id="connectbackgroundOffset">
                    </div>
                </div>
                <div id="todoAndIcons">
                    <p id="todoListTitle">my to-do list</p>
                    <div id="icons">
                        <div className="icon">{add}</div>
                        <div className="icon">{trash}</div>
                    </div>
                </div>

                <div id="todoInfo">
                    <div id='todoInfo-inner'>
                        <div className='circleAndTodo'>
                            <div className='dashboard-right circle'></div>
                            <p>Call Slow Food USA for inquiry</p>
                        </div>
                        <div className='circleAndTodo'>
                            <div className='dashboard-right circle'></div>
                            <p>Pick up ingredients from restaurant depot</p>
                        </div>
                        <div className='circleAndTodo'>
                            <div className='dashboard-right circle'></div>
                            <p>Make pick-up appointment by tonight</p>
                        </div>
                    </div>
                    <div id="todobackgroundOffset">
                    </div>
                </div>
            </div>
        </>
    )
}