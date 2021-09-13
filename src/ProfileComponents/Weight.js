import Chart from "react-google-charts";



export default function Weight(props){







    return(



        <Chart
            width={'500px'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Weight Data</div>}
            data={props.weight
            }
            options={{
                title: 'Weight',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 20 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '50%', height: '70%' },
                // lineWidth: 25
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    )
}