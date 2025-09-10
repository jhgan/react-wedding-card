import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactModal({closeModal}) {

  const groomContact = [
    { person: "신랑 간정현", phone: "01012345678" },
    { person: "아버지 간윤범", phone: "01012345678" },
    { person: "어머니 곽순희", phone: "01012345678" },
  ];

  const brideContact = [
    { person: "신부 김예리", phone: "01031709615" },
    { person: "아버지 김태훈", phone: "01050219615" },
    { person: "어머니 김순자", phone: "01093026976" },
  ];


  return (
    <div className="modal" onClick={closeModal}>
      <div className="contact__content">
        <button onClick={closeModal} className="survey__btn-close">&times;</button>
        <div className='modal__account'>연락하기</div>
        <div className="contact__boxes">
          {[...groomContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                  <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact__boxes">
        {[...brideContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                    <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
