import CenterCard from "./CenterCard";
import { Container } from "react-bootstrap";
export default function HomePage() {
  return (
    <Container className="homeContainer">
      <h2>Welcome to The Zone</h2>
      <div>
        Hello! I'm Khaleb. This is my personal website! I designed this
        personally (without AI usage), starting with create-react-app as a
        boilerplate/baseline for my project. This is mostly just my own
        interests being expressed creatively through the medium I love and know
        best : Coding! Please; stay a while. Learn more about me!
      </div>
    </Container>
  );
}
