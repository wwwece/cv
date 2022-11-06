import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useStore } from '../store';
import Icon from './Icon';

const StyledButton = styled.button`
  svg {
    fill: ${(p) =>
      p.theme.colorTheme === 'color' ? p.theme.color.foreground : undefined};
    transition: 0.25s;
  }
  :hover {
    svg {
      fill: ${(p) => p.theme.color.error};
    }
  }
`;

const RestartButton: React.FC = observer(() => {
  const {
    uiStore: { colorTheme, setIntroCompleted },
  } = useStore();

  return (
    <StyledButton onClick={() => setIntroCompleted(false)}>
      <Icon
        type="PowerOff"
        colorKey={colorTheme === 'color' ? 'foreground' : 'background'}
      />
    </StyledButton>
  );
});

export default RestartButton;
