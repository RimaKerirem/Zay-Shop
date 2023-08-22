import { FaChevronCircleDown } from "react-icons/fa";
import "./sidebar-shop.css";
import { useState } from "react";

function SideBarShop() {
  const [activeUl, setActiveUl] = useState("");

  const list = [
    {
      id: "cat-1",
      name: "Gender",
      ul: [
        { id: "men", li: "Men" },
        { id: "women", li: "Women" },
      ],
    },
    {
      id: "cat-2",
      name: "Sale",
      ul: [
        { id: "sport", li: "Sport" },
        { id: "luxury", li: "Luxury" },
      ],
    },
    {
      id: "cat-3",
      name: "Product",
      ul: [
        { id: "bag", li: "Bag" },
        { id: "sweather", li: "Sweather" },
        { id: "sunglass", li: "Sunglass" },
      ],
    },
  ];

  return (
    <ul className="sidebar-shop">
      {list.map((item) => (
        <li key={item.id} onClick={() => setActiveUl(item.id)}>
          <span>
            {item.name}
            <FaChevronCircleDown className="down" />
          </span>

          <ul className={activeUl === item.id ? "active" : ""}>
            {item.ul.map((li) => (
              <li key={li.id}>
                <a href="#top-nav">{li.li}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default SideBarShop;
