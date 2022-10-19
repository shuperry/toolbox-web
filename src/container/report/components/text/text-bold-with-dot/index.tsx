import React, { FC, memo } from 'react';
import styles from './index.less';

interface IndexProps {
  data: string;
  dotColor: string;
}

const Index: FC<IndexProps> = ({ data, dotColor = 'grey' }) => {
  return (
    <div className={styles.box}>
      <span className={styles[dotColor]} />
      {data}
    </div>
  );
};

export default Index;
