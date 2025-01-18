import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import gameImage from "../assets/img/gameDiscovery.png";
import foodAppImage from "../assets/img/foodapp.png";
import workResumeImage from "../assets/img/workResume.png";
import toDoAppImage from "../assets/img/todoApp.png";
import angryBirdsImage from "../assets/img/angrybirdsGame.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "video game discovery app",
      description:
        "This is a video game search application I created using React and Typescript",
      imgUrl: gameImage,
      link: "https://video-game-discovery-app-five.vercel.app/",
    },
    {
      title: "Work Resume",
      description:
        "This is a my work resume I created using React and Typescript",
      imgUrl: workResumeImage,
      link: "https://resume-website-six-flax.vercel.app/",
    },
    {
      title: "Angry Bird clone",
      description: "This is an Angry Bird clone I made using unity.",
      imgUrl: angryBirdsImage,
      link: "https://play.unity.com/en/games/bc2e295a-ed35-4e1c-8c4c-373be254be9e/angry-bird-clone",
    },
    {
      title: "Food App",
      description: "This is a recipe search application I created using React",
      imgUrl: foodAppImage,
      link: "https://foodapp-indol.vercel.app/",
    },
    {
      title: "Todo app",
      description: "This is a todo application I created using React",
      imgUrl: toDoAppImage,
      link: "https://todoapp-psi-liart.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              dolore.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pill mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>{" "}
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>{" "}
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
