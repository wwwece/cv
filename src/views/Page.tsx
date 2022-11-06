import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import { useStore } from '../store';

interface Props {
  slug: string;
}

const Page: React.FC<Props> = observer(({ slug }) => {
  const {
    pagesStore: { fetchingState, page, getPage },
  } = useStore();

  useEffect(() => {
    getPage({ slug });
  }, [getPage, slug]);

  const isTargetPage = page?.slug === slug;

  return (
    <>
      {!isTargetPage && fetchingState === 'FETCHING' && <Spinner />}

      {isTargetPage && (
        <div dangerouslySetInnerHTML={{ __html: page?.content ?? '' }} />
      )}

      {fetchingState === 'ERROR' && <Error />}
    </>
  );
});

export default Page;
