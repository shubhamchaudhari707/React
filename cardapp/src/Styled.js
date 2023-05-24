import React from 'react'
import styled from 'styled-components';

const TitleWrapper = styled.div`
background:blue;
color: white;
`;

const Title = styled.h1`
  font-size:3rem;
`;

const Button = styled.button`
  background: ${({ primary }) => primary ? "green" : "red"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palegoldenrod;
  border-radius: 3px;
`

const Styled = () => {
  return (
    <>
        <TitleWrapper>
            <Title> Styled Compoent </Title>
        </TitleWrapper>

        <div>
        <Button primary={true}>Normal Button</Button>
        <Button>Primary</Button>
      </div>

    </>
  )
}

export default Styled