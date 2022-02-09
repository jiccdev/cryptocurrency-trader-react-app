import { Fragment, useState } from 'react';

import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  padding-bottom: 0.5rem;
  color: #eaecef;
  font-weight: 500;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  border: none;
  margin: 0rem 0 0.5rem 0;
  padding-bottom: 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.1rem;
  color: #eaecef;
  background-color: #2b3139;
  padding: 1rem;
`;

const Option = styled.option`
  font-size: 1.1rem;
  color: #eaecef;
  background-color: #2b3139;
  margin: 1rem;
`;

const useSelectCurrencies = (label, options) => {
  const [state, setState] = useState('');

  const SelectCurrencies = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <Option value="">-- Select --</Option>
        {options.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
    </Fragment>
  );

  const SelectCryptoCurrencies = () => (
    <Fragment>
      <Label>{label}</Label>
    </Fragment>
  );

  return [state, SelectCurrencies];
};

export default useSelectCurrencies;
