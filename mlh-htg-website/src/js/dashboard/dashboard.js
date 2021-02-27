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
        <div className='d-home-wrapper'>
            <DashboardSearch />
            <DashboardWelcome />
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