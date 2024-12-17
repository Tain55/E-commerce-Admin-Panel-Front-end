import { Card, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Total Products</h4>
              <p>120</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Total Orders</h4>
              <p>350</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Total Users</h4>
              <p>180</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
