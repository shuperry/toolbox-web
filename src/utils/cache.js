/*
数据缓存
const cache = cacheTool()('goods');
cache.set({ play: 1 });
const data = cache.get();
console.log(data);
*/
export const cacheTool = () => {
  const memostr = window.localStorage.getItem('memo_cacheTool')
  let memo = memostr
    ? JSON.parse(memostr)
    : {
        HEADER: {
          platform: 1,
          requestId: 1,
          userId: '1',
          syncTimeStamp: 1,
          token: '1',
          orgId: 1,
        },
      }
  window.onbeforeunload = () => {
    if (memo) {
      window.localStorage.setItem('memo_cacheTool', JSON.stringify(memo))
      memo = null
    }
  }
  return (memokey) => {
    const isString = Object.prototype.toString.call(memokey) === '[object String]'
    if (isString) {
      return {
        get() {
          return memo[memokey]
        },
        set(data) {
          const isObject = Object.prototype.toString.call(data) === '[object Object]'
          if (isObject) {
            memo[memokey] = {
              ...memo[memokey],
              ...data,
            }
            window.localStorage.setItem('memo_cacheTool', JSON.stringify(memo))
            return
          }
          console.error('set data is no Object')
        },
        clear() {
          memo[memokey] = {}
        },
      }
    } else {
      return {
        get: () => {},
        set: (data) => {},
        clear: () => {},
      }
    }
    console.error('cache key is no string!')
  }
}

export const headerCache = cacheTool()('B_HEADER')
