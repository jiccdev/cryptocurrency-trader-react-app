import React from 'react';
import styled from '@emotion/styled';

const Paragraph = styled.p`
  background-color: #fff5f5;
  color: #c53030;
  font-size: 0.9rem;
  padding: 1rem;
  border: 1px solid #c53030;
  border-radius: 5px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const ErrorFormMessage = () => {
  return (
    <div>
      <Paragraph>
        All fields are <Span>required!</Span>
      </Paragraph>
    </div>
  );
};

export default ErrorFormMessage;
