import React, { FC } from 'react';
import styles from './index.less';

interface IndexProps {
  leftText: string;
  rightText: string;
}

const Index: FC<IndexProps> = ({ leftText, rightText }) => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>{leftText}</div>
      <div className={styles.right} dangerouslySetInnerHTML={{ __html: rightText }}></div>
    </div>
  );
};

export default Index;
