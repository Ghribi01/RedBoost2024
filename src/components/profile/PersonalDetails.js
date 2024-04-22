import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
  CForm,
  CInputGroup,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContact,
  cilSpreadsheet,
  cilCode,
  cilInstitution,
  cilBirthdayCake,
  cilLockLocked,
  cilCloudUpload,
  cibGmail,
  cilPhone,
  cibOrcid,
} from '@coreui/icons'

const PersonalDetails = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false)

  // Function to handle edit mode toggle
  const toggleEditMode = () => {
    setIsEditing(!isEditing)
  }

  // Render the personal details in edit mode
  const renderEditableDetails = () => {
    return (
      <CForm>
        {personalDetails.map((detail, index) => (
          <CInputGroup key={index}>
            <label htmlFor={`input-${index}`} className="form-label">
              <CIcon icon={detail.icon} /> {detail.label}:
            </label>
            <CFormInput
              type="text"
              id={`input-${index}`}
              value={detail.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </CInputGroup>
        ))}
        <div className="d-flex justify-content-center mt-3">
          <CButton style={{ marginRight: '15px' }} color="primary" onClick={saveChanges}>
            Save Changes
          </CButton>
          <CButton color="info" onClick={toggleEditMode}>
            Cancel
          </CButton>
        </div>
      </CForm>
    )
  }

  // Handle input change during edit mode
  const handleInputChange = (index, value) => {
    // Update the value of the corresponding detail in state
    const updatedPersonalDetails = [...personalDetails]
    updatedPersonalDetails[index].value = value
    setPersonalDetails(updatedPersonalDetails)
  }

  // Function to save changes and exit edit mode
  const saveChanges = () => {
    // Here you can implement logic to save changes to the backend
    setIsEditing(false) // Exit edit mode
  }

  // Mock data until you fix data from the database
  const personalDetails = [
    { icon: cibOrcid, label: 'N°CIN', value: userData.cin },
    { icon: cibGmail, label: 'Email', value: userData.email },
    { icon: cilPhone, label: 'Phone', value: userData.phone },
    { icon: cilContact, label: '  Adress', value: userData.adress },
    { icon: cilSpreadsheet, label: 'Matricule fiscale', value: userData.matricule },
    { icon: cilCode, label: 'Role', value: userData.role },
    { icon: cilInstitution, label: 'Departement', value: userData.department },
    { icon: cilBirthdayCake, label: 'Birthday', value: userData.birthday },
    { icon: cilLockLocked, label: 'Password', value: '************' },
    // Add more rows as needed
  ]

  return (
    <CCard>
      <CCardHeader className="bg-dark text-light">Personal Details</CCardHeader>
      <CCardBody>
        {!isEditing ? (
          <CTable>
            <CTableBody>
              {personalDetails.map((detail, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell>
                    <CIcon icon={detail.icon} /> {detail.label}:
                  </CTableHeaderCell>
                  <CTableDataCell>{detail.value}</CTableDataCell>
                </CTableRow>
              ))}
              <CTableRow>
                <CTableHeaderCell>
                  <CIcon icon={cilCloudUpload} />
                  Upload CV:
                </CTableHeaderCell>
                <CTableDataCell>
                  <CFormInput type="file" id="formFile" />
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        ) : (
          renderEditableDetails()
        )}
        <div className="d-flex justify-content-center mt-3">
          {!isEditing && (
            <CButton color="info" onClick={toggleEditMode}>
              Edit
            </CButton>
          )}
        </div>
      </CCardBody>
    </CCard>
  )
}

export default PersonalDetails
