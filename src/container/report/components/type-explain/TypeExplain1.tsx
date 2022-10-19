import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  titleType: string;
  data: string;
}

const Index: FC<IndexProps> = ({ titleType, data }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles['explain1-box']}>
        <div className={styles.left}>{titleType}</div>
        <div className={styles.right}>{data}</div>
      </div>
    </div>
  );
};

export default Index;
