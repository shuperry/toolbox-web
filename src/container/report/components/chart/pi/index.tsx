import React, { FC, Fragment } from 'react'
import classnames from 'classnames'

import styles from './index.less'

// 高宽比.
const aspectRatio = 240 / 780

/**
 * 上下两端色块高度.
 */
const colorBlockHeight = 25

/**
 * 为避免超出画布, 画布上下两端保留高度.
 */
const paddingHeight = 5

/**
 * 将源数据转换为计算横纵坐标的数据点.
 *
 * @param {[[0, 0], [0, 0]]} data 要渲染的多条线数据.
 * @param {number} w 宽度.
 * @param {number} h 高度.
 * @param {string[]} texts 数据点中心文本.
 *
 * @returns [{ x: 0, y: 0, text: 'xx'}].
 */
const parseToPoints = (data: number[][], w: number, h: number, texts: string[]) => {
  return data
    .filter((item) => Array.isArray(item))
    .map((item) =>
      item.map((y, i) => ({
        x: (w / (item.length + 1)) * (i + 1),
        y:
          (h *
            ((y - colorBlockHeight * 2 - paddingHeight * 2) * ((h - colorBlockHeight * 2) / h) +
              (colorBlockHeight * 2 + paddingHeight * 2))) /
          100,
        text: texts[i],
      })),
    )
}

interface PropType {
  data?: number[][]
  legends?: string[]
  showLegends?: boolean
  colors?: string[]
  pointTexts?: string[]
  xAxis1?: string[]
  xAxis2?: string[]
  yAxis1?: string[]
  yAxis2?: string[]
}

const height = 240

/**
 * PI风格视图组件.
 *
 * @name chartPI
 * @param {[number[], number[]]} data 数据点纵坐标值, e.g: [[25, 30, 100, 80], [10, 15, 40, 90]].
 * @param {string[]} legends 图例, 默认: ['家长', '学生'].
 * @param {boolean} showLegends 是否显示图例, 当有多条数据线时强制显示图例, 默认: false.
 * @param {string[]} colors 色值, 各条线的颜色值, 默认: ['#44B979', '#FFBA15'].
 * @param {string[]} pointTexts 数据点中心文字, 默认: ['A', 'B', 'C', 'D'].
 * @param {string[]} xAxis1 上横坐标, 默认: ['掌控', '外向', '沉稳', '严谨'].
 * @param {string[]} xAxis2 下横坐标, 默认: ['配合', '内向', '紧迫', '灵活'].
 * @param {string[]} yAxis1 左纵坐标, 默认: ['+3σ', '+2σ', '+1σ', '0', '-1σ', '-2σ', '-3σ'].
 * @param {string[]} yAxis2 右纵坐标, 默认: ['+3σ', '+2σ', '+1σ', '0', '-1σ', '-2σ', '-3σ'].
 */
const ChartPI: FC<PropType> = ({
  data,
  legends = ['家长', '学生'],
  showLegends = false,
  colors = ['#44B979', '#FFBA15'],
  pointTexts = ['A', 'B', 'C', 'D'],
  xAxis1 = ['掌控', '外向', '沉稳', '严谨'],
  xAxis2 = ['配合', '内向', '紧迫', '灵活'],
  yAxis1 = ['+3σ', '+2σ', '+1σ', '0', '-1σ', '-2σ', '-3σ'],
  yAxis2 = ['+3σ', '+2σ', '+1σ', '0', '-1σ', '-2σ', '-3σ'],
}) => {
  // 容错处理: data 参数影响视图渲染, 不传此参数时返回空元素.
  if (!Array.isArray(data) || !data.length) return <></>

  const width = height / aspectRatio
  const lines = parseToPoints(data, width, height, pointTexts)

  return (
    <>
      <div className={styles['pi-chart-container']}>
        <div className={styles['chart-container']}>
          <div
            className={classnames(styles['x-axis'], styles.top)}
            style={{
              padding: `0 ${(width - 55) / data[0].length}px`,
            }}
          >
            {xAxis1.map((item, idx) => (
              <span key={`${item}_${idx}`}>{item}</span>
            ))}
          </div>

          <div className={styles['midd-container']}>
            <div className={classnames(styles['y-axis'], styles.left)}>
              {yAxis1.map((item, idx) => (
                <span key={`${item}_${idx}`}>{item}</span>
              ))}
            </div>

            <svg
              className={styles.chart}
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              {lines.map((line, idx1) => {
                return line.map((p, idx2) => (
                  <Fragment key={`${line}_${idx1}_point_${idx2}`}>
                    {idx2 !== line.length - 1 && (
                      <path
                        key={`xys2_${idx2}`}
                        d={`M ${p.x} ${p.y} L ${line[idx2 + 1].x} ${line[idx2 + 1].y}`}
                        stroke={colors[idx1]}
                        strokeWidth="2"
                        fill="none"
                      />
                    )}
                    <circle
                      key={`point_${idx2}`}
                      cx={p.x + 0.5}
                      cy={p.y}
                      r="10"
                      stroke={colors[idx1]}
                      strokeWidth="2"
                      fill={colors[idx1]}
                    />
                    <text key={idx2} x={p.x - 4} y={p.y + 4} fill="#fff">
                      {p.text}
                    </text>
                  </Fragment>
                ))
              })}
            </svg>

            <div className={classnames(styles['y-axis'], styles.right)}>
              {yAxis2.map((item, idx) => (
                <span key={`${item}_${idx}`}>{item}</span>
              ))}
            </div>
          </div>

          <div
            className={classnames(styles['x-axis'], styles.bottom)}
            style={{
              padding: `0 ${(width - 55) / data[0].length}px`,
            }}
          >
            {xAxis2.map((item, idx) => (
              <span key={`${item}_${idx}`}>{item}</span>
            ))}
          </div>
        </div>

        {(showLegends || data.length > 1) && (
          <div className={styles['legend-container']}>
            {data.map((_, idx) => (
              <Fragment key={`${legends[idx]}_${idx}`}>
                <div className={styles.dot} style={{ background: colors[idx] }}></div>
                <span className={styles.text}>{legends[idx]}</span>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ChartPI
