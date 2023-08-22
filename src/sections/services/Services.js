import "./services.css";
import {
  Container,
  SectionContainer,
  SectionTitle,
  ServiceBox,
} from "../../components/modules";
import { FaExchangeAlt, FaPercent, FaTruck, FaUserAlt } from "react-icons/fa";

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: <FaTruck />,
      name: "Delivery Services",
    },
    {
      id: 2,
      icon: <FaExchangeAlt />,
      name: "Shipping & Return",
    },
    {
      id: 3,
      icon: <FaPercent />,
      name: "Promotion",
    },
    {
      id: 4,
      icon: <FaUserAlt />,
      name: "24 Hours Service",
    },
  ];
  return (
    <section className="services">
      <Container>
        <SectionTitle
          mainTitle="Our Services"
          mainText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
        />
        <div className="services-container">
          <SectionContainer>
            {servicesList.map((service) => (
              <ServiceBox key={service.id} service={service} />
            ))}
          </SectionContainer>
        </div>
      </Container>
    </section>
  );
}

export default Services;
