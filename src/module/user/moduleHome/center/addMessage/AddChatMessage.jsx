import React, { useState } from 'react'

const ChatMessage = ({ onSaveChatMessaga }) => {
  // const [message, setMessage] = useState('')
  const [message, setMessage] = useState({
    msg: ''
  })

  const setMessageHandler = (event) => {
    
    setMessage({ msg: event.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const messageData = { message }
    onSaveChatMessaga(message)
    setMessage({ msg: "" })
  }

  return (<form onSubmit={submitHandler}>
    <div className="tw-flex tw-justify-center tw-content-end tw-pt-4 tw-pb-4 tw-shadow-lg tw--ml-3.6.6"><h1 className="tw-text-4xl">Add New Message</h1></div>

    <div className="tw-justify-items-center tw-content-center">
      <div className="tw-p-5">
        <label className="tw-text-2xl"> Message </label>
        <input onChange={setMessageHandler} value={message.msg} type="text" className="tw-text-xl tw-rounded-md form-control-plaintext tw-text-m tw-outline-none tw-text-gray-500 tw-w-52 tw-h-8 tw-bg-gray-100 hover:tw-bg-gray-200 hover:tw-border-gray-500" id="staticEmail" placeholder="Enter Message"></input>
      </div>
      <div className="tw-justify-items-end tw-flex tw-justify-end tw-mt-9 tw-p-10">
        <button type="submit" className="tw-border-blue-500 tw-outline-none tw-border-2 tw-rounded-md tw-p-1 tw-bg-red-100 hover:tw-bg-green-200 hover:tw-border-blue-500 " >Add message</button></div>
    </div>
  </form>);
}

export default ChatMessage;