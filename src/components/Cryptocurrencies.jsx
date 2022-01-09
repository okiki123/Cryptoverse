import React, {useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = () => {

    const { data: cryptosList, isFecthing } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos.map((currency) => (
                    <col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}
                    </col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;