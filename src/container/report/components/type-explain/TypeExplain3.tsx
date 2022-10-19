import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  data: {
    title: string;
    text: string;
  }[];
}

const Index: FC<IndexProps> = ({ data, title }) => {
  return (
    <div className={styles.wrap3}>
      <div className={styles['explain3-box']}>
        <div className={styles.title}>{title}</div>
        {data.map((item, idx) => (
          <div key={`${item.title}-${item.text}-${idx}`} className={styles.box}>
            <div className={styles['inner-title']}>{item.title}</div>
            <div className={styles.content}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
