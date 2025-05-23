import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cards({
  image,
  rating,
  title,
  paragraph,
  price,
  renderRatingIcons,
}) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_cart">
              <Link to="/">
                <i className="bi bi-bag me-2" /> Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  renderRatingIcons: PropTypes.func,
};

Cards.defaultProps = {
  rating: 0,
  paragraph: "",
  renderRatingIcons: () => null,
};
