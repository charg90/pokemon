import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
const SearchBar = ({ handlerSearch }) => {
  const [pokemon, setPokemon] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerSearch(pokemon);
  };
  const handlerInput = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Form onSubmit={handlerSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar Pokemon"
              onChange={handlerInput}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">BUSCAR</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchBar;
