import styled from "styled-components";

const Outer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  margin-top: 4.5rem;
  margin-bottom: 2rem;
`;

const Inner = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  border-radius: 1rem;
  margin: 0 auto;
  background-color: #000000;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
`;


const Item1 = styled.div`
  display: flex;
  height: fit-content;

  width: fit-content;
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  margin: 0%;
  color: #1eff00;
`;

const Item2 = styled.div`
  height: 30rem;
  width: 85rem;
  border-radius: 5rem;
  color: white;
  border: 1.7px solid white;
  flex-direction: row;
  gap: 4px;

  display: flex;
  img {
    height: 24rem; /* Adjust size as needed */
    width: 25rem;
    border: 2px solid black;
    border-radius: 2.5rem;
    margin: auto;
    margin-left: 10px;
    margin-right: 2.5rem; /* Add spacing between the image and text */
  }
  p {
    font-size: 1.35rem;
    font-weight: 500;
    margin-top: 10px;
    text-align: justify;
   margin-right: 20px;
  }
  a {
    color: #ffd900;
    font-size: 1.5rem;
    margin-top: 10px;
  }
  h1{

    margin-top: 35px;
    font-size: 38px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center; /* Horizontally center the Content */
  align-items: center; /* Vertically center the Content */
  flex-direction: column; /* Ensures sections are in a single row */
  gap: 2rem; /* Adds spacing between Content2 and Content1 */
  margin: auto;
`;

const Hello = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
`;

const Project = () => {
  return (
    <>
      <Outer>
        <Inner>
          <Item1>
            <p>My Projects</p>
          </Item1>
        </Inner>
      </Outer>
      <Content>
        <Item2>
          <img src="anime.jpg" alt="icon" />
          <Hello>
            <h1>
              YelpCamp
            </h1>
            <p>
              YelpCamp is a comprehensive web application developed using the
              MERN stack (MongoDB, Express.js, React, and Node.js). The platform
              allows users to explore a wide range of camping sites, add new
              camps, and leave reviews. It includes a user authentication system
              for secure access and features dynamic maps for better navigation
              and visualization. Real-time reviews enable users to share
              experiences and get recommendations. The application’s responsive
              design ensures a seamless experience across devices. It is an
              ideal solution for camping enthusiasts looking to connect and
              share their adventures.
            </p>
            <a href="https://github.com/08Abhijeet/YELPCAMP.git">
              Click here to get the code
            </a>
          </Hello>
        </Item2>
        <Item2>
          <img src="bhari.jpg" alt="icon" />
          <Hello>
          <h1>
             Document Clustering
            </h1>
            <p>
              This project utilizes Python and its powerful libraries to perform
              document clustering, a key task in natural language processing.
              The system groups similar documents based on their content,
              enabling efficient data organization and analysis. Advanced
              techniques like TF-IDF vectorization and K-means clustering are
              implemented for accuracy. The application is versatile, supporting
              clustering in various domains, including news articles and
              research papers. Designed for scalability and performance, it
              serves as a foundation for applications like topic modeling and
              content categorization. 
            </p>
            <a href="https://github.com/08Abhijeet/YELPCAMP.git">
              Click here to get the code
            </a>
          </Hello>
        </Item2>

        <Item2>
          <img src="bhoot.jpg" alt="icon" />
          <Hello>
          <h1>
              Investment Planner
            </h1>
            <p>
              Investment Planner is a web-based application designed to assist
              users in planning their financial investments. Developed using
              NLP, HTML, and CSS, the tool analyzes user inputs and financial
              data to generate personalized investment strategies. The
              application leverages natural language processing to interpret
              user goals and provide actionable insights. Its intuitive user
              interface ensures ease of navigation, making complex financial
              planning accessible to all. With a focus on reliability and
              user-centric design, the planner offers real-time data analysis to
              help users achieve their financial objectives.
            </p>
            <a href="https://github.com/08Abhijeet/YELPCAMP.git">
              Click here to get the code
            </a>
          </Hello>
        </Item2>
        <Item2>
          <img src="babe.jpg" alt="icon" />
          <Hello>
          <h1>
              YelpCamp
            </h1>
            <p>
              YelpCamp is a comprehensive web application developed using the
              MERN stack (MongoDB, Express.js, React, and Node.js). The platform
              allows users to explore a wide range of camping sites, add new
              camps, and leave reviews. It includes a user authentication system
              for secure access and features dynamic maps for better navigation
              and visualization. Real-time reviews enable users to share
              experiences and get recommendations. The application’s responsive
              design ensures a seamless experience across devices. It is an
              ideal solution for camping enthusiasts looking to connect and
              share their adventures.
            </p>
            <a href="https://github.com/08Abhijeet/YELPCAMP.git">
              Click here to get the code
            </a>
          </Hello>
        </Item2>
      </Content>
     
    </>
  );
};

export default Project;
