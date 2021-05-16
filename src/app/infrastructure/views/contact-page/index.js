import React from 'react'
import { Navbar, Footer } from '../../components'
import { Porti, Bijon, Emir } from '../../../assets'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container center">
        <h1>İletişim Bilgileri</h1>
        <div className="contact-wrapper center">
          <div className="contact-profile center">
            <h3>Furkan Portakal</h3>
            <div className="center">
              <a
                className="github center"
                target="_blank"
                href="https://github.com/fport/korona-hunter"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="linkedin center"
                target="_blank"
                href="https://www.linkedin.com/in/furkanportakal/"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <img className="contact-profile-img" src={Porti} />
          </div>
          <div className="contact-profile center">
            <h3>Bijan Etesam</h3>
            <div className="center">
              <a
                className="github center"
                target="_blank"
                href="https://github.com/BijanE"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="linkedin center"
                target="_blank"
                href="https://www.linkedin.com/in/bijan-etesam-37a8b0194/"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <img className="contact-profile-img" src={Bijon} />
          </div>
          <div className="contact-profile center">
            <h3>Emirhan Aksöz</h3>
            <div className="center">
              <a
                className="github center"
                target="_blank"
                href="https://github.com/Emirhanaksz"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="linkedin center"
                target="_blank"
                href="https://www.linkedin.com/in/emirhan-aks%C3%B6z/"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <img className="contact-profile-img" src={Emir} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
