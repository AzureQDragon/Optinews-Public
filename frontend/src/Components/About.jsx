import React from 'react';
import NavBar from './NavBar';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import '../App.css';

function About() {
    return(
        <div className = 'About'>
            <NavBar />
            <Tabs defaultActiveKey='about' id='about-page'>
            <Tab eventKey='about' title='About Optinews' className='tab'>
                <div className='container'>
                    <h1 className='title'>About Optinews</h1>
                    <h2 className='value'>Our Mission</h2>
                    <p className='paragraph'>Optinews exists to redefine how people consume news. Our app is a space to inform and uplift. The positive news articles we display provide readers with a more optimisitc view of the world than the one that is often presented. We are facing difficult times and a little optimism can go a long way.</p>
                    <h2 className='value'>Our Work</h2>
                    <p className='paragraph'>We highlight positive news from reputable sources and filtering articles into categories. We motivate readers to explore and gain knowledge about topics that interest them by offering a variety of topics. By consolidating postive articles in a single location, we optimize the process of seeking out positive for readers who would have trouble doing so otherwise.</p>
                </div>

            </Tab>
            <Tab eventKey='who' title='Who are we?' className='tab'> 
                <div className='container'>
                    <h1 className='title'>Who are we?</h1>
                    <h2 className='value'>Our Motivation</h2>
                    <p className='paragraph'>We are a group of students studying Computer Science at the University of Illinois at Urbana-Champaign. We are tired of witnessing the constant circulation of misinformation and negative news. We were motivated to create this app based on the belief that it is important to stay informed on all kinds of news. However, we have observed that excessive consumption of bleak and depressing information can be more harmful than helpful. OptiNews highlights the positve events happening in the world to supplement regular news intake. We hope our app encourages people to stay aware of what is happening in the world without constantly feeling disheartened.</p>
                </div>
                
            </Tab>
            <Tab eventKey='values' title='Our Values' className='tab'>
                <div className='container'>
                    <h1 className='title'>Our Values</h1>
                    <h2 className='value'>Optimism</h2>
                    <p className='paragraph'>It is easy to lose sight of the real good that exists in the world, especially given its current state. This positivity is often not showcased enough, and we are here to change that.</p>
                    <h2 className='value'>Truth</h2>
                    <p className='paragraph'>Misinformation spreads rapidly on the internet and we want no part in that. We display news from a number of reliable sources to ensure that information is factually accurate.</p>
                    <h2 className='value'>Curiosity</h2>
                    <p className='paragraph'>We want our readers to genuinely enjoy what they are reading while gaining valuable information. We hope to target topics that pique and sustain users’ interests.</p>
                    <h2 className='value'>Accessibility</h2>
                    <p className='paragraph'>We want to make positive infomration more accesible to our readers. It is often difficult to seek out positive news. Optinews solves that problem by consolidating it in one place.</p>
                </div>
                
            </Tab>
        </Tabs>
        </div>

    );
}

export default About;