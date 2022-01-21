import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {
	
	const count = simplified ? 10: 100

	const { data: cryptosList, isFetching} = useGetCryptosQuery(count)
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
	// console.log(cryptos);
	const [searchTerm, setSearchTerm] = useState('');

	
	useEffect(() => {
		const filterdData = cryptosList?.data?.coins.filter( conin => conin?.name.toLowerCase().includes( searchTerm.toLowerCase()))
		setCryptos(filterdData)
	}, [searchTerm, cryptosList ]);
	
	if (isFetching) return  <Loader />

	return (
		<>
			{ !simplified && (
			<div className='search-crypto'>
				<Input placeholder='Search Cryptocurrency' onChange={e=>setSearchTerm(e.target.value)}/>
			</div>
				) }
			<Row className='crypto-card-container' gutter={[32,32]} >
				{cryptos?.map(crypto =>(
					<Col xs={24} sm ={12} lg={6} className='crypto-card' key={crypto.uuid}>
						<Link to={`/crypto/${crypto.uuid}`}>
							<Card 
								title={` ${crypto.rank}. ${crypto.name}`}
								extra= {<img src={crypto.iconUrl} className='crypto-image' alt=""  />} 
								hoverable
							>
								<p>Price: {millify(crypto.price)}</p>
								<p>Market Cap: {millify(crypto.marketCap)}</p>
								<p>Daily Change: {millify(crypto.change)}%</p>
							</Card>
						</Link>
					</Col>
				))}

			</Row>
		</>
	)
 	
};

export default Cryptocurrencies;
