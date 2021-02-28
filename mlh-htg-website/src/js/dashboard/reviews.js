import { reviewBanner } from '../../assets/svgs/svg'
import { useEffect, useState } from "react";
import { firestore } from "../../utils/firebase";
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../sass/reviews.scss'
import { DashboardSearch } from './dashboardHome'

import {
    useHistory,
    useParams,
} from "react-router-dom";

export function RightReviews() {

    let { reviewID } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        firestore.doc('/hackathonstuff/mlhhtg2021/reviews/' + reviewID).get()
            .then(docData => {
                setData(docData.data())
            })
    })
    console.log(reviewID)
    return (
        <div className='review-details-wrapper offset-parent'>
            <div className='offset-bg'>

            </div>
            <div className='offset-content'>
                {data ?
                    <div className='reviews-inner'>
                        <div className='details'>
                            <div className='left'>
                                <div className='profile'>
                                    <div className='pic'>

                                    </div>
                                    <div className='info'>
                                        <div className='name'>
                                            {data.name}
                                        </div>
                                        <div className='address'>

                                        </div>
                                    </div>
                                </div>
                                <div className='stars'>
                                    {getStarArr(data.rating)}
                                </div>
                            </div>
                            <div className='right'>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.354 13.6938C12.9063 13.6938 13.354 13.2461 13.354 12.6938C13.354 12.1416 12.9063 11.6938 12.354 11.6938C11.8017 11.6938 11.354 12.1416 11.354 12.6938C11.354 13.2461 11.8017 13.6938 12.354 13.6938Z" stroke="#706D51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.354 6.69385C12.9063 6.69385 13.354 6.24613 13.354 5.69385C13.354 5.14156 12.9063 4.69385 12.354 4.69385C11.8017 4.69385 11.354 5.14156 11.354 5.69385C11.354 6.24613 11.8017 6.69385 12.354 6.69385Z" stroke="#706D51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.354 20.6938C12.9063 20.6938 13.354 20.2461 13.354 19.6938C13.354 19.1416 12.9063 18.6938 12.354 18.6938C11.8017 18.6938 11.354 19.1416 11.354 19.6938C11.354 20.2461 11.8017 20.6938 12.354 20.6938Z" stroke="#706D51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                        <div className='date'>
                            last updated: {' '} {data.date}
                        </div>
                        <div>
                            {data.comment}
                        </div>
                        <div className='replybtn'>
                            reply to customer 
                            
                            <div className='rightArrow'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.10498 8H15.105" stroke="#562817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.10498 1L15.105 8L8.10498 15" stroke="#562817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>

                        </div>  
                    </div>
                    : 'please select a review!'}
            </div>
        </div>
    )
}

export function DashboardReviews() {

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

function getStarArr(stars) {
    var starInner = [];

    for (var i = 1; i < 6; i++) {
        starInner.push(
            <div className='star-item'>
                {stars >= i ? starFilled : starStroke}
            </div>
        )
    }
    return starInner
}

function ReviewsItem(props) {

    console.log(props.data)

    var starInner = getStarArr(props.data.rating);


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