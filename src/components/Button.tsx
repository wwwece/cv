import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton, StyledButtonProps } from './Button.styled';

export interface ButtonProps extends StyledButtonProps {
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
