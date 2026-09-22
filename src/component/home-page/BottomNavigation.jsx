import { House, Compass,Plus, NotepadText,CircleUserRound } from "lucide-react";
const BottomNavigation =() =>{
    return (
        <div className="bottomNavigation">
            <div className="Home-icon">
                <House />
                <h5>Home</h5>
            </div>
            <div className="compass-icon">
                <Compass />
                <h5>explore</h5>
            </div>
            <div className="plus-icon">
                <Plus />
                <h5>add</h5>
            </div>
            <div className="Notepad-icon">
                <NotepadText />
                <h5>journey</h5>
            </div>
            <div className="User-icon">
                <CircleUserRound />
                <h5>profile</h5>
            </div>           


        </div>
    )
}
export default BottomNavigation;