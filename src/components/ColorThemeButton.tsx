import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useStore } from '../store';
import { randomColor } from '../theme';
import Button, { ButtonProps } from './Button';

const StyledButton = styled(Button)<{ color: string }>`
  border-color: ${(p) => (p.theme.colorTheme === 'bw' ? p.color : undefined)};
  width: 200px;
  opacity: 0.75;
  :hover {
    opacity: 0.9;
  }
`;

const RandomColor = styled.span<{ color: string }>`
  color: ${(p) => (p.theme.colorTheme === 'bw' ? p.color : undefined)};
`;

interface Props extends Omit<ButtonProps, 'onClick'> {}

const ColorThemeButton: React.FC<Props> = observer((props) => {
  const { t } = useTranslation();

  const {
    uiStore: { colorTheme, toggleColorTheme },
  } = useStore();

  const getButtonText = () => {
    switch (colorTheme) {
      case 'color':
        return t('action:inBw');
      default:
        return t('action:inColor');
    }
  };

  return (
    <StyledButton
      {...props}
      text={
        <>
          {getButtonText()
            // Each letter should have a random color
            .split('')
            .map((char, i) => (
              <RandomColor key={i} color={randomColor()}>
                {char}
              </RandomColor>
            ))}
        </>
      }
      onClick={toggleColorTheme}
      color={randomColor()}
    />
  );
});

export default ColorThemeButton;
