import PdfTest from '@/container/report/test'
import useTitle from '@/hooks/useTitle'

import { getUrlQuery } from '@/utils'

const PdfTestPage = () => {
  const { init } = getUrlQuery()

  if (init === '1') {
    useTitle('pdf报告')
  }

  return (
    <PdfTest
      val={init === '1' ? JSON.parse(localStorage.getItem('DiyReportVal') || '[]') : []}
      showTextArea={init !== '1'}
    />
  )
}

export default PdfTestPage
