import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const leaders = [
  {
    name: "Daniella Smith",
    role: "CEO & Founder",
    img: "https://static.vecteezy.com/system/resources/thumbnails/033/168/347/small/an-attractive-african-american-business-woman-smiling-ai-generative-free-photo.jpg",
    socials: ["linkedin", "twitter", "email"]
  },
  {
    name: "Emmanuel James",
    role: "Chief Operations Officer",
    img: "https://st2.depositphotos.com/1158045/5879/i/450/depositphotos_58797721-Young-black-businessman-outdoor.jpg",
    socials: ["linkedin", "twitter", "email"]
  },
  {
    name: "Samuel Joshua",
    role: "Chief Technology Officer",
    img: "https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_1280.jpg",
    socials: ["linkedin", "twitter", "email"]
  },
  {
    name: "Hannah Ekundayo",
    role: "Chief Marketing Officer",
    img: "https://img.freepik.com/premium-photo/arms-crossed-lawyer-portrait-happy-black-woman-with-smile-confidence-working-law-firm-confidence-empowerment-proud-african-attorney-with-leadership-vision-legal-agency_590464-205123.jpg?semt=ais_hybrid&w=740",
    socials: ["linkedin", "twitter", "email"]
  }
];

const getIcon = (platform) => {
  switch (platform) {
    case "linkedin":
      return <FaLinkedin className="mx-1" />;
    case "twitter":
      return <FaTwitter className="mx-1" />;
    case "email":
      return <FaEnvelope className="mx-1" />;
    default:
      return null;
  }
};

const MissionAndLeaders = () => (
  <Container fluid className="py-5 px-0 bg-white">
    {/* Our Mission Section */}
    <Row className="align-items-center px-3 px-md-5 mb-5">
      <Col md={6} className="mb-4 mb-md-0">
        <h2 className="fw-bold mb-2" style={{ color: "#11998e" }}>Our Mission</h2>
        <h5 className="mb-3 text-secondary" style={{ fontWeight: 500 }}>
          Empowering Africa’s Auction Community
        </h5>
        <p className="text-muted fs-5">
          To revolutionize the auction experience in Africa by providing a secure, user-friendly, and innovative platform for buying and selling unique items. We connect thousands of bidders and sellers nationwide, making auctions accessible, transparent, and exciting for everyone.
        </p>
      </Col>
      <Col md={6}>
        <Row className="g-2">
          <Col xs={6}>
            <Image
              src="https://t3.ftcdn.net/jpg/11/60/37/74/360_F_1160377451_IsEiX5xkC4TIXU6qXK3VbxAgcoGc5oAC.jpg"
              fluid
              rounded
              style={{ width: "100%", height: "110px", objectFit: "cover", boxShadow: "0 2px 12px rgba(67,233,123,0.10)" }}
            />
          </Col>
          <Col xs={6}>
            <Image
              src="https://d3j17a2r8lnfte.cloudfront.net/int/2023/9/medium/AOsz-eY5f9LDj_sA4Vc3Ozy6.jpeg"
              fluid
              rounded
              style={{ width: "100%", height: "110px", objectFit: "cover", boxShadow: "0 2px 12px rgba(67,233,123,0.10)" }}
            />
          </Col>
          <Col xs={12}>
            <Image
              src="https://media.istockphoto.com/id/1439686281/vector/auction-and-mobile-phone-bidding-concept.jpg?s=612x612&w=0&k=20&c=YfINX2-ALYsSG93X91c3WzwUiE-h9lm3Jx3tOViERxM="
              fluid
              rounded
              style={{ width: "100%", height: "110px", objectFit: "cover", boxShadow: "0 2px 12px rgba(67,233,123,0.10)" }}
            />
          </Col>
        </Row>
      </Col>
    </Row>

    {/* Meet Our Leaders Section */}
    <section className="mt-5">
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold text-success mb-3">Quick Links</h6>
        <ul className="list-unstyled small">
          <li>
            <Link to="/about" className="text-white-50 text-decoration-none">
              About Us
            </Link>
          </li>
          <li><a href="#" className="text-white-50 text-decoration-none">Feedback</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">Shops</a></li>
        </ul>
      </div>
      <h3 className="fw-bold text-center mb-2" style={{ color: "#11998e" }}>Meet Our Leaders</h3>
      <p className="text-muted text-center mb-5" style={{ maxWidth: 600, margin: "0 auto" }}>
        Our leadership team is passionate about building a trusted and innovative auction platform for Africa and beyond.
      </p>
      <Row className="g-4 justify-content-center">
        {leaders.map((leader, idx) => (
          <Col key={idx} xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm h-100 text-center leader-card" style={{ transition: "transform 0.2s" }}>
              <Card.Body>
                <Image
                  src={leader.img}
                  roundedCircle
                  className="mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #43e97b" }}
                />
                <h6 className="fw-bold mb-1">{leader.name}</h6>
                <small className="text-muted d-block mb-2">{leader.role}</small>
                <div>
                  {leader.socials.map((platform, i) => (
                    <a href="#" key={i} className="text-success fs-5 mx-2" style={{ verticalAlign: "middle" }}>
                      {getIcon(platform)}
                    </a>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
    <style>
      {`
        .leader-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(67,233,123,0.18);
        }
      `}
    </style>
  </Container>
);

export default MissionAndLeaders;