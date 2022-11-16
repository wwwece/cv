import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import { useStore } from '../store';

interface Props {
  slug: string;
}

const Page: React.FC<Props> = observer(({ slug }) => {
  const [isLongAwait, setIsLongAwait] = useState(false);

  const {
    uiStore: { employer },
    pagesStore: { isBusy, fetchingState, page, getPage },
  } = useStore();

  useEffect(() => {
    getPage({ slug });
  }, [getPage, slug]);

  useEffect(() => {
    setIsLongAwait(false);
    const timeout = setTimeout(() => {
      if (isBusy) setIsLongAwait(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isBusy]);

  const isTargetPage = page?.slug === slug;

  const formatContent = (content?: string) => {
    if (content && employer)
      return content.replace('[Add Your Company Here]', `<u>${employer}?</u>`);
    return content ?? '';
  };

  return (
    <>
      {!isTargetPage && isBusy && <Spinner />}

      {isLongAwait && !isTargetPage && isBusy && (
        <div className="text-center">{t('common:initialLoading')}</div>
      )}

      {isTargetPage && (
        <div
          dangerouslySetInnerHTML={{ __html: formatContent(page?.content) }}
        />
      )}

      {fetchingState === 'ERROR' && <Error />}
    </>
  );
});

export default Page;
