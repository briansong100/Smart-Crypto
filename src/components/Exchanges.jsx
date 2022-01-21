import React from 'react';
import { useGetExchangesQuery } from '../services/cryptoApi';
import {Col, Row, Typography, Collapse, Avatar} from 'antd'
import Loader  from './Loader';
import millify from 'millify';


const { Panel } = Collapse;
const {Title, Text} = Typography

const data = { 
	"stats":{
		"24hVolume":"6554685985.623574",
		"total":198
	},
	"exchanges":[
		{
			"coinrankingUrl":"https://coinranking.com/exchange/-zdvbieRdZ+binance",
			"uuid":"-zdvbieRdZ",
			"name":"Binance",
			"iconUrl":"https://cdn.coinranking.com/mDTK5qrmq/binance.svg",
			"numberOfMarkets":3,
			"24hVolume":"776337030.2052088",
			"rank":1,
			"marketShare":"12.22",
			"verified":true,
			"recommended":true,
			"descripstion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus modi minima recusandae magnam animi laboriosam rem enim consequuntur quae aspernatur, nisi laudantium sunt odio. Minus harum voluptatibus voluptas iste."
		},
		{
			"coinrankingUrl":"https://coinranking.com/exchange/XHp8eCjIDc+zb",
			"uuid":"XHp8eCjIDc",
			"name":"ZB",
			"iconUrl":null,
			"lastTickerCreatedAt":1546960123000,
			"numberOfMarkets":128,
			"24hVolume":"693976176.906341",
			"rank":2,
			"marketShare":"10.92",
			"verified":false,
			"recommended":false,
			"descripstion" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus modi minima recusandae magnam animi laboriosam rem enim consequuntur quae aspernatur, nisi laudantium sunt odio. Minus harum voluptatibus voluptas iste."
		}
	]
}

const Exchanges = () => {

	// const { data, isFetching} = useGetExchangesQuery()
	// const exchangesList = data?.data?.exchanges;
	// const exchangesStats = data?.data?.stats;
	const exchangesList = data.exchanges;
	const exchangesStats = data.stats;
	// console.log({exchangesList});
	console.log(exchangesStats['24hVolume'])
	// if (isFetching) return <Loader />

	return (
		<>
			<Row style={{margin:'20px 30px 0 40px'}}>
				<Col span={12}><Title level={4}>24h Volume: {millify(exchangesStats['24hVolume'])}</Title></Col>
				<Col span={12}><Title level={4}>Total: {exchangesStats.total}</Title></Col>
			</Row>
			<Row style={{margin:'20px 30px 0 40px'}}  >
						<Col span={9} ><Title level={5}>Currency</Title></Col>
						<Col span={5}><Title level={5}>24h Volume</Title></Col>
						<Col span={5}><Title level={5}>Markets</Title></Col>
						<Col span={5}><Title level={5}>Share</Title></Col> 
			</Row>
					
			<Row>
				<Collapse accordion style={{width:'100%'}}>
							
					{exchangesList.map( (exchange,i) =>
					<Panel  key ={i} header={(
						<>
							<Col span={9}>
								
									<Text><strong>{exchange.rank}.</strong></Text>
									<Avatar className="exchange-image" src={exchange?.iconUrl} />
									<Text><strong>{exchange.name}</strong></Text>
							</Col>
							<Col span={5}>${millify(exchange["24hVolume"] )}</Col>
							<Col span={5}>{millify(exchange.numberOfMarkets)}</Col>
							<Col span={5}>{millify(exchange.marketShare)}%</Col>
						</>
					)}>
					<p>{exchange?.descripstion}</p>	
					</Panel>
					)}
				</Collapse>
			</Row>	
		</>
	)
};
export default Exchanges
			// const data = {
// 	"exchanges"
// 	0:{10 items
// 	"coinrankingUrl":"https://coinranking.com/exchange/-zdvbieRdZ+binance"
// 	"uuid":"-zdvbieRdZ"
// 	"name":"Binance"
// 	"iconUrl":"https://cdn.coinranking.com/mDTK5qrmq/binance.svg"
// 	"numberOfMarkets":3
// 	"24hVolume":"776337030.2052088"
// 	"rank":1
// 	"marketShare":"12.22"
// 	"verified":true
// 	"recommended":true
// 	}



// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// ReactDOM.render(
//   <Collapse defaultActiveKey={['1']} onChange={callback}>
//     <Panel header="This is panel header 1" key="1">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 2" key="2">
//       <p>{text}</p>
//     </Panel>
//     <Panel header="This is panel header 3" key="3">
//       <p>{text}</p>
//     </Panel>
//   </Collapse>,
//   mountNode,
// );

