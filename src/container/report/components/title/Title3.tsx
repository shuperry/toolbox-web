import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
}

const Index: FC<IndexProps> = ({ title }) => {
  return (
    <div className={styles['title3-wrapper']}>
      <span>{title}</span>
    </div>
  );
};

export default Index;
