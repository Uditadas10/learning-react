import { SignalHigh, Wifi, BatteryFull } from "lucide-react";
import img from "../../assets/Start online business.jpg";
const Header = () => {
    return (
        <div className="header">
            <div className="status-bar">
                <div className="time">
                    9:41
                </div>
                <div className="charge">
                    <SignalHigh />
                    <Wifi />
                    <BatteryFull />
                </div>
            </div>
            
            <div className="profile">
                <h1>Hi, Udita Das</h1>
                <img className="img" src={img}alt="image"/>
            </div>
            

        </div>
        
    )
}
export default Header;