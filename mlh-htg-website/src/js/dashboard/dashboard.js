import '../../sass/dashboard.scss'
import Connections from '../dashboard/Connections'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { leafonly, homesvg, facesvg, thumbsupsvg, coffeesvg, door, cog, homeavatar } from '../../assets/svgs/svg'

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
        to: '/connections',
        component: <Connections />,
        right: <DashboardHomeRight />
    },
    {
        to: '/',
        component: <DashboardHome />,
    },
]

const sidebarnav = [
    {
        text: "home",
        svg: homesvg,
        to: '/dashboard'
    },
    {
        text: "profile",
        svg: facesvg,
        to: '/dashboard/profile'
    },
    {
        text: "reviews",
        svg: thumbsupsvg,
        to: '/dashboard/reviews'
    },
    {
        text: "connections",
        svg: coffeesvg,
        to: '/dashboard/connections'
    },
]

function Sidebar() {

    let history = useHistory()


    return (
        <div className='dashboard-sidebar'>
            <div className='leaf-container'>
                {leafonly}
            </div>
            <div className='sidebar-nav-wrapper' >

                {sidebarnav.map(item => (
                    <div key={item.text} className='item'
                        onClick={e => {
                            history.push(item.to)
                        }}
                    >
                        <div className='icon'>
                            {item.svg}
                        </div>
                        <div className='text'>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className='sidebar-nav-wrapper bottom'>
                <div className='item'
                    onClick={e => {
                        history.push('/dashboard/settings')
                    }}
                >
                    <div className='icon'>
                        {cog}
                    </div>
                    <div className='text'>
                        settings
                        </div>
                </div>
                <div className='item'
                    onClick={e => {
                        //history.push('/dash')
                        console.log('need to log out')
                    }}
                >
                    <div className='icon'>
                        {door}
                    </div>
                    <div className='text'>
                        log out
                </div>
                </div>
            </div>

        </div >
    )
}


function DashboardHomeRight() {
    return (
        <div>
            home right
        </div>
    )
}

function DashboardHome() {
    return (
        <div className='d-home-wrapper'>
            <DashboardSearch />
            <DashboardWelcome />
            <DHomeStats />
            <Connections />
        </div>
    )
}

function DashboardSearch() {
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