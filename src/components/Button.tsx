import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

interface Props {
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
