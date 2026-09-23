import Create from "../component/journal-page/CreateJournalButton";
import EmotionChart from "../component/journal-page/EmotionChart";
import JournalHeader from "../component/journal-page/journalHeader";
import JournalScorer from "../component/journal-page/JournalScorer";

const Journal = () => {
    return (
        <div className="journal-screen">
            <JournalHeader/>
            <JournalScorer/>
            <EmotionChart/>
            <Create/>
        </div>
    )
}
export default Journal;