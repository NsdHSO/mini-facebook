import React from 'react'
import ChatRender from './chatRender/ChatRender';
import Card from './../../../shared/card/Card';

const ModuleRight = ({ data }) => {
  return (
    <Card>
      <ChatRender notes={data} />
    </Card>);
}


export default ModuleRight;