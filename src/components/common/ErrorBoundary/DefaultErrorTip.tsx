import React from 'react'

type Props = {
    handleResetError: () => void;
}

const DefaultErrorTip = ({ handleResetError }: Props) => {
  return (
    <div>
        <img /> 
        <button onClick={handleResetError}>Reload</button>
    </div>
  )
}

export default DefaultErrorTip