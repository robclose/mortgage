export class Payment {
    constructor(startDate, endDate, amount) {
            this.startDate = new Date(startDate);
            this.startDate.setDate(15);
            this.endDate = !endDate ? null : new Date(endDate);
            if (this.endDate) this.endDate.setDate(15);
            
            this.amount = amount;
    }
    isBetween (thisMonth, nextMonth) {
        return nextMonth > this.startDate && (!this.endDate || thisMonth < this.endDate);
    }
}