import React, { useEffect } from 'react'
import dayjs from 'dayjs'

import { gradeMap } from '@/config/grade'
import Img from '@/components/img'

import PdfPaper from '@/container/report/components/pdf-paper'

import style from './index.less'

export default ({ children }) => {
  return <div id="pdfbox">{children}</div>
}
