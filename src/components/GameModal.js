import React from 'react'
import Modal from './Modal'

export default function GameModal(props) {
  return (
    <div>
      <Modal isOpen={props.isOpen} closeModal={props.closeModal}/>
      <Modal/>
    </div>
  )
}
