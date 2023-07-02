import React, { PropsWithChildren, useEffect } from 'react';
import Heading from '../components/Heading';
import TextWithTypingEffect from '../components/TextWithTypingEffect';

interface Props extends PropsWithChildren {
  title: string;
}

const ViewWrapper: React.FC<Props> = ({ title, children }) => {
  // Change document title
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <>
      <Heading>
        <TextWithTypingEffect text={title} intervalTime={25} />
      </Heading>
      <hr />
      {children}
    </>
  );
};

export default ViewWrapper;
