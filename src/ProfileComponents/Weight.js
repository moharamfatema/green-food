import Chart from "react-google-charts";



export default function Weight({props}){



    console.log(props)
    let currentWeight = props[(props.length)-1][1];


    return(
        <>
            <div>Current Weight = {currentWeight}</div>

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Line"
                loader={<div>Loading Weight Data</div>}
                data={[['date', 'weight'],
                    [Date(),50]]}
                options={{
                    title: 'Weight',
                    hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
                    vAxis: {minValue: 20},
                    // For the legend to fit, we make the chart area smaller
                    chartArea: {width: '50%', height: '70%'},
                    // lineWidth: 25
                }}
                // For tests
                rootProps={{'data-testid': '1'}}
            /></>
    )
}