const QuickJournalCard = ({bgColor, title, subtitle, tag, category}) => {
    return (
        <div className="quick-journal-texts" style={{ backgroundColor: bgColor }}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="bottom-quick-journal-text">
                <div><h3>{tag}</h3></div>
                <div><p>{category}</p></div>
            </div>
        </div>
    )
}
export default QuickJournalCard;