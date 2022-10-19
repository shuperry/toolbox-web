import React, { FC } from 'react';

import styles from './index.less';

interface PropType {
  desc: string; // 描述.
  data: Array<{
    title: string;
    content: string[];
  }>; // 内容
}

/**
 * 类型说明9
 *
 * @param {Array<{ title: string; content: string[] }>} data 内容
 * @param {string} desc 描述
 */
const Index: FC<PropType> = ({ desc, data }) => {
  return (
    <div className={styles['explain9-box']}>
      <div className={styles['content-wrap']}>
        <div className={styles.desc}>{desc}</div>
        {(data || []).map((item1, idx1) => (
          <div key={`explain9-data-item-${idx1}`} className={styles.group}>
            <div className={styles['title-wrapper']}>
              <div className={styles.dot}></div>
              <span className={styles.title}>{item1.title}</span>
            </div>

            {(item1.content || []).length > 0 && (
              <div className={styles['content-wrapper']}>
                {item1.content.map((item2, idx2) => (
                  <div
                    key={`explain9-data-item-${idx1}-content-${idx2}`}
                    className={styles['content']}
                  >
                    {item2}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
