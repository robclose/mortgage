export default function TodayPanel ({ mortgage }) {

    let today = new Date();
    let thisPeriod = mortgage.filter(m => m.startDate < today && m.endDate > today)[0];
    let gapMonths = Math.round((today - thisPeriod.startDate) / 1000 / 86400 / 30);
    let showDate = thisPeriod.labels[gapMonths - 2];
    let showBalance = thisPeriod.series.actual[gapMonths + thisPeriod.startMonthIndex - 2];
    let showPercent = showBalance / mortgage[0].principal;

    return(
        <>
         <p className="mb-1">Date: { showDate }</p>
        <p className="mb-1">Balance: £{ showBalance }</p>
        <p className="mb-1">Remaining: { Math.round(showPercent * 100) }%</p>
        
        </>

    )
}