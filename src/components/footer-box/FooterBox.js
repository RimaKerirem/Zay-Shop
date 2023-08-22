import "./footer-box.css";

function FooterBox({ list, title }) {
  return (
    <div className="footer-box">
      <h1 className="box-title">{title}</h1>
      <ul className="box-content">
        {list.map((li) => (
          <li key={li.id}>
            <a href="#top-nav">{li.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterBox;
