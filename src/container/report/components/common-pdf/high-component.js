import React from 'react'

export default ({ children, item }) => {
  return (
    <div id={`report-util_${item.id}`} style={{ paddingTop: item.top || 0, paddingBottom: item.bottom || 0 }}>
      {children}
    </div>
  )
}
