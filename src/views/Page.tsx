import { t } from 'i18next';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import { useStore } from '../store';
import HelloEventButton from '../components/HelloEventButton';
import TextWithTypingEffect from '../components/TextWithTypingEffect';

interface Props {
  slug: string;
}

const Page: React.FC<Props> = observer(({ slug }) => {
  const [isLongAwait, setIsLongAwait] = useState(false);
  const [isVeryLongAwait, setIsVeryLongAwait] = useState(false);

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

  useEffect(() => {
    setIsVeryLongAwait(false);
    const timeout = setTimeout(() => {
      if (isBusy) setIsVeryLongAwait(true);
    }, 7000);

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
      {!isTargetPage && isBusy && (
        <>
          <Spinner />
          {isLongAwait && (
            <p className="text-center">
              <TextWithTypingEffect text={t('common:initialLoading')} />
            </p>
          )}
          {isVeryLongAwait && (
            <p className="text-center">
              <TextWithTypingEffect text={t('common:longInitialLoading')} />
            </p>
          )}
        </>
      )}

      {isTargetPage && (
        <div
          dangerouslySetInnerHTML={{ __html: formatContent(page?.content) }}
        />
      )}

      {slug === 'about-me' && <HelloEventButton />}

      {fetchingState === 'ERROR' && <Error />}
    </>
  );
});

export default Page;
