import '../../sass/dashboard.scss'
import Connections from '../dashboard/Connections'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";


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
    },
    {
        to: '/',
        component: <DashboardHome />,
    },
]


function Sidebar() {
    return (
        <div className='dashboard-sidebar'>
            sidebar
        </div>
    )
}

function DashboardHome() {
    return (
        <div>
            hello
        </div>
    )
}