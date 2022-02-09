import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// import businessCrypto3D from './img/businessCrypto3D.png';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import Spinner from './components/Spinner/Spinner';
import { currencies } from './data/currencies';

const Container = styled.div`
  max-width: 580px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  color: #eaecef;
  font-size: 1.7rem;
  text-align: start;
`;

const Paragraph = styled.p`
  color: #adb2c1;
  font-size: 0.9rem;
  text-align: start;
  font-weight: 300;
`;

const Span = styled.span`
  color: #fcd535;
`;

function App() {
  const [currenciesFA, setCurrenciesFA] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(currenciesFA).length > 0) {
      const quoteCrypto = async () => {
        setLoading(true);
        setResult({});

        const { currency, cryptocurrency } = currenciesFA; //check
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

        const res = await fetch(url);
        const result = await res.json();

        setResult(result.DISPLAY[cryptocurrency][currency]);

        setLoading(false);
      };

      quoteCrypto();
    }
  }, [currenciesFA]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Container>
        <div>
          <Heading>
            Instant cryptocurrency <Span>trading</Span>
            <Paragraph>
              Quote the most important cryptocurrencies of the crypto market
            </Paragraph>
          </Heading>
          <Form currencies={currenciesFA} setCurrenciesFA={setCurrenciesFA} />

          {loading && <Spinner />}

          {result.PRICE && <Result result={result} />}
        </div>
        {/* <Image src={businessCrypto3D} alt="Crypto imagen 3D" /> */}
      </Container>
    </div>
  );
}

export default App;
