import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid white;
  background-color: ${(p) => p.theme.color.background};
  color: ${(p) => p.theme.color.foreground};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  ${(p) => p.theme.font.size[18]};
  font-family: ${(p) => p.theme.font.main};
`;

interface Props {
  text?: string;
  textKey?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ text, textKey, onClick }) => {
  const { t } = useTranslation();

  const getText = () => {
    if (textKey) return t(textKey);
    return text ?? '';
  };

  return (
    <StyledButton type="button" onClick={onClick}>
      {getText()}
    </StyledButton>
  );
};

export default Button;
