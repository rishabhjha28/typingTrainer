import React from 'react'
interface InfoViewerProps {
    info:string,
}
const InfoViewer = ({info}:InfoViewerProps) => {
  return (
    <div className='text-gray-200 bg-gray-500 px-2 absolute -top-5 left-16 min-w-max'>{info}</div>
  )
}

export default InfoViewer