import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './index.less';

interface IndexProps {
  data: string;
}

const Index: FC<IndexProps> = ({ data }) => {
  return (
    <div
      className={classnames(styles.box, styles.indent)}
      dangerouslySetInnerHTML={{ __html: data }}
    ></div>
  );
};

export default Index;
