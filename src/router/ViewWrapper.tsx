import React, { PropsWithChildren, useEffect } from 'react';
import Heading from '../components/Heading';

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
      <Heading>{title}</Heading>
      <hr />
      {children}
    </>
  );
};

export default ViewWrapper;
