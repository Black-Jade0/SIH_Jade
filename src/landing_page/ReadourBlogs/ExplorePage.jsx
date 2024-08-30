import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ExplorePage = () => {
  const categories = [
      {
          title: "Youth Higher Studies",
          description:
              "Explore various opportunities for higher studies for youth.",
          image: "link_to_youth_higher_studies_image",
      },
      {
          title: "Vocational Studies",
          description:
              "Discover vocational courses that can set you on a path to success.",
          image: "/public/Vocational.jpeg",
      },
      {
          title: "School Education",
          description:
              "Find the best education options for school-going students.",
          image: "link_to_school_education_image",
      },
      // Add more categories as needed
  ];

  return (
    <Container className="explore-page">
      <h1 className="text-center my-5">Explore Careers</h1>
      <Row>
        {categories.map((category, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="category-card">
              <Card.Img className='Card_img' variant="top" src={category.image} alt={category.title} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExplorePage;
