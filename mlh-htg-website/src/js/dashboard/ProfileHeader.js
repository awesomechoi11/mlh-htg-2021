import restaurantLogo from '../../assets/logos/restaurantLogo.png'
import { bell, cog2 } from '../../assets/svgs/svg'

export default function ProfileHeader(){
    return(
        <div className = "profileHeader">
            <div className = "icons">
                {cog2}
                {bell}
            </div>
            <div className = "nameAndPic">
                <p className = "name">Restaurant Name</p>
                <img className="pic" src={restaurantLogo} alt="pic" />
            </div>
        </div>
    )
}