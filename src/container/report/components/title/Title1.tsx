import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  num: number;
}

const Index: FC<IndexProps> = ({ title, num }) => {
  return (
    <div className={styles['title1-box']}>
      <div className={styles['title1-wrapper']}>
        <span className={styles.num}>{num}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Index;
