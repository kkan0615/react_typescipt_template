import React from 'react'
import { useSelector } from 'react-redux'
import './styles/index.scss'
import { RootState } from '../../../store'

const Loading: React.FC = () => {
  const loading = useSelector<RootState>(store => store.global.loading) as boolean

  console.log(loading)
  if (loading) {
    return (
      <div className="overlay">
        <div className="content">
          <div className="dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          <div className="text">
            Tip: This is made by Youngjin
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default Loading
