import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { randomColor } from '../theme';

const headingCss = css`
  color: ${(p) => (p.theme.colorTheme === 'color' ? randomColor() : undefined)};
`;
const H1 = styled.h1`
  ${headingCss};
`;
const H2 = styled.h2`
  ${headingCss};
`;
const H3 = styled.h3`
  ${headingCss};
`;
const H4 = styled.h4`
  ${headingCss};
`;
const H5 = styled.h5`
  ${headingCss};
`;
const H6 = styled.h6`
  ${headingCss};
`;

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends PropsWithChildren {
  textKey?: string;
  level?: HeadingLevel;
  inColor?: boolean;
}

const Heading: React.FC<Props> = ({
  textKey,
  level = 'h1',
  inColor,
  children,
}) => {
  const { t } = useTranslation();

  const headingColor = inColor ? randomColor() : undefined;
  const style = { color: headingColor };

  const headingText = textKey ? t(textKey) : children ?? '';

  switch (level) {
    case 'h6':
      return <H6 style={style}>{headingText}</H6>;
    case 'h5':
      return <H5 style={style}>{headingText}</H5>;
    case 'h4':
      return <H4 style={style}>{headingText}</H4>;
    case 'h3':
      return <H3 style={style}>{headingText}</H3>;
    case 'h2':
      return <H2 style={style}>{headingText}</H2>;
    default:
      return <H1 style={style}>{headingText}</H1>;
  }
};

export default Heading;
