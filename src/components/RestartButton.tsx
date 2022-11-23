import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';
import { StyledIconButton } from './Button.styled';
import Icon from './Icon';

const StyledButton = styled(StyledIconButton)`
  margin: 0 ${(p) => p.theme.spacing.lg};

  background-color: ${(p) =>
    p.theme.colorTheme !== 'color'
      ? p.theme.color.background
      : p.theme.color.foreground};

  transition: 0.25s;

  svg {
    fill: ${(p) =>
      p.theme.colorTheme !== 'color' ? p.theme.color.foreground : undefined};
  }
  :hover {
    svg {
      fill: ${(p) => p.theme.color.error};
    }
  }
`;

const RestartButton: React.FC = observer(() => {
  const {
    uiStore: { setIntroCompleted },
  } = useStore();

  return (
    <StyledButton onClick={() => setIntroCompleted(false)}>
      <Icon type="PowerOff" />
    </StyledButton>
  );
});

export default RestartButton;
