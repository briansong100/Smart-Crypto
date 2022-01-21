import React from 'react';
import millify from 'millify';
import { Typography, Row, Statistic, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from  '../components'
import Loader from './Loader'

const {Title } = Typography

const Homepage = () => {
	const { data, isFetching} = useGetCryptosQuery(10)

	if (isFetching) return (<Loader />)

	const globalStats = data?.data?.stats
// 	total: 13141
// total24hVolume: "71233317421"--
// totalCoins: 13141
// totalExchanges: 172 
// totalMarketCap: "2046649707129"
// totalMarkets: 25794
	return (
		<>
		<Title level={2} className='heading' >Global Crypto Stats</Title>
		<Row >
			<Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins} /></Col>
			<Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)   } /></Col>
			<Col span={12}><Statistic title="Total Market Cap" value= {millify(globalStats.totalMarketCap)}/></Col>
			<Col span={12}><Statistic title="Total 24h Volume" value= {millify(globalStats.total24hVolume)} /></Col>
			<Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
		</Row>
		<div className='home-heading-container'>
			<Title className='home-title' level={2} >Top 10 Cryptocurrencies in the World</Title>
			<Title className='show-more' level={3} ><Link to ='/cryptocurrencies'>Show more</Link></Title>
		</div>
		<Cryptocurrencies simplified={true} />
		<div className='home-heading-container'>
			<Title className='home-title' level={2} >Latest Crypto News</Title>
			<Title className='show-more' level={3} ><Link to ='/news'>Show more</Link></Title>
		</div>
		<News simplified={true} />
		</>
	)
};

export default Homepage;
