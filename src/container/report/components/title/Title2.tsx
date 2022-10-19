import React, { FC } from 'react';

import styles from './index.less';

interface IndexProps {
  title: string;
  titleRight?: {
    desc: 'string';
    data: 'string';
    dataColor: 'string';
  };
}

const Index: FC<IndexProps> = ({ title, titleRight }) => {
  return (
    <div className={styles['title2-box']}>
      <div className={styles['title2-wrapper']}>
        <span>{title}</span>
        {titleRight && (
          <div className={styles['title-right']}>
            {titleRight.desc}
            <span className={styles[titleRight.dataColor || 'green']}>{titleRight.data}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
