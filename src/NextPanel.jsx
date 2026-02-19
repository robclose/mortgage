export default function NextPanel ({ mortgage, handlePayment, payment, interest, handleInterest }) {

let showDate = mortgage.at(-1).labels[0];
let showBase = mortgage.at(-1).monthlyPayment;

    return (
        <>
         <p className="mb-1">{ showDate } to end</p>
          
               <label htmlFor="npayment" className="form-label">
           Overpayment £
        </label>
         <input 
         id="npayment" 
         className="form-control form-control-sm mx-1 w-25 d-inline"
         type="number" min={0} step={10} 
         onChange={ handlePayment } 
         value={ payment }/>
         <p className="mb-1">Base payment: £{ showBase.toFixed(2) }</p>
         <p className="mb-1">Total payment: £{ (+payment + showBase).toFixed(2) }</p>
         <label htmlFor="ninterest" className="form-label">
           Interest rate 
        </label>
          <input 
                 id="ninterest"
                 className="form-control form-control-sm mx-1 w-25 d-inline"
                 type="number"
                 step="0.01"
                 min="0"
                 value = { interest }
                 onChange={ handleInterest } 
               /> %
               
        </>
    )
}