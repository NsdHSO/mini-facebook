import React from 'react'

const ChatRender = ({ notes }) => {
  return (
    <div>
      {notes.map((resp) => (<h2 key={resp.id}>{resp.msg}</h2>))}
    </div>);
}

export default ChatRender;