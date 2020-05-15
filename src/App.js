import React from 'react';
import './App.css';
import Navi from './Navi';
import { Container, Row, Col } from 'reactstrap'
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  let parentMessage = "Parent Message";
  return (
    <div className="App">
      <h3>Hi bro</h3>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="3">
            <ProductList parentMessage={parentMessage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
