import React from 'react';
import { useTranslation } from 'react-i18next';

const Me = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('aboutMe:p1')}</p>
      <p>{t('aboutMe:p2')}</p>
      <p>{t('aboutMe:p3')}</p>
      <p>{t('aboutMe:p4')}</p>
      <p>{t('aboutMe:p5')}</p>
    </div>
  );
};

export default Me;
