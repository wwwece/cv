import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(p) => p.theme.spacing.xxl} 0;
  color: ${(p) =>
    p.theme.colorTheme === 'color' ? p.theme.color.error : undefined};
  font-weight: bold;

  svg {
    fill: ${(p) =>
      p.theme.colorTheme === 'color' ? p.theme.color.error : undefined};
  }

  svg {
    margin-right: ${(p) => p.theme.spacing.md};
  }
`;

interface Props {
  text?: string;
}

const Error: React.FC<Props> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Icon type="Error" />
      {text ?? t('common:commonError')}
    </Container>
  );
};

export default Error;
