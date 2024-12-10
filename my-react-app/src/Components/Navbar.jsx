import styled from "styled-components";
import { GiReactor } from "react-icons/gi";
import { keyframes } from "styled-components";
import { useState } from "react";

const Navcontainer = styled.div`
  position: fixed;
 top: 0%;
  width: 100%;
  display: flex;
  height: 7.5rem;
 
  background-color: #0a0a0a;
  z-index: 1000; /* Set a high z-index to keep it above the content */
  @media (max-width: 768px)
  {

    height: 6rem;
  }
`

const Nav = styled.div`
  width: 90rem;
  height: 5.4rem;
  border: 1px solid white;
  border-radius: 1.7rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 1rem;
  flex-wrap: wrap;
  background-image: url("bhari.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    max-width : 100%;
    display: flex;
    height: 4rem;
    border-radius: 15px;
   margin: 13px;
    padding: 0 10px;
 
  }
`;

const Items = styled.div`
  width: fit-content;
  height: fit-content;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Icons = styled.div`
  animation: ${rotate} 5s infinite linear;

`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.9);
  @media (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  }
`;

const Navitems = styled.div`
  display: flex;
  gap: 38px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid #9ca3af;
  justify-content: center;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  height: 3rem;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
  text-decoration: none;

  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: black;
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    display: block;
    height: 100%;
    padding: 0 6px;
    margin-left: 77%;
    margin-right: 2rem;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
color: white;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    padding-bottom: 1rem;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <Navcontainer>
      <Nav>
        <Items>
          <Icons>
            <GiReactor style={{ color: "yellow", fontSize: 40 }} />
          </Icons>{" "}
          Portfolio
        </Items>
        <MobileMenuIcon onClick={toggleMobileMenu}>☰</MobileMenuIcon>
        <Navitems>
          <NavLink>Home</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Education</NavLink>
          <NavLink>Skills</NavLink>
        </Navitems>
        <ButtonContainer>
          <GithubButton href="https://github.com/08Abhijeet/Portfolio">Github Profile</GithubButton>
        </ButtonContainer>
        {showMobileMenu && (
          <MobileMenu showMenu={showMobileMenu}>
            <NavLink>Home</NavLink>
            <NavLink>Skills</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Education</NavLink>
            <GithubButton >Github Profile</GithubButton>
          </MobileMenu>
        )}
      </Nav>
    </Navcontainer>
  );
};

export default Navbar;
