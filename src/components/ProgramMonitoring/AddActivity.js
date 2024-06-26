import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import axiosInstance from '../../axiosInstance.js'
function AddActivity({ open, setOpen, program }) {
  const [allDay, setAllDay] = useState(false) // State to track "All Day Activity" checkbox
  const [activity, setActivity] = useState({ program: program._id })
  const handleChange = (e) => {
    const { name, value } = e.target
    setActivity((prevAct) => ({
      ...prevAct,
      [name]: value,
    }))
  }
  console.log(activity)

  const handleAddActivity = () => {
    try {
      const response = axiosInstance.post('/addActivity', activity)
      if (response.data) {
        console.log('Activity created successfully')
      }
    } catch (error) {
      console.log(error)
    }
    setOpen(false)
  }

  return (
    <>
      <CModal
        visible={open}
        onClose={() => setOpen(false)}
        aria-labelledby="LiveDemoExampleLabel"
        backdrop="static"
      >
        <CModalHeader onClose={() => setOpen(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Add an Activity</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            id="name"
            name="name"
            placeholder="Activity Name"
            text="Must be 6-20 characters long."
            aria-describedby="exampleFormControlInputHelpInline"
            onChange={handleChange}
          />
          <CFormTextarea
            id="description"
            name="description"
            placeholder="Description"
            rows={3}
            text="Must be 8-20 words long."
            onChange={handleChange}
          ></CFormTextarea>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="allDay" className="form-check-label">
                All Day Activity:
              </label>
              <input
                type="checkbox"
                id="allDay"
                className="form-check-input"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <CFormInput
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                label="Color :"
                title="Choose your color"
                onChange={handleChange}
              />
            </div>
          </div>

          {allDay ? (
            <>
              <CFormInput
                label="Start Day:"
                type="date"
                id="startDay"
                name="startDate"
                placeholder="Start Day"
                onChange={handleChange}
              />
              <CFormInput
                label="End Day:"
                type="date"
                name="endDate"
                id="endDay"
                placeholder="End Day"
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <CFormInput
                label="Start Date & Time:"
                type="datetime-local"
                id="startDateTime"
                name="startDate"
                placeholder="Start Date & Time"
                onChange={handleChange}
              />
              <CFormInput
                label="End Date & Time:"
                type="datetime-local"
                id="endDateTime"
                name="endDate"
                placeholder="End Date & Time"
                onChange={handleChange}
              />
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setOpen(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={handleAddActivity}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AddActivity
