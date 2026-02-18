
export class Period
{
    constructor(principal, start, lengthMonths, rate, startMonthIndex, term) {
        this.principal = principal;
        this.startMonthIndex = startMonthIndex;
        this.startDate = new Date(start);
        this.startDate.setDate(1);
        this.endDate = new Date(this.startDate);
        this.endDate.setMonth(this.startDate.getMonth() + lengthMonths);
        this.rate = {};
        this.rate.annual = rate / 100;
        this.rate.monthly = this.rate.annual / 12;
        this.rate.daily = this.rate.annual / 365;

        this.term = term * 12;

        var compoundRate = Math.pow((1 + this.rate.monthly), this.term);
        this.monthlyPayment = this.principal * (this.rate.monthly * compoundRate) / (compoundRate - 1);

        this.series = {};
        this.labels = [];

    }

    doFlightpathSeries () {
        
        let runningBalance = this.principal;
        let runningDate = this.startDate;
        let runningMonthIndex = this.startMonthIndex;
        let series = [];
        

        while( runningBalance > 0 ) {

            const nextMonth = new Date(
                runningDate.getFullYear(),
                runningDate.getMonth() + 1, 
                1
            );
            const daysInMonth = Math.round((nextMonth - runningDate) / 86400 / 1000);
            runningDate = nextMonth;

            let label = runningDate.toISOString().slice(0,7);
            this.labels.push(label);
            series.push(Math.round(runningBalance));
            runningBalance *= this.rate.daily * daysInMonth + 1;
            runningBalance -= this.monthlyPayment;
        }       
        
        this.series.flightpath = series;
    }

    doActualSeries (payments) {
        
        let runningBalance = this.principal;
        let runningDate = this.startDate;
        let runningMonthIndex = this.startMonthIndex;
        let series = [];

        while( runningBalance > 0 && runningDate <= this.endDate) {

            const nextMonth = new Date(
                runningDate.getFullYear(),
                runningDate.getMonth() + 1, 
                1
            );
            const daysInMonth = Math.round((nextMonth - runningDate) / 86400 / 1000);
            
            let label = runningDate.toISOString().slice(0,7);

            series[runningMonthIndex++] = Math.round(runningBalance);
            runningBalance *= this.rate.daily * daysInMonth + 1;
            runningBalance -= this.monthlyPayment;
            
            payments.filter(p => p.isBetween(runningDate, nextMonth)).forEach(p => runningBalance -= p.amount);
            
            runningDate = nextMonth;
        }       
        
        this.series.actual = series;
    }
}
