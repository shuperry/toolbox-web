import { message } from 'antd'

/**
 * 获取地址栏 querystring 参数.
 *
 * e.g: /page?id=1&type=2 => { id:1, type: 2 }
 */
export const getUrlQuery = (): { [key: string]: any } => {
  const url = window.location.search
  let parmas = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')

    for (let i = 0; i < strs.length; i++) {
      const s = strs[i].split('=')
      parmas[s[0]] = strs[i].slice(s[0].length + 1)
    }
  }

  return parmas
}

/**
 * 拷贝到粘贴板.
 *
 * @param {string} text 需复制的字符串.
 * @param {boolean} showMessage 是否显示复制成功或失败提示.
 *
 * @returns 是否拷贝成功.
 */
export const copyToClipboard = (text: string, showMessage?: boolean) => {
  const el = document.createElement('textarea')
  el.value = text

  // Prevent keyboard from showing on mobile
  el.setAttribute('readonly', '')

  el.style.contain = 'strict'
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.fontSize = '12pt' // Prevent zooming on iOS

  const selection = document.getSelection()
  let originalRange
  if (selection && selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0)
  }

  document.body.appendChild(el)
  el.select()

  // Explicit selection workaround for iOS.
  el.selectionStart = 0
  el.selectionEnd = text.length

  let success = false
  try {
    success = document.execCommand('copy')
    if (showMessage) message.success('复制成功')
  } catch (err) {
    if (showMessage) message.success('复制失败')
  }

  document.body.removeChild(el)

  if (selection && originalRange) {
    selection.removeAllRanges()
    selection.addRange(originalRange)
  }

  return success
}

/**
 * 根据链接打开新窗口.
 *
 * @param {string} url 链接
 */
export const openNewWindow = (url: string) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  a.remove()
}
