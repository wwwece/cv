import { observer } from 'mobx-react-lite';
import { lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { useTheme } from 'styled-components';
import { useStore } from '../store';
import { randomColor } from '../theme';
import { StyledIconButton } from './Button.styled';
import Icon from './Icon';

const StyledButton = styled(StyledIconButton)<{ color?: string }>`
  background-color: ${(p) => p.color ?? p.theme.color.background};
  border: 2px solid ${(p) => p.theme.color.foreground};
  transition: 0.75s;
`;

const ColorThemeIconButton: React.FC = observer(() => {
  const { t } = useTranslation();
  const theme = useTheme();

  const {
    uiStore: { toggleColorTheme },
  } = useStore();

  const [color, setColor] = useState(randomColor());

  useEffect(() => {
    const colorChanger = setInterval(() => {
      switch (theme.colorTheme) {
        case 'color':
          const baseColor = theme.color.background;
          setColor((color) =>
            color === baseColor ? lighten(0.25, baseColor) : baseColor
          );
          break;
        default:
          setColor(randomColor());
      }
    }, 750);

    return () => clearInterval(colorChanger);
  }, [theme]);

  return (
    <StyledButton
      onClick={toggleColorTheme}
      color={color}
      aria-label={t('action:changeColorTheme')}
    >
      <Icon type="ChangeTheme" colorKey="foreground" size="1.5rem" />
    </StyledButton>
  );
});

export default ColorThemeIconButton;
