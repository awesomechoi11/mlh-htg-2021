import {
    Switch,
    Route,
    useHistory,
    useParams,
} from "react-router-dom";
import '../../sass/dashboard.scss'

import ProfileHeader from './ProfileHeader'
import FoodForThought from './FoodForThought'

import Connections, { ConnectionRight } from '../dashboard/Connections'
import { homeRight, DashboardHome } from './dashboardHome'
import { Sidebar } from './dashboardSidebar'
import OrgProfile from './OrgProfile';

import { DashboardSearch } from './dashboardHome'

import { reviewBanner } from '../../assets/svgs/svg'
import { useEffect, useState } from "react";
import { firestore } from "../../utils/firebase";
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../sass/reviews.scss'

export default function Dashboard() {

    return (
        <div className='dashboard-page' >
            <Switch>
                {routes.map((item, index) => (
                    <Route key={index} path={item.to} >
                        <>
                            {<Sidebar />}
                            <div className='dashboard-content'>
                                {item.component}
                            </div>
                            <div className='dashboard-right'>
                                <ProfileHeader />
                                <div className='right-inner'>
                                    {item.right}
                                </div>
                                <FoodForThought />
                            </div>
                        </>
                    </Route>
                ))}
            </Switch>
        </div>
    )

}



const routes = [

    {
        to: '/dashboard/connections/:id',
        component: <OrgProfile />,
        right: <ConnectionRight />
    },
    {
        to: '/dashboard/connections',
        component: <Connections />,
        right: 'empty state for connections'
    },
    {
        to: '/dashboard/reviews/:reviewID',
        component: <DashboardReviews />,
        right: <RightReviews />
    },
    {
        to: '/dashboard/reviews',
        component: <DashboardReviews />,
        right: <div>empty state</div>
    },
    {
        to: '/dashboard',
        component: <DashboardHome />,
        right: homeRight
    },
]


function RightReviews() {

    let { reviewID } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        firestore.doc('/hackathonstuff/mlhhtg2021/reviews/' + reviewID).get()
            .then(docData => {
                setData(docData.data())
            })
    }, [])

    console.log(reviewID)
    return (
        <div className='review-details-wrapper'>
            {data ?
                <div>

                </div>
                : 'not available'}
        </div>
    )
}

function DashboardReviews() {

    return (
        <div>
            <DashboardSearch />
            <ReviewsBanner />
            <ReviewsList />
        </div>
    )

}



function ReviewsBanner() {

    return (
        <div className='d-home-welcome '>
            <div className='profile-image'>
                {reviewBanner}
            </div>
            <div className='welcome-info dashboard-card'>
                <div className='top'>
                    <span className='prefix'>
                        Reviews
                    </span>
                    {' '}
                    <span className='name'>

                    </span>
                </div>
                <div className='bottom'>
                    Search, Read, and Respond to reviews here!
                </div>
            </div>

        </div>
    )

}


function ReviewsList() {

    const [hasData, setData] = useState()

    useEffect(() => {
        var nonprofits = firestore.collection('hackathonstuff').doc("mlhhtg2021").collection('reviews').limit(25)
        nonprofits.get().then(snapshot => {
            setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        })

    }, [])

    return (
        !hasData ? <div>loading</div> :
            <div className='reviews-list'>
                <PerfectScrollbar>
                    {hasData.map(data => (
                        <ReviewsItem data={data} />
                    ))}
                </PerfectScrollbar>
            </div>
    )

}

const starStroke = (
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2.3335L15.7188 8.85433L22.9167 9.90641L17.7084 14.9793L18.9375 22.146L12.5 18.7606L6.06254 22.146L7.29171 14.9793L2.08337 9.90641L9.28129 8.85433L12.5 2.3335Z" stroke="#7F7D65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

)
const starFilled = (
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2.3335L15.7188 8.85433L22.9167 9.90641L17.7084 14.9793L18.9375 22.146L12.5 18.7606L6.06254 22.146L7.29171 14.9793L2.08337 9.90641L9.28129 8.85433L12.5 2.3335Z" fill="#7F7D65" stroke="#7F7D65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

)

function ReviewsItem(props) {

    console.log(props.data)

    var starInner = [];

    for (var i = 1; i < 6; i++) {
        starInner.push(
            <div className='star-item'>
                {props.data.rating >= i ? starFilled : starStroke}
            </div>
        )
    }

    let history = useHistory();

    return (
        <div className='item dashboard-card'
            onClick={e => {
                history.push('/dashboard/reviews/' + props.data.id)
            }}
        >
            <div className='top'>
                <div className='left'>
                    <span>
                        {props.data.name}
                    </span>
                    <span className='stars'>
                        {starInner}
                    </span>
                </div>
                <div className='right'>
                    Last updated: {' '} {props.data.date}
                </div>
            </div>
            <div className='bottom'>
                {props.data.comment}
            </div>
        </div>
    )

}