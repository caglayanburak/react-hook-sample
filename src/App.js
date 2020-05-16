import React from 'react';
import './App.css';
import Navi from './Navi';
import { Container, Row, Col } from 'reactstrap'
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import { Post } from './components/PostComponent';
import PostPage from './PostPage';

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
        <Row>
        </Row>
      </Container>
      <PostPage />
    </div>
  );
}

export default App;
