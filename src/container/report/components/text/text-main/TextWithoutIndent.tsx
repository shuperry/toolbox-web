import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  data: string;
}
const Index: FC<IndexProps> = ({ data }) => {
  return (
    <div
      className={styles.box}
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    ></div>
  );
};

export default Index;
