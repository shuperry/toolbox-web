import React, { FC, memo } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface IndexProps {
  bgColor: string;
  textColor: string;
  text: string;
}

const bgColorMap = {
  blue: { color: '#2C88FA', opacity: 1 },
  green: { color: '#44B979', opacity: 1 },
  orange: { color: '#FF961F', opacity: 1 },
  yellow: { color: '#FFC600', opacity: 1 },
  green60: { color: '#44B979', opacity: 0.6 },
  green80: { color: '#44B979', opacity: 0.8 },
  green20: { color: '#44B979', opacity: 0.2 },
  grey: { color: '#CCC', opacity: 1 },
};
const Index: FC<IndexProps> = ({ bgColor, textColor, text }) => {
  return (
    <div className={styles.box}>
      <svg
        width="88px"
        height="100px"
        viewBox="0 0 88 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fillOpacity={bgColorMap[bgColor]?.opacity || 1}
        >
          <g
            transform="translate(-4650.000000, -2207.000000)"
            fill={bgColorMap[bgColor]?.color || '#44B979'}
          >
            <path d="M4697,2208.73205 L4734.30127,2230.26795 C4736.15768,2231.33975 4737.30127,2233.32051 4737.30127,2235.4641 L4737.30127,2278.5359 C4737.30127,2280.67949 4736.15768,2282.66025 4734.30127,2283.73205 L4697,2305.26795 C4695.14359,2306.33975 4692.85641,2306.33975 4691,2305.26795 L4653.69873,2283.73205 C4651.84232,2282.66025 4650.69873,2280.67949 4650.69873,2278.5359 L4650.69873,2235.4641 C4650.69873,2233.32051 4651.84232,2231.33975 4653.69873,2230.26795 L4691,2208.73205 C4692.85641,2207.66025 4695.14359,2207.66025 4697,2208.73205 Z"></path>
          </g>
        </g>
      </svg>
      <div className={classnames(styles.text, styles[textColor])}>{text}</div>
    </div>
  );
};

export default Index;
