import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  textTop: string;
  textBottom: string;
  picUrl: string;
}

const Index: FC<IndexProps> = ({ textTop, textBottom, picUrl }) => {
  return (
    <div className={styles['box-wrap']}>
      <div className={styles['box-pic2']}>
        <div className={styles.left}>
          <div className={styles.top}>{textTop}</div>
          <div className={styles.bottom}>{textBottom}</div>
        </div>
        <img src={picUrl} className={styles.right} />
      </div>
    </div>
  );
};

export default Index;
