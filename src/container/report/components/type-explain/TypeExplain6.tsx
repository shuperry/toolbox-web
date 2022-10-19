import React, { FC } from 'react';

import Hexagon from '../hexagon';
import styles from './index.less';

interface IndexProps {
  bgColor: string;
  textColor?: string;
  text: string;
  data: string;
}

const Index: FC<IndexProps> = ({ data, bgColor = 'green', textColor = 'white', text }) => {
  return (
    <div className={styles['explain6-box']}>
      <Hexagon bgColor={bgColor} textColor={textColor} text={text} />
      <div className={styles.content}>{data}</div>
    </div>
  );
};

export default Index;
