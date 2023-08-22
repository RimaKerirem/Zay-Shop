import "./service-box.css";

function ServiceBox({ service }) {
  return (
    <div className="service-box">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-name">{service.name}</h3>
    </div>
  );
}

export default ServiceBox;
