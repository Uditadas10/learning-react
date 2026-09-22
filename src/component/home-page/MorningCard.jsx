import img2 from "../../assets/Morning.jpg";
const MorningCard = () => {
    return (
        <div className="morning">
            <img src={img2} alt="image2"></img>
            <div className="morning-text">
                <h1>let's start your day</h1>
                <p>Begin with a mindful morning reflection</p>
            </div>
        </div>
    )
}
export default MorningCard;