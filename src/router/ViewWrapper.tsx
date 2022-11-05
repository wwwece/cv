import React, { PropsWithChildren, useEffect } from 'react';

interface Props extends PropsWithChildren {
  title: string;
}

const ViewWrapper: React.FC<Props> = ({ title, children }) => {
  // Change document title
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default ViewWrapper;
