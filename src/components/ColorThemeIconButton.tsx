import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../store';
import { randomColor } from '../theme';
import Icon from './Icon';

const BUTTON_SIZE = '60px';

const StyledButton = styled.button<{ color?: string }>`
  background-color: ${(p) => p.color ?? p.theme.color.background};
  border-radius: ${BUTTON_SIZE};
  border: 2px solid ${(p) => p.theme.color.foreground};
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.75s;
`;

const ColorThemeIconButton: React.FC = observer(() => {
  const [color, setColor] = useState(randomColor());

  const {
    uiStore: { toggleColorTheme },
  } = useStore();

  useEffect(() => {
    const colorChanger = setInterval(() => {
      setColor(randomColor());
    }, 750);

    return () => clearInterval(colorChanger);
  }, []);

  return (
    <StyledButton
      onClick={toggleColorTheme}
      color={color}
      aria-label="Change theme"
    >
      <Icon type="ChangeTheme" colorKey="foreground" size="1.5rem" />
    </StyledButton>
  );
});

export default ColorThemeIconButton;
