const EmotionChart = () => {
    return (
        <div className="emotions">

            <div className="emotions-text">
                <h1>Emotions</h1>
                <p>here are four core emotions for your journal</p>
            </div>

            <div className="level">

                <div className="happy emotion">
                    
                    <div className="tube">
                        <div className="fill" style={{ height: "48%" }}></div>
                    </div>
                    <div className="percentage">48%</div>
                    <p>Happy</p>
                </div>

                <div className="sad emotion">
                    
                    <div className="tube">
                        <div className="fill" style={{ height: "33%" }}></div>
                    </div>
                    <div className="percentage">33%</div>
                    <p>Sad</p>
                </div>

                <div className="calm emotion">
                    
                    <div className="tube">
                        <div className="fill" style={{ height: "27%" }}></div>
                    </div>
                    <div className="percentage">27%</div>
                    <p>Calm</p>
                </div>

                <div className="anxious emotion">
                   
                    <div className="tube">
                        <div className="fill" style={{ height: "40%" }}></div>
                    </div>
                    <div className="percentage">40%</div>
                     <p>Anxious</p>
                </div>

            </div>
        </div>
    );
};

export default EmotionChart;