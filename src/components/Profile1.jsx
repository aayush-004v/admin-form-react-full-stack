import React from 'react'
import {
  MDBInputGroup,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

const Profile1 = () => {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <div class="container fluid">
            <div class="row justify-content-evenly">
              <div class="col-4">
                <p className="h4 fw-bold mb-3">Complete Profile Step-1</p>
                <MDBInputGroup
                  className="mb-3"
                  textTag="label"
                  textProps={{ htmlFor: 'inputGroupFile02' }}
                >
                  <h4>Image</h4> <input type="file" id="inputGroupFile02" />
                </MDBInputGroup>
                <MDBInputGroup
                  className="mb-3"
                  textTag="label"
                  textProps={{ htmlFor: 'inputGroupFile02' }}
                >
                  <h4>Video</h4> <input type="file" id="inputGroupFile02" />
                </MDBInputGroup>

                <div className="d-flex flex-row align-items-center mb-2 mt-0">
                  <h5 class="ml">Gender</h5>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Male
                    </label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>
                <MDBBtn className="mx-2" size="md">
                  Back
                </MDBBtn>
                <Link to={"/profile2"}>
                <MDBBtn className="mx-2" size="md" >Proceed
                </MDBBtn>
                 </Link>
              </div>
              <div class="col-4">
                <p className="text-center h4 fw-bold mb-3">
                  Instructions for the Candidate
                </p>
                <div>
                  <div class="note note-danger mb-3">
                    <ol>
                      <li>Image dimension should be 100 X 100 pixels only</li>
                      <li>
                        Only 30sec video file should be allowed and only MP4
                        file allowed
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Profile1
