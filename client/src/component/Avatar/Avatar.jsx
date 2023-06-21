import React from 'react'

const Avatar = ({children, backgroundColor, color,px, py, borderRadius, cursor, fontSize, textAlign}) => {
  const style={
    backgroundColor,
    color:color || 'black',
    padding:`${py} ${px}`,
    borderRadius,
    cursor: cursor || null,
    fontSize,
    textAlign:"center"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
