import { Row, Col, Pagination } from "react-bootstrap";
const Paginate = ({ next, previous, handlerPage }) => {
  const handlerNext = () => {
    const [, query] = next.split("?");
    console.log(query);
    handlerPage(query);
  };

  return (
    <Row>
      <Col>
        {/* evalua el valor real de previous con !! y si es null renderiza */}
        <Pagination>
          {!!previous && <Pagination.Prev />}
          <Pagination.Next onClick={handlerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;
