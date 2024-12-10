import styled from "styled-components";
import Situated from "./Situated";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { TbFileTypeCss } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
const Skilles = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 5rem;
  display: flex;
`;

const Items = styled.div`
  height: fit-content;
  width: fit-content;

  margin: 0 auto;
  @media (max-width: 768px) {
    height: fit-content;
    width: fit-content;
  }
`;

const Item1 = styled.div`
  display: flex;
  color: #ffffff;

  font-size: 3rem;
  text-align: center;
  width: fit-content;

  height: fit-content;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 10rem;
    text-align: center;
    width: 20rem;
    font-size: 2.5rem;
    display: flex;
    margin: 0 20px;
    align-items: center;
    justify-content: center;
  }
`;

const Item2 = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 12rem;
  align-items: center;
  margin-top: 4rem;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 25px;
    margin: 0 auto;
    margin-top: 4rem;
  }
`;

const Styleditems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;
const Nexted = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 10px;
  }
`;
const StyledParagraph = styled.p`
  font-size: 40px;
  color: white;
  display: flex;
  align-items: center;
  gap: 13px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const HrLine = styled.hr`
  width: 90rem;
  border: none;
 margin: 0 auto;
  height: 2.5px;
  margin-top: 80px;
  background-color: grey;
  @media (max-width: 768px)
  {
    width: 15rem;
    margin-top: 40px;
  }
`;
const Last = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
  width: 70rem;
  color: grey;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: fit-content;
  }
`;
const Skills = () => {
  return (
    <>
    <Skilles>
      <Items>
        <Item1>
          <p>
            Skills <br></br>
            <Last>
              Versatile skill set encompassing proficiency in JavaScript,
              ReactJS, HTML, CSS, and Java. Proven track record of applying
              these skills to deliver impactful and innovative solutions in web
              development.
            </Last>
          </p>
        </Item1>
        <Item2>
          <Nexted>
            <StyledParagraph>
              {" "}
              <TbBrandJavascript color="orange" /> JavaScript
            </StyledParagraph>
            <StyledParagraph>
              {" "}
              <IoLogoHtml5 color="green" />
              Html
            </StyledParagraph>
            <StyledParagraph>
              <RiReactjsLine color="cyan" /> ReactJS
            </StyledParagraph>
            <StyledParagraph>
              <FaJava color="yellow" /> Java
            </StyledParagraph>
            <StyledParagraph>
              <TbFileTypeCss color="magenta" /> CSS
            </StyledParagraph>
          </Nexted>

          <Styleditems>
            <Situated
              numberOfItems={13}
              numberOfItemsMobile={4}
              itemBackgroundColor="orange"
            />

            <Situated
              numberOfItems={12}
              numberOfItemsMobile={6}
              itemBackgroundColor="green"
            />

            <Situated
              numberOfItems={18}
              numberOfItemsMobile={5}
              itemBackgroundColor="cyan"
            />

            <Situated
              numberOfItems={10}
              numberOfItemsMobile={7}
              itemBackgroundColor="yellow"
            />

            <Situated
              numberOfItems={15}
              numberOfItemsMobile={3}
              itemBackgroundColor="magenta"
            />
          </Styleditems>
        </Item2>
      </Items>
    </Skilles>
    <HrLine/>
    </>
    
  );
};

export default Skills;
