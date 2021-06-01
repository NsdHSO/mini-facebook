import React from 'react';
import Card from '../card/Card';
import './modalCenter.css'


const Modal = ({ show, children, setShowModal }) => {
  let style = show ? 'modal tw-block' : "tw-none"

  return (
    <>{show ?
      <Card className="modal-center_background tw-border-2 tw-border-gray-300" onBlur={setShowModal}>
        <div className={style}>
          <section className="tw-w-full tw-ml-5 tw-bg-white tw-h-auto tw-justify-items-center tw-content-start">
            {children}
          </section>

        </div>
      </Card> : ""} </>
  )
}

export default Modal;