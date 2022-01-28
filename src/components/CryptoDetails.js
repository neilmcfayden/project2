import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CryptoDetails = () => {

  // State
  let attempts = 0
  const [ crypto, setCrypto ] = useState(null)
  const [ hasError, setHasError ] = useState({ error: false, message: '' })

  // Params
  const { cryptoId } = useParams()

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

  useEffect(() => {
    const getSingleCrypto = async () => {
      try {
        const { data } = await axios.get(`https://api.coincap.io/v2/assets/${cryptoId}`)
        setCrypto(data.data)
      } catch (err) {
        if (attempts < 10) { 
          attempts += 1
          getSingleCrypto()
        } else {
          console.log(err)
          setHasError({ error: true, message: err.message })
        }
      }
    }
    getSingleCrypto()
    setInterval(getSingleCrypto, (1000 * 30))
  }, [cryptoId])

  return (
    <Container className="mt-4">
      {crypto ?
        <div className='crypto-details'>
          <h2>{crypto.name}</h2>
          <hr />
          <Row>
            <Col md="6">
              <h4><span> 💵 </span> Price </h4>
              <p className="lead">$ {numberWithCommas(parseFloat(crypto.priceUsd).toFixed(2))}</p>
              <hr />
              <h4><span> 📈 </span> 24 Hours Percentage Price Change <span> 📉 </span> </h4>
              <hr />
              <p className="lead">% {parseFloat(crypto.changePercent24Hr).toFixed(2)}</p>
              <hr />
              <h4><span> $$$ </span> Current Market Cap </h4>
              <hr />
              <p className="lead">$ {numberWithCommas(parseFloat(crypto.marketCapUsd).toFixed(2))}</p>
              <hr />
              <h4><span> ⛏ </span> Current Supply </h4>
              <hr />
              <p className="lead">{numberWithCommas(parseInt(crypto.supply))}</p>
              <hr />
              <h4><span> 💯 </span> Maximum Supply </h4>
              <hr />
              <p className="lead"> {crypto.maxSupply === null ? "No Maximum supply" : numberWithCommas(parseInt(crypto.maxSupply))}</p>
              <hr />
              <h4><span> 👉 </span> Learn More </h4>
              <hr />
              <p className="lead">{crypto.explorer}</p>
              <hr />
              <Link to="/cryptoindex" className="btn btn-warning">Back to all cryptos</Link>
              </Col>
          </Row>
        </div>
        :
        <h2 className="text-center">
          {hasError.error ? 'Something went wrong, please try again' : 'Loading...'}
        </h2>
      }
    </Container>
  )
}

  export default CryptoDetails