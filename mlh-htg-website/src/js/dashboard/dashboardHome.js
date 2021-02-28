import {
    downArrow,
} from '../../assets/svgs/svg'
import restaurantLogo from '../../assets/logos/restaurantLogo.png'
import { homeavatar } from '../../assets/svgs/svg'
import { useForm } from "react-hook-form"
import Connections from '../dashboard/Connections'
import { useRecoilState, useRecoilValue } from 'recoil'
import { scheduleAtom, userUIDFromFirebaseAtom } from '../../utils/atoms'
import { useEffect } from 'react'
import { getSchedule } from '../../utils/firebaseFunctions'

export function HomeRight() {
    const [schedules, setSchedule] = useRecoilState(scheduleAtom)
    const uid = useRecoilValue(userUIDFromFirebaseAtom)

    useEffect(() => {
        if(uid){
            //get all schedules from firebase
            var queriedSchedule = getSchedule(uid)
            if(queriedSchedule){
                setSchedule(queriedSchedule)
            }
        }
    }, [])

    return(
        <div className='right-home'>
            <p id="myProfile">my profile</p>

            <div id="userInfo">
                <div className='userInfo-inner'>

                    <p id="header">Restaurant Name</p>
                    <div id="picAndAddress">
                        <img id="headerPic" src={restaurantLogo} alt="pic" />
                        <div id="address">
                            <p>FOODFORTHOUGHT INC.</p>
                            <p>12345 SESAME ST</p>
                            <p>ORLANDO FL 12345</p>
                        </div>
                    </div>
                </div>
                <div id="backgroundOffset">
                </div>
            </div>
            <div id="pickUpAndSort">
                <p id="pickUpHeader">scheduled pickups</p>
                <div id="sortAndArrow">
                    <p id="sortHeader">SORT BY</p>
                    {downArrow}
                </div>
            </div>
            <div id="scheduledPickups">
                <div className='scheduledPickups-inner'>
                    <div className="scheduleList">
                        {schedules && schedules.map(schedule => <PickUps key = {schedule.name} {...schedule}/>)}
                    </div>
                </div>
                <div id="pickupsBackgroundOffset">
                </div>
            </div>
        </div>
    )
}

function PickUps(props){
    return(
        <div className = "circleAndScheduleTime">
            <div className="circle"></div>
            <p>{props.name}  &mdash;  {props.time}</p>
        </div>
    )
}

export function DashboardHome() {


    return (
        <div className='d-home-wrapper'>
            <DashboardSearch />
            <DashboardWelcome />
            <DHomeStats />
            <Connections />
        </div>
    )
}

export function DashboardSearch() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='d-home-searchbar'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name="d-search" placeholder='search organization, reviews, & more...' ref={register} />
            </form>
        </div>
    )

}

function DashboardWelcome() {

    return (
        <div className='d-home-welcome '>
            <div className='profile-image'>
                {homeavatar}
            </div>
            <div className='welcome-info dashboard-card'>
                <div className='top'>
                    <span className='prefix'>
                        Good morning,
                    </span>
                    {' '}
                    <span className='name'>
                        Sally Kim
                    </span>
                </div>
                <div className='bottom'>
                    How can we assist you today?
                </div>
            </div>

        </div>
    )

}

function DHomeStats() {

    const statdata = [
        {
            title: 'total donated (lbs)',
            value: '1,230',
            percentage: '5.2%'
        },
        {
            title: 'reviews this month',
            value: '13',
            percentage: '2.1%'
        },
        {
            title: 'people fed',
            value: '321',
            percentage: '54.2%'
        },
        {
            title: 'food waste prevented',
            value: '37%',
            percentage: '15.3%'
        },
    ]

    return (
        <div className='d-home-stats'>
            <div className='title'>
                monthly reports
            </div>
            <div className='card-wrapper'>
                {statdata.map(item => (
                    <div className='card-item dashboard-card'>
                        <div className='title'>
                            {item.title}
                        </div>
                        <div className='value'>
                            {item.value}
                        </div>
                        <div className='percentage'>
                            <span>
                                {item.percentage}
                            </span>
                            {' '}
                            since last month
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}