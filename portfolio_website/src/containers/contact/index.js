import React, { useRef } from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import emailjs from '@emailjs/browser';
import { Animate } from 'react-simple-animate';
import './styles.scss'


export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_od2035i', 'template_vvsp3fa', form.current, 'ul-9M_V6Z5ZklO6kZ')
            .then((result) => {
                console.log(result.text);
                console.log("message sent successfully");
            }, 
            
            (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact" className='contact'>

            <PageHeaderContent
                headerText="Contact Me"
                icon={< BsInfoCircleFill size={40} />}
            />

            <div className='contact__content'>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(-200px)'
                    }}

                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <h3 className='contact__content__header-text'>
                        write me an email
                    </h3>
                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(200px)'
                    }}

                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='contact__content__form'>
                            <div className='contact__content__form__controlswrapper'>

                                <div>
                                    <input required name="name" className='inputName' 
                                    type={'text'} />
                                    <label htmlFor='name' className='nameLabel'
                                    >Name</label>
                                </div>
                                <div>
                                    <input required name="email" className='inputEmail' 
                                    type={'text'} />
                                    <label htmlFor='email' className='emailLabel'
                                    >Email</label>
                                </div>
                                <div>
                                    <textarea
                                     required name="message"
                                      className='inputMessage'
                                       type={'text'} 
                                       rows="5"
                                       />
                                    <label htmlFor='message' className='messageLabel'
                                    >Message</label>
                                </div>
                            </div>
                            <button>Send</button>
                        </div>
                    </form>

                </Animate>
            </div>

        </section>
    );
}

export default Contact;