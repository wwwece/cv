import React from 'react';
import styled from 'styled-components';
import { StyledIconButton } from './Button.styled';
import Icon from './Icon';

const StyledButton = styled(StyledIconButton)`
  margin: 0 ${(p) => p.theme.spacing.lg};
  opacity: 1;
  transition: 0.25s;

  svg {
    fill: ${(p) =>
      p.theme.colorTheme === 'color' ? p.theme.color.foreground : undefined};
  }
  :hover {
    opacity: 0.75;
  }
`;

interface Props {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton: React.FC<Props> = ({ isOpen, onClick, className }) => (
  <StyledButton onClick={onClick} className={className}>
    <Icon type={isOpen ? 'ChevronUp' : 'Menu'} size={40} />
  </StyledButton>
);

export default MenuButton;
