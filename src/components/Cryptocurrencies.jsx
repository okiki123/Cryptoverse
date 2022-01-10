import React, {useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFecthing } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((coin) => )
    })
    if(isFecthing) return 'Loading...'
    return (
        <>
            <div className='search-crypto'>
                <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                            <Link to={`/crypto/${currency.id}`}>
                                <Card >
                                    title={`${currency.rank}. ${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl} alt='cryptoimage' />}
                                    hoverable
                                </Card>
                                    <p>Price: {millify(currency.price)}</p>
                                    <p>Market Cap: {millify(currency.marketCap)}</p>
                                    <p>Daily Chnage: {millify(currency.change)}%</p>
                            </Link>
                    </col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;