import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  data: object[];
}

const Index: FC<IndexProps> = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {(data || []).map((v, i) => (
        <li key={`${v}-${i}`} className={styles.li}>
          <span className={styles.num}>{i + 1}</span>
          <span className={styles.content}>{v}</span>
        </li>
      ))}
    </ul>
  );
};

export default Index;
