import React from 'react'

const ChatRender = ({ notes }) => {
  console.log(notes.length);
  return (
    
    <div>
      
        
    {notes.map((resp) => (<h2 className="tw-shadow-sm" key={resp.id}>{resp.msg}</h2>))}
    </div>);
}

export default ChatRender;