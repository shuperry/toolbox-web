import React, { FC, useEffect } from 'react';
import { CharBarFullTypes } from '../types';
import classNames from 'classnames';
import styles from './index.less';

const BarItem: FC<CharBarFullTypes.ItemPropType> = ({ item, role }) => {
  return (
    <div className={styles.barItem}>
      <div className={classNames(styles['item-label'], { [styles.gray]: item.gray })}>
        {item.label}
      </div>
      <div className={styles['item-bd']}>
        <div className={styles['bd-val']} style={{ width: `${item.value}%` }}></div>
      </div>
      <div className={classNames(styles['item-percent'], styles.gray)}>
        {item.percent
          ? `超过${item.percent}%的${role === 'student' ? '同龄人' : '学生家长'}`
          : `未诊断`}
      </div>
    </div>
  );
};

/**
 * 整体条形图
 *
 * @param {'student' | 'parent'} role 数据服务角色.
 * @param {Array<{
 *  label: string; // 模块标题标签
 *  desc: string; // 模块描述
 *  completion: number; // 模块总百分比
 *  scores: Array<
 *    label: string; // 分支属性标签
 *    value: number; // 分支属性具体数值
 *    percent: number; // 分支属性超过同龄人的百分比
 *    gray?: boolean; // 分支属性样式是否灰显
 *  >
 * }>} data 详细数据
 */
const BarFull: FC<CharBarFullTypes.PropType> = ({ data, role }) => {
  const _role = role || 'student';

  useEffect(() => {
    const ids = (data || []).map((_, idx) => `#bar-desc-${idx}`).join(', ');
    const elements = document.querySelectorAll(ids);
    let nextEl, biggerElHeight;
    Array.prototype.forEach.call(elements, (el, idx) => {
      if (idx % 2 === 0) {
        nextEl = elements[idx + 1] || { offsetHeight: 0, style: {} };
        biggerElHeight = Math.max(el.offsetHeight, nextEl.offsetHeight);

        el.style.height = `${biggerElHeight}px`;
        nextEl.style.height = `${biggerElHeight}px`;
      }
    });
    nextEl = null;
    biggerElHeight = null;
  }, []);

  return (
    <div className={styles['bar-full']}>
      {Array.isArray(data) &&
        data.map((m, idx) => (
          <div className={styles['bar-full-item']} key={m.label}>
            <div className={styles['bar-hd']}>
              <div className={styles['hd-label']}>{m.label}</div>
              {m.completion ? (
                <div className={styles['hd-completion']}>
                  超过<span>{m.completion}%</span>的{_role === 'student' ? '同龄人' : '学生家长'}
                </div>
              ) : (
                ''
              )}
            </div>

            <div className={styles['bar-desc']} id={`bar-desc-${idx}`}>
              {m.desc}
            </div>
            <div className={styles['bar-bd']}>
              {Array.isArray(m.scores) &&
                m.scores.map((item) => <BarItem key={item.label} item={item} role={_role} />)}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BarFull;
