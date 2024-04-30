import { CCard, CCardBody, CButton, CListGroupItem } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
export const ProgramCard = ({ program }) => {
  const navigate = useNavigate()

  const handleViewActivities = () => {
    navigate('/Dash/Monitoring/Activities', { state: { program } })
  }
  return (
    <CCard className="mb-4">
      <CCardBody className="d-flex flex-column">
        <div
          className="d-flex justify-content-center align-items-center mb-5"
          style={{ height: '125px' }}
        >
          <img
            src={program.logo}
            alt="Project Logo"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
        <h5 className="text-center">{program.title}</h5>
        <div className="mt-auto d-grid">
          <CButton color="primary" onClick={handleViewActivities}>
            <CListGroupItem as={Link}>view</CListGroupItem>
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}
