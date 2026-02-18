
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  elements : {
    point : {
      pointStyle : false
    }
  }
}

function Chart ({ mortgage }) {

    const data = {
    type: 'line',
    labels: mortgage[0].labels,
    datasets: [{
        label: 'Original flightpath ' + mortgage[0].rate.annual * 100,
        data: mortgage[0].series.flightpath
    },
    { 
    type: 'line',
    label: 'Fix ' + mortgage[0].rate.annual * 100,
    data: mortgage[0].series.actual,
    borderColor: 'hsl(240, 100%, 50%)',
    backgroundColor: 'hsla(240, 100%, 50%, 0.5)',
    },
    { 
    type: 'line',
    label: 'Fix ' + mortgage[1].rate.annual * 100,
    data: mortgage[1].series.actual,
    borderColor: 'hsl(270, 100%, 50%)',
    backgroundColor: 'hsla(260, 100%, 50%, 0.5)',
    },
    {  
    type: 'line',
    label: 'Fix ' + + mortgage[2].rate.annual * 100,
    data: mortgage[2].series.actual,
    borderColor: 'hsl(180, 50%, 50%)',
    backgroundColor: 'hsla(180, 50%, 50%, 0.5)',
    },
    { 
    type: 'line',
    label: 'Future Scenario',
    data: mortgage[3].series.actual,
    borderColor: 'hsl(330, 100%, 50%)',
    backgroundColor: 'hsla(330, 100%, 50%, 0.5)',
    },
    {
    type: 'bar',
    label: '',
    data: [
      {x: new Date().toISOString().slice(0,7), y: 250000},
      {x: new Date("2038-01-01").toISOString().slice(0,7), y: 250000}

    ],
    borderColor: 'hsl(50, 90%, 55%)',
    backgroundColor: 'hsla(50, 90%, 55%, 0.5)',
    maxBarThickness: 2,
    }]
}

    return (
    <Line
      data={data} 
      options = {options}
      />
    );
}

export default Chart;