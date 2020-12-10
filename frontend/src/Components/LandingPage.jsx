import React from "react";
import tw from "twin.macro";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../App.css';
import styled from "styled-components";
import Button from 'react-bootstrap/Button'

import toucan from '../toucan.png';
import news from '../news.jpg';

const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-red-500 hocus:text-red-500
`;
const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const Container = tw.div`relative`;
const ContentWithVerticalPadding = tw.div`py-20 lg:py-14`;
const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;

const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-blue-700 text-gray-100 hocus:bg-blue-500 hocus:text-gray-100 focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;

const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col sm:flex-row items-center justify-between`;

const DownloadLink = tw.a`mt-8 sm:mt-0 transition duration-300 font-medium pb-1 border-b-2 text-blue-700 border-purple-300 hocus:border-blue-800`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center py-20 lg:py-24 max-w-screen-2xl mx-auto`;
const SignUpLink = tw.a`mt-8 sm:mt-0 transition duration-300 font-medium pb-1 border-b-2 text-black border-black hocus:border-black`;

const HeadingBase = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const DescriptionBase = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-400 max-w-xl`;

const Column = tw.div``;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-blue-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-600 max-w-sm mx-auto lg:mx-0`;

const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-blue-700`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

export default ({
    primaryButtonUrl = "#aboutUs",
    secondaryButtonUrl = "#contact",
    buttonRoundedCss = "",
  }) => {         
    return (
      <div className = 'LandingPage'>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-0">
          <Content2Xl>
            <NavRow>
              <LogoLink href="/">
                <img src={toucan} alt="" />
                OptiNews
              </LogoLink>
              <DownloadLink target="_blank" href="http://cs196.cs.illinois.edu/">
                Sign Up!
              </DownloadLink>
            </NavRow>
            <HeroRow>
              <TextColumn>
                <Heading>Your solution for a depressing news feed.</Heading>
                <Description>
                  OptiNews is a React based web-app that displays positive articles to users.
                </Description>
                <Actions>
                  <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                    {"About Us"}
                  </PrimaryButton>
                  <SecondaryButton href={secondaryButtonUrl}>
                    {"Contact Us"}
                  </SecondaryButton>
                </Actions>
              </TextColumn> 
                  <Image src={news}/>
            </HeroRow>

            <SectionContainer id="aboutUs">
              <SectionHeading>About Us</SectionHeading>
              <SectionDescription>
              Made by a group of students studying Computer Science at the University of Illinois at Urbana-Champaign, 
              Optinews exists to redefine how people consume news. We highlight positive news and motivate 
              readers to explore and gain knowledge about topics that interest them by offering a variety of topics.
              <br />
              <Button href="/About">
                Read More..
              </Button>
              </SectionDescription>
            </SectionContainer>
            
            <SectionContainer>
              <SectionHeading>Easy Sign Up!</SectionHeading>
              <SectionDescription>
              You can sign up for a subscription of OptiNews using the link below. <br/>
              <SignUpLink target="_blank" href="http://cs196.cs.illinois.edu/">
                Sign Up Here.
              </SignUpLink>
              </SectionDescription>
            </SectionContainer>
  
            <SectionContainer>
              <SectionHeading>What We Used</SectionHeading>
              <SectionDescription>
                React <br />
                React Bootstrap <br />
                CSS/HTML <br />
                JavaScript/JSX <br/>
                React Router Dom <br/>
              </SectionDescription> 
            </SectionContainer>
            
            <SectionContainer id="contact">
              <SectionHeading>Contact Us!</SectionHeading>
              <SectionDescription>
              Have any questions? Contact us:
                <div>
                <input cols="0" rows="0" type="text" placeholder="email address" className="input-field"/>
                <input cols="0" rows="0" type="text" placeholder="comment" className="input-field"/>
                <br/>
                <button className="contact-btn">Send</button>
                </div>
              </SectionDescription>
            </SectionContainer>
          
          </Content2Xl>
        </Container>
        </div>
    );
  };