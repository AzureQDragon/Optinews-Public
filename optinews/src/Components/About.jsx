import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../App.css';

function About() {
    return(
        <Tabs defaultActiveKey="Home" id="about-page">
            <Tab eventKey="about" title="About Optinews">
                <h1>About Optinews</h1>
                <p>OptiNews is a space to inform and uplift.
                 We highlight positive news from reputable sources to provide a more optimistic view of the world. By filtering articles into categories, we motivate readers to explore and gain knowledge about topics that interest them. We exist to redefine how people consume news.</p>
            </Tab>
            <Tab eventKey="who" title="Who are we?">
                <h1>Who are we?</h1>
                <p>We are a group of students who are tired of witnessing the constant circulation of misinformation and negative news. While it is important to stay informed on all kinds of news, we observe that excessive consumption of bleak and depressing information can be more harmful than helpful. We hope that OptiNews can supplement regular news intake and encourage people to stay aware of what is happening in the world.</p>
            </Tab>
            <Tab eventKey="values" title="Our Values">
                <h1>Our Values</h1>
                <h2>Optimism</h2>
                <p>It is easy to lose sight of the real good that exists in the world, especially given its current state. This positivity is often not showcased enough, and we are here to change that.</p>
                <h2>Truth</h2>
                <p>Misinformation spreads rapidly on the internet and we want no part in that. We display news from a number of reliable sources to ensure that information is factually accurate.</p>
                <h2>Curiosity</h2>
                <p>We want our readers to genuinely enjoy what they are reading while gaining valuable information. We hope to target topics that pique and sustain users’ interests.</p>
            </Tab>
        </Tabs>
    );
}

export default About;