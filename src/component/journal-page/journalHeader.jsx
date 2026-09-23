import { SignalHigh, Wifi, BatteryFull } from "lucide-react";
const JournalHeader = () => {
    return (
            <div className="status-bar-journal">
                <div className="time-journal">
                    9:41
                </div>
                <div className="charge-journal">
                    <SignalHigh />
                    <Wifi />
                    <BatteryFull />
                </div>
            </div>
    )
}
export default JournalHeader;