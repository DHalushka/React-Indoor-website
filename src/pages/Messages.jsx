import Chat from 'components/Messages/Chat'
import SideBar from 'components/Messages/SideBar'
import React from 'react'

const Messages = () => {
  return (
	<div className='messages-page'>
    <div className="container">
      <SideBar/>
      <Chat/>
    </div>
  </div>
  )
}

export default Messages