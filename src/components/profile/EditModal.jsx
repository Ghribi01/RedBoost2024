import React from 'react'

const EditModal = ({ setOpen }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input className="modalTextInput form-control" placeholder="Text Here" />
          </div>
          <div className="modal-footer">
            <button type="button" className="saveEdit btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal
