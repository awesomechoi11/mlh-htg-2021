import {
    Switch,
    Route,
} from "react-router-dom";
import '../../sass/dashboard.scss'

import ProfileHeader from './ProfileHeader'
import FoodForThought from './FoodForThought'

import Connections, { ConnectionRight } from '../dashboard/Connections'
import { homeRight, DashboardHome } from './dashboardHome'
import { Sidebar } from './dashboardSidebar'


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
        component: <Connections />,
        right: <ConnectionRight />
    },
    {
        to: '/dashboard/connections',
        component: <Connections />,
        right: 'empty state for connections'
    },
    {
        to: '/dashboard',
        component: <DashboardHome />,
        right: homeRight
    },
]




