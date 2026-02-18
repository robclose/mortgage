import { useState } from 'react'
import  Chart from './Chart';
import { runMortgageCalc } from './mortgage';
import TodayPanel from './TodayPanel';
import NextPanel from './NextPanel';
import Obliteration from './Obliteration';
import ThisPanel from './ThisPanel';
import OneOffPanel from './OneOffPanel';

function App() {
  const [interest, setInterest] = useState(4);
  const [todayPayment, setTodayPayment] = useState(250);
  const [nextPayment, setNextPayment] = useState(500);
  const [oneOffs, setOneOffs] = useState([]);

  let dateToday = new Date();
  let dateNext = new Date("2029-02-15")
  dateToday.setDate(15);
  
  let scenario = [[dateToday, dateNext, todayPayment], [dateNext, null, nextPayment], ...oneOffs];
  const mortgage = runMortgageCalc(scenario, interest);

  const handleInterest = (e) => {
    setInterest(e.target.value);
  }

  const handleTodayPayment = (e) => {
    setTodayPayment(e.target.value);

  }

  const handleNextPayment = (e) => {
    setNextPayment(e.target.value);

  }

  const handleOneOffForm = (formData) => {
    setOneOffs([...oneOffs, [formData.get('date'), formData.get('date'), formData.get('amount'), Math.random().toString(36).slice(2,9)]])
  }

  const handleOneOffDelete = (e) => {
    setOneOffs(oneOffs.filter(o => o[3] !== e.target.dataset.id));
  }

  return (
    <>
      <div className="container py-4">
       <h2>Close Mortgage Obliterator</h2>
     <div className="row">
      <div className="col-sm-10">
     <Chart
        mortgage = { mortgage }
     />
     </div>
     <div className="col-6 col-sm-2">
      <TodayPanel 
          mortgage={ mortgage } />
      <Obliteration mortgage={ mortgage } />
      
      </div>
     </div>
     <div className="row mt-5">
      <div className="col-sm-3 mb-5">
        <ThisPanel 
          mortgage={ mortgage } 
          handlePayment={ handleTodayPayment }
          payment={ todayPayment }/>
      </div>
      <div className="col-sm-3 mb-5">
        <NextPanel mortgage={ mortgage }
        handlePayment={ handleNextPayment } 
        payment={ nextPayment }
        interest={ interest }
        handleInterest={ handleInterest }/>
      </div>
      <div className="col-sm-6 mb-5">
        <OneOffPanel 
        oneOffs = { oneOffs }
        handleSubmit={ handleOneOffForm } 
        handleDelete={ handleOneOffDelete }/>
      </div>
     </div>
      </div>
    </>
  )
}

export default App
