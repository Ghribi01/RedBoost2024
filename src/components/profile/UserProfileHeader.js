import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CAvatar, CButton } from '@coreui/react'
import { cibBehance, cibLinkedinIn, cibStackoverflow, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import './profile.css'
import Modal from './PhotoModal'
import EditModal from './EditModal'

const UserProfileHeader = ({ userData }) => {
  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState(null)
  const [open, setOpen] = useState(false)

  const handleVisible = () => {
    setVisible(true)
  }
  const calculateCompletionPercentage = () => {
    const fieldsToCheck = [
      'role',
      'department',
      'cin',
      'matricule',
      'phone',
      'adress',
      'birthday',
      'image',
      'password',
    ]
    const completedFields = fieldsToCheck.filter((field) => {
      const value = userData[field]
      return value !== undefined && value !== '' && value !== 'Undefined'
    })
    const completionPercentage = (completedFields.length / fieldsToCheck.length) * 100
    return completionPercentage.toFixed(2)
  }
  const completionPercentage = calculateCompletionPercentage()
  const bio =
    'Passionate marketing professional with a strong background in digital marketing strategies and campaign management. Experienced in driving brand awareness and engagement through innovative marketing tactics. A creative thinker with a keen eye for detail and a drive for achieving results.'
  const websiteUrl = 'https://www.behance.com/in/PixelPress/'
  return (
    <>
      <Modal setImage={setImage} visible={visible} setVisible={setVisible} />
      {/* <EditModal setOpen={setOpen} /> */}
      <CCard className="text-center mb-3">
        <CCardHeader className="bg-dark text-light">Profile Header</CCardHeader>
        <CCardBody>
          <div className="d-flex justify-content-center">
            <CAvatar
              size="xl"
              status="success"
              src={userData.image ? userData.image : null}
              className="mx-auto d-block mb-3"
            />
          </div>
          <div className="text-center mb-3">
            <CButton color="primary" onClick={handleVisible}>
              Upload
            </CButton>
          </div>
          <h4>{userData.username}</h4>
          <div className="text-center">
            <CIcon icon={cibStackoverflow} /> <strong>{userData.exp}</strong>
          </div>
          <div className="progress" style={{ width: '40%', margin: '20px auto' }}>
            <div
              className="progress-bar progress-bar-success progress-bar-striped"
              role="progressbar"
              aria-valuenow={completionPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${completionPercentage}%` }} // Dynamically set width based on completionPercentage
            >
              {`${completionPercentage}% Complete`}
            </div>
          </div>
          <div className="m-4 text-center">
            <p className="mx-5">{bio}</p>
          </div>

          <div className="d-flex justify-content-center mb-3 profile-links">
            <a href={userData.linkedIn} target="_blank" rel="noopener noreferrer" className="me-3">
              <CIcon icon={cibLinkedinIn} /> {userData.linkedIn}
            </a>
          </div>
          <div className="container mt-5">
            <button
              onClick={() => setOpen(true)}
              id="editButton"
              className="btn btn-success"
              data-toggle="tooltip"
              title="Edit"
            >
              <CIcon icon={cilPen} />
            </button>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default UserProfileHeader
