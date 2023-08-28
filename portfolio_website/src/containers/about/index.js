import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import {FaDev, FaDatabase, FaPython } from 'react-icons/fa';


const personalDetails = [
    {
        label: 'Name: ',
        value: "Henry Kennedy Ochieng' Komoloh",
    },

    {
        label: 'Address: ',
        value: "Kenya",
    },

    {
        label: 'Email: ',
        value: "h.komoloh@gmail.com",
    },

    {
        label: 'Phone: ',
        value: "+254 728664378"
    }
];

const jobSummary = "A versatile Software Engineer and Security Engineer. Am a tech enthusiast with interest and knowledge in Low Level engineering, higher level engineering, blockchain and ethical hacking"
const About = () => {
    return (
        <section id="about" className='about'>

            <PageHeaderContent
                headerText="About Me"
                icon={< BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className='about__content__personalWrapper'>
                    <Animate
                        play
                        duration={1.5}
                        display={1}
                        start={{
                            transform: 'translateY(50px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        display={1}
                        start={{
                            transform: 'translateY(50px)'
                        }}

                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >

                        <h3 className='personalInfoHeaderText'>Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='title'>{item.label}</span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__servicesWrapper'>
                    <div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                    </div>
                    <div>
                        <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>   
                    </div>

                    <div>
                        <FaPython size={60} color="var(--yellow-theme-main-color)"/>   
                    </div>
                    
                </div>


            </div>

        </section>
    );
}

export default About;