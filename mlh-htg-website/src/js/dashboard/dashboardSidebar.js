import {
    useHistory,
} from "react-router-dom";
import {
    leafonly,
    homesvg,
    facesvg,
    thumbsupsvg,
    coffeesvg,
    door,
    cog,
    homeavatar,
    downArrow,
} from '../../assets/svgs/svg'

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

export function Sidebar() {

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