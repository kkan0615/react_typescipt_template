import React from 'react'

const DefaultLayout: React.FC = props => {
  const { children } = props
  return (
    <div>
      DefaultLayout
      {children}
    </div>
  )
}

export default DefaultLayout
