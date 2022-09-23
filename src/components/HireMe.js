import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import emailjs from 'emailjs-com';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';



export const HireMe = () => {
  const formInitialDetails = {
    firstName: '',
    companyName: '',
    role: '',
    email: '',
    details: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	}
  function sendEmail(e) {
   
    e.preventDefault();  
      setButtonText("Sending...");
    setFormDetails(formInitialDetails);
    const formData = new FormData();
		formData.append('File', selectedFile);
    axios.post("api/uploadfile", formData);
    emailjs.sendForm('service_jp2002', 'template_rhq8h5m', e.target, 'rgevejfeQipQt75qb')
      .then((result) => {
          window.location.reload() 
      }, (error) => {
          console.log(error.text);
      });
      
  }

	

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Hire Me</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" name="full_name" value={formDetails.firstName} placeholder="Full Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" name="company_name" value={formDetails.companyName} placeholder="Company Name" onChange={(e) => onFormUpdate('companyName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="text" name="role" value={formDetails.role} placeholder="Role" onChange={(e) => onFormUpdate('role', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" name="from_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="file" name="file" value={formDetails.details} onChange={changeHandler} />
                      {(isFilePicked) ? (
                            <div>
                              <p>Filename: {selectedFile.name}</p>
                              <p>Filetype: {selectedFile.type}</p>
                              <p>Size in bytes: {selectedFile.size}</p>
                              <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                              </p>
                            </div>
                          ) : (
                            <p>Select a file to show details</p>
                          )}                   
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
