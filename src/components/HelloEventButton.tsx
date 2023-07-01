import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const Container = styled.div`
  border-left: 1px solid ${(p) => p.theme.color.background};
  border-right: 1px solid ${(p) => p.theme.color.background};
  margin: 4rem;
  padding: 1rem 2rem;
  text-align: center;

  p {
    font-size: 0.85rem;
    font-style: italic;
  }
`;

const HelloEventButton: React.FC = observer(() => {
  const { t } = useTranslation();

  const {
    uiStore: { employer },
    eventsStore: { triggerEvent, helloSent },
  } = useStore();

  if (!employer) return null;

  return (
    <Container>
      <h2>{t('common:helloEvent.title')}</h2>

      <p>{t('common:helloEvent.description', { employer })}</p>

      {helloSent && <p>{t('common:helloEvent.thankYou')}</p>}

      {!helloSent && (
        <Button
          textKey={t('common:helloEvent.button', { employer })}
          onClick={() => {
            triggerEvent('hello', { employer });
          }}
        />
      )}
    </Container>
  );
});

export default HelloEventButton;
