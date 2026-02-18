export default function Obliteration ({ mortgage }) {

let endMonths = mortgage.at(-1).series.actual.length
let showDate = new Date(mortgage[0].startDate);
showDate.setMonth(showDate.getMonth() + endMonths);
let showYearsEarly = (35 - (endMonths / 12)).toFixed(1);


    return (
        <>
        <h4 className="mt-5">End</h4>
         <p className="mb-1 ">End date: { showDate.toISOString().slice(0, 7) }</p>
         <p className="mb-1">{ showYearsEarly } years early</p>
         <p className="mb-1">Age: { (34 + endMonths/12).toFixed(0) }</p>
        </>
    )
}