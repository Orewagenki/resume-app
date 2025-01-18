import { Col } from "react-bootstrap";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

const ProjectCard = ({ title, description, imgUrl, link }: Props) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={link} target="_blank">
            Website
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
