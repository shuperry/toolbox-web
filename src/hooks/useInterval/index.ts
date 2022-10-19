import { useEffect, useRef } from 'react'

type PropType = (callback: () => void, delay: number, closeTime: number) => NodeJS.Timeout | void

/**
 * 间隔执行函数并定时关闭.
 *
 * @param callback 需要执行的函数.
 * @param delay 每次执行间隔时间, 单位: ms.
 * @param closeTime 多长时间后结束, 单位: ms.
 */
const useInterval: PropType = (callback, delay, closeTime) => {
  const savedCallback = useRef(() => {})

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== null) {
      savedCallback.current()
      let i = 0
      const interval = setInterval(() => {
        savedCallback.current()
        i += delay
        if (i >= closeTime) {
          clearInterval(interval)
        }
      }, delay || 0)
      return () => {
        clearInterval(interval)
      }
    }
    return undefined
  }, [closeTime, delay])
}

export default useInterval
