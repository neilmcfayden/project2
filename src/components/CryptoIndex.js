import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Import Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CryptoIndex = () => {

let attempts = 0
const [ cryptos, setCryptos ] = useState([])
const [ hasError, setHasError ] = useState({ error: false, message: '' })

useEffect(() => {
  const getCryptos = async () => {
    try {
      const { data } = await axios.get('https://api.coincap.io/v2/assets')
      setCryptos(data.data)
    } catch (err) {
      if (attempts < 10) {
        attempts += 1
        getCryptos()
      } else {
        setHasError({ error: true, message: err.message })
        }
      }
    }
    getCryptos()
  }, [])

  return (
    <Container className="mt-4">
      {cryptos ?
      <Row>
          <>
            {cryptos.map(crypto => {
              const { name, symbol, id } = crypto
              return (
                <Col key={symbol} md="6" lg="4" className='crypto mb-4'>
                  <Link to={`/cryptos/${id}`}>
                    <Card className='h-100'>
                      <Card.Footer className="text-center">
                        {name}
                        <em className='d-block'>{symbol}</em>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </>
      </Row>
      :
      <h2 className="text-center">
          {hasError.error ? 'Something went wrong, please try again' : 'Loading...'}
        </h2>
      }
    </Container>
    )
  }
  export default CryptoIndex