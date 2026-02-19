import { useState } from 'react'
import  Chart from './Chart';
import { runMortgageCalc } from './mortgage';
import TodayPanel from './TodayPanel';
import NextPanel from './NextPanel';
import Obliteration from './Obliteration';
import ThisPanel from './ThisPanel';
import OneOffPanel from './OneOffPanel';
import './App.css';

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
    <div className="app-container">
      <div className="app-header">
        <h2>Close Mortgage Obliterator</h2>
      </div>
      
      <div className="tiles-grid">
        <div className="tile chart-tile">
          <Chart mortgage={ mortgage } />
        </div>
        
        
        
        <div className="tile">
          <h3>End</h3>
          <Obliteration mortgage={ mortgage } />
        </div>

        <div className="tile oneoff-tile">
          <h3>One-Off Payments</h3>
          <OneOffPanel 
            oneOffs={ oneOffs }
            handleSubmit={ handleOneOffForm } 
            handleDelete={ handleOneOffDelete }/>
        </div>
        <div className="tile">
          <h3>Today</h3>
          <TodayPanel mortgage={ mortgage } />
        </div>

        <div className="tile">
          <h3>This Fix Period</h3>
          <ThisPanel 
            mortgage={ mortgage } 
            handlePayment={ handleTodayPayment }
            payment={ todayPayment }/>
        </div>

        <div className="tile">
          <h3>Next Fix Period</h3>
          <NextPanel 
            mortgage={ mortgage }
            handlePayment={ handleNextPayment } 
            payment={ nextPayment }
            interest={ interest }
            handleInterest={ handleInterest }/>
        </div>

        
      </div>
    </div>
  )
}

export default App
