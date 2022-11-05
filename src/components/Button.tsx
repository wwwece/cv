import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { darken } from 'polished';

interface StyledProps {
  negative?: boolean;
}

const StyledButton = styled.button<StyledProps>`
  border: 2px solid
    ${(p) => p.theme.color[p.negative ? 'background' : 'foreground']};
  background-color: ${(p) =>
    p.theme.color[p.negative ? 'foreground' : 'background']};
  color: ${(p) => p.theme.color[p.negative ? 'background' : 'foreground']};
  padding: 0.5rem 1rem;
  border-radius: ${(p) => p.theme.borderRadius.xl};
  cursor: pointer;
  ${(p) => p.theme.font.size[18]};
  font-family: ${(p) => p.theme.font.secondary};
  text-transform: uppercase;
  font-weight: bold;

  :hover {
    background-color: ${(p) =>
      darken(0.05, p.theme.color[p.negative ? 'foreground' : 'background'])};
  }
`;

export interface ButtonProps extends StyledProps {
  text?: string | JSX.Element;
  textKey?: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, textKey, ...props }) => {
  const { t } = useTranslation();

  const getText = () => {
    if (textKey) return t(textKey);
    return text ?? '';
  };

  return (
    <StyledButton type="button" {...props}>
      {getText()}
    </StyledButton>
  );
};

export default Button;
