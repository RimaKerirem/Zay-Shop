import "./section-title.css";

function SectionTitle({ mainTitle, mainText }) {
  return (
    <div className="section-title">
      <h1 className="main-title">{mainTitle}</h1>
      <p className="main-text">{mainText}</p>
    </div>
  );
}

export default SectionTitle;
