export const history = {

    initialDate : "2014-02-01",
    initialPrincipal : 225_000,

    fixPeriods : [
        //[fix length in months, interest rate, mortgage term]
        [60, 4.57, 35],
        [60, 2.09, 30],
        [60, 3.94, 25],
        [240, null, 20]
    ],

    payments : [
        // [start date, end date, amount]
        ["2019-03-15", "2021-05-15", 250],
        ["2021-06-15", "2026-02-15", 50],
        ["2024-06-15", "2024-06-15", 1000],
        ["2025-08-15", "2025-08-15", 20000]
    ]

}
