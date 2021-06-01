import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from './../../../shared/modal/Modal';
import Card from '../../../shared/card/Card';
import './NewNoteSenzor.css'
import ChatMessage from './addMessage/AddChatMessage';

const AddNewNote = (props) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const saveMessageDataHandler = (data) => {
    const dataChild = {
      ...data,
      id: Math.ceil(Math.random() * 10 + 1).toString()
    }

    props.onChatSave(dataChild)
    openModal()
  }

  return (<React.Fragment>
    <Card className="tw-mt-1 tw-h-12 tw-bg-white tw-grid tw-grid-cols-12 tw-grid-rows-6 ">
      <div className=" tw-flex tw-col-span-1" onClick={openModal}>
        <FontAwesomeIcon className="transition duration-700 ease-in-out tw-text-gray-400 tw-text-4xl tw-mt-1 tw-ml-2" icon={faPlusCircle} />
      </div>
      <div className="tw-col-start-2 tw-col-end-6 tw-flex tw-content-center tw-justify-items-center tw-row-start-2 tw-row-end-2 tw-mr-20">
        <span className="tw-text-lg" >Add New Notes </span>
      </div>
    </Card>
    <Modal show={showModal} setShowModal={setShowModal}>
      <ChatMessage key={props.data} onSaveChatMessaga={saveMessageDataHandler} />
    </Modal>
  </React.Fragment >);
}

export default AddNewNote;