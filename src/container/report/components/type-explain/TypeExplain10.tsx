import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './index.less';

interface PropType {
  desc: string; // 描述.
  data: Array<{
    title: string;
    content: Array<{
      label: string; // 标签.
      labelBold: boolean; // 标签是否加粗显示.
      text: string; // 文本.
    }>;
  }>; // 内容
}

/**
 * 类型说明10
 *
 * @param {Array<{ title: string; content: Array<{label: string; labelBold: boolean; text: string }> }>} data 内容
 * @param {string} desc 描述
 */
const Index: FC<PropType> = ({ desc, data }) => {
  return (
    <div className={styles['explain10-box']}>
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
                    <span className={classnames(styles.label, { [styles.bold]: item2.labelBold })}>
                      {item2.label}
                    </span>
                    <span className={styles.text}>{item2.text}</span>
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
