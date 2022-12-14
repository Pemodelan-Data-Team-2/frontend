import { tokens } from "../theme";

export const annualRevenuesLineChart = [
    {
        'id': 'idn',
        'data': [
            {'x': '2012', 'y': 485244.82},
            {'x': '2013', 'y': 685427.55},
            {'x': '2014', 'y': 575219.28},
            {'x': '2015', 'y': 459797.58},
            {'x': '2016', 'y': 412617.45},
            {'x': '2017', 'y': 592859.3},
            {'x': '2018', 'y': 548248.78},
            {'x': '2019', 'y': 444777.59},
            {'x': '2020', 'y': 598127.75},
            {'x': '2021', 'y': 502389.72},
            {'x': '2022', 'y': 416671.38}
        ]
    },
    {
        'id': 'usa',
        'data': [
            {'x': '2012', 'y': 597573.34},
            {'x': '2013', 'y': 646014.6},
            {'x': '2014', 'y': 574809.17},
            {'x': '2015', 'y': 525040.96},
            {'x': '2016', 'y': 487645.95},
            {'x': '2017', 'y': 528995.11},
            {'x': '2018', 'y': 625260.44},
            {'x': '2019', 'y': 472591.93},
            {'x': '2020', 'y': 583380.51},
            {'x': '2021', 'y': 632495.06},
            {'x': '2022', 'y': 614017.0}
        ]
    }
]

// export const quarterlyRevenuesLineChart = [
//     {
//         'id': 'idn',
//         'data': [
//             {'x': 'Q1', 'y': 134748.6},
//             {'x': 'Q2', 'y': 90536.61},
//             {'x': 'Q3', 'y': 148142.77},
//             {'x': 'Q4', 'y': 128961.74}
//         ]
//     },
//     {
//         'id': 'usa',
//         'data': [
//             {'x': 'Q1', 'y': 166876.33},
//             {'x': 'Q2', 'y': 174728.0},
//             {'x': 'Q3', 'y': 153682.02000000002},
//             {'x': 'Q4', 'y': 137208.71}
//         ]
//     }
// ]

// export const monthlyRevenuesLineChart = [
//     {
//         'id': 'idn',
//         'data': [
//             {'x': '1', 'y': 45296.47},
//             {'x': '2', 'y': 6977.16},
//             {'x': '3', 'y': 82474.97},
//             {'x': '4', 'y': 15042.630000000001},
//             {'x': '5', 'y': 26872.420000000002},
//             {'x': '6', 'y': 48621.56},
//             {'x': '7', 'y': 46718.92},
//             {'x': '8', 'y': 56960.37},
//             {'x': '9', 'y': 44463.479999999996},
//             {'x': '10', 'y': 29306.4},
//             {'x': '11', 'y': 61831.32},
//             {'x': '12', 'y': 37824.020000000004}
//         ]
//     },
//     {
//         'id': 'usa',
//         'data': [
//             {'x': '1', 'y': 78356.86},
//             {'x': '2', 'y': 3677.24},
//             {'x': '3', 'y': 84842.23},
//             {'x': '4', 'y': 30371.88},
//             {'x': '5', 'y': 64846.990000000005},
//             {'x': '6', 'y': 79509.13},
//             {'x': '7', 'y': 56534.95},
//             {'x': '8', 'y': 45274.01},
//             {'x': '9', 'y': 51873.060000000005},
//             {'x': '10', 'y': 43039.17},
//             {'x': '11', 'y': 48294.44},
//             {'x': '12', 'y': 45875.1}
//         ]
//     }
// ]

annualRevenuesLineChart[0].color = tokens("dark").greenAccent[500]
annualRevenuesLineChart[1].color = tokens("dark").blueAccent[300]

// quarterlyRevenuesLineChart[0].color = tokens("dark").greenAccent[500]
// quarterlyRevenuesLineChart[1].color = tokens("dark").blueAccent[300]

// monthlyRevenuesLineChart[0].color = tokens("dark").greenAccent[500]
// monthlyRevenuesLineChart[1].color = tokens("dark").blueAccent[300]

