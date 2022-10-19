import React, { useEffect } from 'react'
import { message } from 'antd'
import { trim } from 'lodash-es'

import PdfLayout from '@/container/report/components/pdf-layout'
import CommonPdf from '@/container/report/components/common-pdf'

import { useImmer } from '@/hooks'
import { getUrlQuery } from '@/utils'

const _warning = () => {
  message.warning('请填写正确的json数组字符串')
}

export default ({ val, showTextArea }) => {
  const { solution: SOLUTION } = getUrlQuery()

  const [state, setState] = useImmer({
    fluidReport: null,
    report2: null,
    report3: null,
    report4: null,
    report20: null,
    report21: null,
    report22: null,
    report30: null,
    UserInfo: {},
    orgInfo: {},
    reportId: '',
    topicName: '',
    time: '',
    isLoad: true, //记得默认改为false
    noFirstPage: !!SOLUTION,
    noLastPage: !!SOLUTION,
    dataTest: [],
    dataInit: false,
    dataTestCount: 1,
  })

  // 当前页面是否加载完图片
  const isLoadAllImg = () => {
    return new Promise((resolve) => {
      const images = document.querySelectorAll('#pdfbox img')
      const promiseList = []
      ;[...images].forEach((item) => {
        promiseList.push(
          new Promise((res) => {
            const img = new Image()
            img.onload = () => {
              res(true)
            }
            img.onerror = () => {
              res(false)
            }
            img.src = item.src
          }),
        )
      })

      Promise.all(promiseList).then((res) => {
        resolve(res.every((item) => item))
      })
    })
  }

  // 添加页数和报告名
  const setReportNameAndPages = (name) => {
    const { topicName } = state
    const pages = document.querySelectorAll('#pdf #fixPage')
    ;[...pages].forEach((item, index) => {
      const page = index + 1
      item.firstChild.innerHTML = `${name}${topicName || 'MECE学习力诊断'}报告 `
      item.lastChild.innerHTML = `第&nbsp;${page >= 10 ? page : `0${page}`}&nbsp;页`
    })
  }

  const {
    time,
    reportId,
    topicName,
    UserInfo,
    orgInfo,
    fluidReport,
    report2,
    report3,
    report4,
    report20,
    report21,
    report22,
    report30,
    solution,
    isLoad,
    notMece,
    noIntroduce,
    noValidity,
    noMece,
    noTeam,
    noFirstPage,
    noLastPage,
    dataTest,
    dataInit,
  } = state

  const initPdf = () => {
    setTimeout(() => {
      let data = state.dataTest.map((v) => {
        const item = { ...v }
        const height = (document.getElementById(`report-util_${item.id}`) || {}).clientHeight || 0
        item.height = height
        return item
      })
      let newData = []
      let temp = []
      let currPageHeight = 0

      data.forEach((item, idx) => {
        currPageHeight = currPageHeight + item.height

        if (currPageHeight > 1000) {
          newData.push(temp)
          if (item.height > 1200) {
            // 单独占据一页
            newData.push(item)
          }
          temp = []
          currPageHeight = item.height
        }
        temp.push(item)
        if (idx + 1 === data.length) {
          newData.push(temp)
        }
      })
      setState((sta) => {
        sta.dataTest = newData
        sta.dataInit = true
      })
    }, 1000)
  }

  const initVal = () => {
    setState((sta) => {
      sta.dataTest = (Array.isArray(val) ? val : []).map((i, idx) => {
        const item = { ...i }
        item.id = idx
        return item
      })
      sta.dataTestCount += 1
      sta.dataInit = false
    })
  }

  useEffect(() => {
    // initPdf();
    initVal()
  }, [])

  useEffect(() => {
    // initPdf();
    initVal()
  }, [val])

  // useEffect(() => {
  //   initPdf()
  // }, [state.dataTestCount])

  useEffect(() => {
    if (isLoad) {
      setReportNameAndPages(UserInfo.name)
      isLoadAllImg().then((isLoad) => {
        if (isLoad) {
          const el = document.getElementById('pdfbox')
          const span = document.createElement('code')
          span.setAttribute('id', 'isLoadTag')
          el.appendChild(span)
        }
      })
    }
  }, [isLoad])

  if (!isLoad) {
    return null
  }

  const reportData =
    fluidReport || report2 || report3 || report4 || report20 || report21 || report22 || report30 || solution

  return (
    <PdfLayout
      title={topicName ? `${topicName}报告` : '学习力诊断报告'}
      reportNo={reportId}
      userInfo={UserInfo}
      orgInfo={orgInfo}
      time={time}
      notMece={notMece}
      noIntroduce={noIntroduce}
      noValidity={noValidity}
      noMece={noMece}
      noTeam={noTeam}
      report={reportData}
      noFirstPage={noFirstPage}
      noLastPage={noLastPage}
    >
      {showTextArea && (
        <textarea
          placeholder="请输入数组"
          style={{ position: 'fixed', top: '75px', width: '280px', height: '750px', background: 'pink' }}
          onChange={(e) => {
            if (trim(e.target.value)) {
              try {
                const jsonVal = eval('(' + e.target.value + ')')

                if (Array.isArray(jsonVal) && jsonVal.length > 0) {
                  setState((sta) => {
                    sta.dataTest = jsonVal.map((i, idx) => {
                      const item = { ...i }
                      item.id = idx
                      return item
                    })
                    sta.dataTestCount += 1
                    sta.dataInit = false
                  })
                } else {
                  _warning()
                }
              } catch (e) {
                _warning()
              }
            } else {
              _warning()
            }
          }}
        />
      )}
      <CommonPdf userInfo={UserInfo} data={dataTest} dataInit={dataInit} />
    </PdfLayout>
  )
}
