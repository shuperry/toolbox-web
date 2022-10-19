import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  data: string;
}

const Index: FC<IndexProps> = ({ title, data }) => {
  return (
    <div className={styles['explain5-box']}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{data}</div>
    </div>
  );
};

export default Index;
