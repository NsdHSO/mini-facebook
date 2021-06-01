import React from 'react'
import ChatRender from './chatRender/ChatRender';

const ModuleRight = ({data}) => {
  return (<ChatRender notes={data}/>);
}

export default ModuleRight;