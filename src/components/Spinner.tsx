import React from 'react';
import styled from 'styled-components';
import { randomColor } from '../theme';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  align-items: center;
  margin: ${(p) => p.theme.spacing.xxl};
`;

const StyledSpinner = styled.div`
  animation: rotating 1.5s linear infinite;
  svg {
    fill: ${(p) =>
      p.theme.colorTheme === 'color' ? randomColor() : undefined};
  }
`;

const Spinner: React.FC = () => (
  <Container>
    <StyledSpinner>
      <Icon type="Spinner" size="5rem" />
    </StyledSpinner>
  </Container>
);

export default Spinner;
