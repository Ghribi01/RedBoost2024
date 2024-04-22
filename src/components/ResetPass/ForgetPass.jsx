import React from 'react'
import { Button, Modal } from 'react-bootstrap' // Assuming you are using React-Bootstrap
import { Link } from 'react-router-dom'

function ResetPasswordModal({ setVisible, visible }) {
  const [showModal, setShowModal] = React.useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <>
      <Modal show={visible} onHide={() => setVisible(false)} animation={false}>
        <Modal.Header
          style={{ backgroundColor: '#007a8e' }}
          className="h5 text-white  justify-content-center"
        >
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center px-5">
          <p className="py-2">
            Enter your email address and we'll send you an email with instructions to reset your
            password.
          </p>
          <div className="form-outline">
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3"
              placeholder="Email Input"
            />
          </div>
          <Button
            style={{ backgroundColor: '#007a8e' , color :"white" }}
            className="w-100"
          >
            Reset password
          </Button>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/">Login</Link>
            <a href="/register">Register</a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ResetPasswordModal
