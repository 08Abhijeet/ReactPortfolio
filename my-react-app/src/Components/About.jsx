import styled from "styled-components";

import Typewriter from 'typewriter-effect';
import { Bio } from "../data/constants";
const Container = styled.div`
  display: flex;
  width: 100%;

  height: 50rem;
  margin-top: 1rem;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    
  }
  
  @media (max-width: 768px)
  {
    margin: 0 auto;
    display: flex;
    padding: 0px;
    height: fit-content;
    }
`;



// Define a keyframe animation for the glowing effect

const NavContainer = styled.div`
  width: 80rem;
  margin: 0 auto;
  display: flex;
  margin-top: 7rem;
  height: 40rem;
  justify-content: space-between;
  align-items: center;
 
  gap: 10rem;
  border: 1px solid transparent; /* Set initial border color */
  border-radius: 5rem;

  color: white;



  @media (max-width: 768px) {
    height: fit-content;
    width: 20rem;
    display: flex;
    gap: 3rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
  }
`;


const Division = styled.div`

height: 35rem;
width: 40rem;
  padding: 0 10px;
  display: flex;
font-weight: 700;
 
  flex-direction: column;
 
  justify-content: center;
 gap: 20px;

  color: white;
  font-size: 3.7rem;
@media (max-width:768px)
{
    font-size: 2rem;
    width:100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  gap: 1.2rem;
}
`;
const Divisiontwo = styled.div`
  height: 25rem;
  width: 25rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  background-image: url("bull.jpg");
  align-items: center;
  background-size: 20rem;
  background-position: center;
  border-radius: 50%;
  padding: 0 10px;
  margin-bottom: 5rem;
  border-bottom: 10px solid red;
  border-top: none;
  flex-direction: column;
@media (max-width: 768px)
{
    width: 16rem;
    height: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
border-radius:50%;
border: 1px solid black;

margin: 0 auto;
}
`;
const Texted = styled.div`
  
 font-size: 1rem;
  height: 10rem;
  width: 30rem;
  color: grey;
  display: flex;
  @media (max-width: 768px)
  {
    font-size: 12px;
    height: 10rem;
    width: 16rem;
    
  }

`;
const Text = styled.div`
width: 30rem;
height: 3rem;
display: flex;

font-size: 2.2rem;
gap: 15px;
@media (max-width: 768px)
{
    height: fit-content;
    width: fit-content;
    display: flex;
   margin-left: 3rem;
   margin: 0 auto;
    flex-direction: row;
    font-size: 20px;
    
}
`;
const Resume = styled.button`
  height: 4rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-radius: 17px;
  border: 2px solid yellow;
  background-color: transparent;
  color: yellow;
  cursor: pointer;
  transition: All 0.8s ease, color 0.8s ease;

  &:hover {
    background-color: yellow;
    color: black;
    font-weight: 600;
    border: 1px solid black;
  }

  @media (max-width:768px)
  {

    width: 12rem;
    height: 3rem;
    font-size: 20px;
    padding: 0 8px;
  }
`;



const Noob = styled.div`
  

  height: fit-content;
  width: fit-content;
`;
const HrLine = styled.hr`
  width: 90rem;
  border: none;
 margin: 0 auto;
  height: 2.5px;
  margin-top: 10px;
  background-color: grey;
  @media (max-width: 768px)
  {
    width: 15rem;
    margin-top: 40px;
  }
`;
const About = () => {
  return (
    <>
    <Container>
      <NavContainer>
        {" "}
        <Division>
          <Noob> Hello, I am <br></br> Abhijeet Kadam</Noob>
         
          <Text>
            {" "}
            <p> I am a </p>
            <Typewriter 
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </Text>
          <Texted> {Bio.description}</Texted>
             <a href="final.pdf" style={{textDecoration:"none"}}   download={"final.pdf"}><Resume>  Check Resume </Resume></a>
       
        </Division>
       <Divisiontwo></Divisiontwo>
      </NavContainer>
    </Container>
    <HrLine />
    </>
  );
};

export default About;
