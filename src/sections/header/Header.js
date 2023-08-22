import "./header.css";
import { Container, NavItem } from "../../components/modules";
import { Link } from "react-router-dom";

import { FaBars, FaSearch, FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const navList = [
    { id: "/", title: "Home" },
    { id: "/about", title: "About" },
    { id: "/shop", title: "Shop" },
    { id: "/contact", title: "Contact" },
  ];

  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <Container>
        <div className="logo">
          <Link to="/">
            <img src="/images/apple-icon.png" alt="" />
          </Link>
        </div>

        <div
          className={menu ? "menu active" : "menu"}
          onClick={() => setMenu(!menu)}
        >
          <FaBars />
        </div>

        <div className={menu ? "header-nav show" : "header-nav"}>
          <ul className="nav-list">
            {navList.map((li) => (
              <NavItem
                key={li.id}
                id={li.id}
                title={li.title}
                handleClick={() => setMenu(false)}
              />
            ))}
          </ul>

          <div className="header-icons">
            <div className="search" onClick={() => setModal(true)}>
              <FaSearch className="icon" />
            </div>
            <div className="search-form">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="input"
              />
              <button>
                <FaSearch className="icon" />
              </button>
            </div>
            <div className="cart">
              <FaCartArrowDown className="icon" />
              <span className="number">7</span>
            </div>
            <div className="user">
              <FaUserAlt className="icon" />
              <span className="number">+99</span>
            </div>
          </div>
        </div>
      </Container>

      <div
        className={modal ? "modal open " : "modal"}
        onClick={() => setModal(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={() => setModal(false)}>
            X
          </span>
          <div className="search-form">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="input"
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
