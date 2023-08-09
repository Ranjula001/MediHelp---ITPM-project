import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase"><b><u>Recovery From the Lack Of Medicine</u></b></h5>
            <p>
              <em>Medi Help makes it easy to donate to hospitals and medical institutes around Sri Lanka! This initiative's primary objective is to design and develop a web-based application that serves as a platform for the identification and distribution of essential pharmaceuticals and medical equipment. The application is intended to specifically assist hospitals and medical facilities that are struggling to obtain essential supplies due to the ongoing crisis in Sri Lanka, where the importation of vital medical resources has been severely impacted. By providing a streamlined mechanism for the procurement and distribution of these essential products, the application intends to address the deficiency of vital medical resources and improve healthcare delivery for those in need. In addition, the application is intended to enable users to donate to medical projects and view medical initiatives organized by third parties, fostering collaboration and expanding opportunities for the advancement of healthcare. Through this innovative initiative, we seek to promote the health and well-being of the Sri Lankan people, particularly in these difficult times, by ensuring that essential medical resources are obtainable to those who require them most.</em>
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-center">
            <div className="d-inline-block">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.246850204825!2d80.63648350897819!3d7.290572010602134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f737d5b7c53%3A0x11f6bb7b8a5ea23f!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1622588847865!5m2!1sen!2sus"
                width="200%"
                height="400"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12">
              <p>&copy; 2023 Medi-Help. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="d-flex justify-content-end">
                <a href="#" className="btn btn-outline-light me-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="btn btn-outline-light me-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="btn btn-outline-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
