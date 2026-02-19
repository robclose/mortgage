export default function ThisPanel ({ mortgage, handlePayment, payment }) {

    let today = new Date();
    let thisPeriod = mortgage.filter(m => m.startDate < today && m.endDate > today)[0];


    return(
        <>
        <p className="mb-1">{ `${thisPeriod.startDate.toISOString().slice(0,7)} to ${thisPeriod.endDate.toISOString().slice(0,7)}` }</p>
        <label htmlFor="tinterest" className="form-label">Overpayment £</label>
        <input id="tinterest"
                className="form-control form-control-sm w-25 d-inline mx-1"
                type="number" min={0} step={10} 
                onChange={ handlePayment } 
                value={payment}/>
        <p className="mb-1">Base payment: £{ thisPeriod.monthlyPayment.toFixed(2) }</p>
        <p className="mb-1">Total payment: £{ (+payment + thisPeriod.monthlyPayment).toFixed(2) }</p>
        </>

    )
}