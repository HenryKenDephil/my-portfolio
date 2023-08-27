import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';
const Home = () => {

    const navigate = useNavigate();
    console.log(navigate)

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    };
    return (
        <section id="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Henry Kennedy,
                    <br />
                    A Software & Security
                    <br />
                    Engineer

                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            display={1}
            start={{
                transform: 'translateY(550px)'
            }}

            end={{
                transform: 'translateX(0px)'
            }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Open to Work, Contact Me</button>
                </div>
            </Animate>

        </section>
    );
}

export default Home;