const state = {
    labels: ['H2', 'H6', 'H5',
        'H3', 'H9','H1&Tansa','H15'],
    datasets: [
        {
            label: 'TechCup Scores',
            backgroundColor: '#0B2D5C',
            borderColor: 'rgba(0,0,0,1)',
            barPercentage: 0.2,
            data: [350, 345, 320, 185, 118.75,50,30]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
        display: false,
        text: 'TechCup Scores',
        fontSize: 20,
        
    },
    legend: {
        display: false,
        position: 'right'
    },
    layout:{
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                scaleFontSize: 20,
                fontFamily: 'Montserrat',
                fontColor: "#0B2D5C",
                fontStyle:"bold"
            },
            gridLines: {
                display: false
            },
        }],
        yAxes: [{
            ticks: {
                suggestedMin: 0,
                suggestedMax: 400
            }

        }]
    }


}

export {state,options};