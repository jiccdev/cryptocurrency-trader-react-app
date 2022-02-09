import styled from '@emotion/styled';

const Results = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  background-color: #181a20;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  color: white;
`;

const Span = styled.span`
  font-size: 1rem;
  color: #0eba77;
`;

const Image = styled.img`
  margin: 0 auto;
  hieght: 50%;
  width: 50%;
`;

const SectionResA = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const SectionResB = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  hieght: 80px;
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Results>
      <SectionResA>
        <div>
          <Paragraph>
            Price of: <Span>{PRICE}</Span>
          </Paragraph>
          <Paragraph>
            Highest price of the day: <Span>{HIGHDAY}</Span>
          </Paragraph>
          <Paragraph>
            Lowest price of the day : <Span>{LOWDAY}</Span>
          </Paragraph>
          <Paragraph>
            Variation last 24 hrs: <Span>{CHANGEPCT24HOUR}</Span>
          </Paragraph>
          <Paragraph>
            Last update: <Span>{LASTUPDATE}</Span>
          </Paragraph>
        </div>
      </SectionResA>
      <SectionResB>
        <Image
          src={`http://cryptocompare.com/${IMAGEURL}`}
          alt="img-crypto"
        ></Image>
      </SectionResB>
    </Results>
  );
};

export default Result;
