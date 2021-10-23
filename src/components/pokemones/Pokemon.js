import { Col, Card } from "react-bootstrap";

const Pokemon = ({ name, image }) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text className="text-center">{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Pokemon;
