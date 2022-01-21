import React from 'react';
import {Col, Row, Typography } from 'antd'
// import {Chart} from 'react-chartjs-2'
// import Chart from 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,


} from 'chart.js';
import { Line } from 'react-chartjs-2';

// import Chart from 'chart.js/auto'
// import {CategoryScale} from 'chart.js'

// import {CategoryScale} from 'chart.js'; Chart.register(CategoryScale)
// Chart.register(
//   CategoryScale
//  )

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,


)

const {Title} =Typography

const LineChart = ({ coinHistory, currentPrice, coinName}) => {

	const coinPrice=[] 
	const coinTimestamp =[]

	for ( let i=0; i< coinHistory?.data?.history?.length ; i +=1 ) {
		coinPrice.push(coinHistory.data.history[i].price)
	}
	for ( let i=0; i< coinHistory?.data?.history?.length ; i +=1 ) {
		coinTimestamp.push( new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
	}

	// console.log({coinPrice});
	// console.log({coinTimestamp});
	const data = {
    labels: coinTimestamp,
    datasets: [{
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      }],
  };

  const options = {
    scales: {
      price: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
	// const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

	// 		yAxes: [
	// 			{
	// 				display: true,
	// 				scaleLabel: {
	// 					show: true,
	// 					labelString: 'Value'
	// 				},
	// 				ticks: {
	// 					suggestedMin: -10,
	// 					suggestedMax: 250
	// 				}
	// 			}
	// 		]

	// const data = {
  //   labels: coinTimestamp,
  //   datasets: [
  //     {
  //       label: 'Price In USD',
  //       data: coinPrice,
  //       fill: false,
  //       backgroundColor: '#0071bd',
  //       borderColor: '#0071bd',
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           suggestedMin: 0
  //         },
  //       },
  //     ],
  //   },
  // };
	// const data ={
	// 	labels: coinTimeStamp,
	// 	datasets: [{
	// 		label:"Price in USD",
	// 		data: coinPrice,
	// 		fill: false,
	// 		backgroundColor: '#0071bd',
	// 		borderColor: '#0071bd'
	// 	}]
	// }
	// const options ={
	// 	scales: {
	// 		yAxes: [{
	// 			ticks:{suggestedMin: 0,}
	// 		}]
	// 	}
	// }

	// const options = {
	// 	responsive: true,
	// 	title: {
	// 		display: true,
	// 		text: 'Chart.js Line Chart'
	// 	},
	// 	tooltips: {
	// 		mode: 'label'
	// 	},
	// 	hover: {
	// 		mode: 'dataset'
	// 	},
	// 	scales: {
	// 		xAxes: [
	// 			{
	// 				display: true,
	// 				scaleLabel: {
	// 					show: true,
	// 					labelString: 'Month'
	// 				}
	// 			}
	// 		],
	// 		yAxes: [
	// 			{
	// 				display: true,
	// 				scaleLabel: {
	// 					show: true,
	// 					labelString: 'Value'
	// 				},
	// 				ticks: {
	// 					suggestedMin: -10,
	// 					suggestedMax: 250
	// 				}
	// 			}
	// 		]
	// 	}
	// }
	
	return (
		<>
			<Row className='chart-header'>
				<Title level={3} className="chart-title">{coinName} Price Chart</Title>
				<Col className='price-container'>
					<Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
					<Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
				</Col>
				{/* <Chart type='line' data={data}  /> */}
				{/* <Chart type='line' data={data} /> */}
			</Row>

				<Line data={data} options={options}  />
	
		</>
	)
};

export default LineChart;
