import { Period } from './period'
import { Payment } from './payment'
import { history } from './history'

export function runMortgageCalc (futurePayments, futureRate) {

    const periods = [];
    let payments = [...history.payments, ...futurePayments].map(p => new Payment(...p));

    history.fixPeriods.at(-1)[1] = futureRate;
    
    let runningPrincipal = history.initialPrincipal;
    let runningDate = new Date(history.initialDate);
    let runningMonthIndex = 0;

    for (const p of history.fixPeriods) {
        const newPeriod = new Period(runningPrincipal, runningDate, p[0], p[1], runningMonthIndex, p[2]);
        periods.push(newPeriod);

        newPeriod.doFlightpathSeries();
        newPeriod.doActualSeries(payments);

        runningMonthIndex += p[0];
        runningDate = new Date(runningDate.getFullYear(), runningDate.getMonth() + p[0]);
        runningPrincipal = newPeriod.series.actual.at(-1);

    }

    return periods;

}

