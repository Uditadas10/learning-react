import Header from "../component/home-page/Header.jsx";
import DateSelector from "../component/home-page/dateSelector.jsx";
import JournalSection from "../component/home-page/journalSectiom.jsx";
import MorningCard from "../component/home-page/MorningCard.jsx";
import EveningCard from "../component/home-page/EveningCard.jsx";
import QuickJournalSection from "../component/home-page/QuickJournalSection.jsx";
import QuickJournalCard from "../component/home-page/QuickJournalCard.jsx";
import BottomNavigation from "../component/home-page/BottomNavigation.jsx";
const Home = () => {
    return (
        <div className="home-screen">
            <div className="header-section">
                <Header/>
            </div>
            <div>
                <DateSelector/>
            </div>
            <div>
                <JournalSection/>
            </div>
            <div className="cards">
                <MorningCard/>
                <EveningCard/>
            </div>
            <div>
                <QuickJournalSection/>
            </div>
            <div className="quick-journal-cards">
                <QuickJournalCard
                bgColor="#9c6a83"
                title="Pause & reflect"
                subtitle="what are you grateful for today"
                tag="Today"
                category="Personal"
               />
                <QuickJournalCard
                bgColor="#7c96bf"
                title="Pause & reflect"
                subtitle="what are you grateful for today"
                tag="Today"
                category="Personal"
               />
                <QuickJournalCard
                bgColor="#9abf7c"
                title="Pause & reflect"
                subtitle="what are you grateful for today"
                tag="Today"
                category="Personal"
               />
            </div>
            <div>
                <BottomNavigation/>
            </div>
           
        </div>
    )
}
export default Home;