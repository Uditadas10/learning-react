import { ChevronLeft, Ellipsis } from "lucide-react";
const JournalScorer = () =>{
    return (
        <div className="Journal-scorer">
            <div className="My-journal">
                <div className="journal-arrow">
                    <ChevronLeft />
                </div>
                <h1>My Journal</h1>
                <div className="Ellipsis">
                    <Ellipsis />
                </div>
            </div>
            <h1>420</h1>
            <p>Celebrate what madde you smile today</p>
        </div>
    )
}
export default JournalScorer;