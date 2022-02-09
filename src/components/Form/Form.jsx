import { Fragment, useState, useEffect } from 'react';

import styled from '@emotion/styled';

import ErrorFormMessage from '../ErrorFormMessage/ErrorFormMessage';
import useSelectCurrencies from '../../Hooks/useSelectCurrencies';
import { currencies } from '../../data/currencies';

const InputSubmit = styled.input`
  background-color: #fcd535;
  font-size: 1rem;
  color: #494630;
  font-weight: 600;
  border: none;
  margin-top: 0.8rem;
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: 0.1s all ease-out;
  :hover {
    background-color: #d3b231;
    color: #f0f0f0;
  }
`;

const Form = ({ setCurrenciesFA }) => {
  const [cryptos, setCryptos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const [currency, SelectCurrencies] = useSelectCurrencies(
    'Choose your Currency',
    currencies
  );
  const [cryptocurrency, SelectCryptocurrency] = useSelectCurrencies(
    'Choose your Cryptocurrencies',
    cryptos
  );

  useEffect(() => {
    const getApiData = async () => {
      // La url nos retorna un json, la peticion puede tarder dependiendo de las peticiones llamadas
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      // Await significa bloquear la linea hasta que este lista
      const res = await fetch(url);
      const result = await res.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const objCurrencies = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };

        return objCurrencies;
      });

      setCryptos(arrayCryptos);
    };
    getApiData();
  }, []); // Se hara la consulta una sola vez cuando el componente ya este listo

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, cryptocurrency].includes('')) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    setCurrenciesFA({
      currency,
      cryptocurrency,
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <SelectCurrencies />
        <SelectCryptocurrency />
        {currency}
        {errorMessage && <ErrorFormMessage />}

        <InputSubmit type="submit" value="quote" />
      </form>
    </Fragment>
  );
};

export default Form;
