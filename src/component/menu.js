import React, { useEffect, useState, useMemo } from 'react';
import './menu.css';

const Menu = ({ onHandleClick }) => {

  const links = useMemo(() => [
    {
      name: "Toiture",
      to: "#",
      className: "topli active"
    },
    {
      name: "R+4",
      to: "#",
      className: ""
    },
    {
      name: "R+3",
      to: "#",
      className: ""
    },
    {
      name: "R+2",
      to: "#",
      className: ""
    },
    {
      name: "R+1",
      to: "#",
      className: ""
    },
    {
      name: "RDC",
      to: "#",
      className: "bottomli"
    }
  ], [])

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    links[0].className = 'topli';
  }, [links])

  const handleClick = name => {
    setActiveLink(name);
    onHandleClick(name);
  };

  return (
    <div>
      <div className="menu">
        <ul>
          {links.map(link =>
            <li
              key={link.name}
              onClick={() => handleClick(link.name)}
              className={
                link.className +
                (link.name === activeLink ? " active" : "")
              }
            >
              <a href={link.to}>{link.name}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Menu
