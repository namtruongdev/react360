import React, { useState, useMemo, memo, useCallback } from 'react';

import { MenuContainers, List, Item, Link, FloorSubmenu } from './styles';

const Menu = () => {
  const links = useMemo(
    () => [
      {
        name: 'Drone View',
        to: '#',
        className: 'topli',
        id: 'drone-view',
      },
      {
        name: 'General (Snow)',
        to: '#',
        className: '',
        id: 'general-snow',
      },
      {
        name: 'General',
        to: '#',
        className: '',
        id: 'general',
      },
      {
        name: 'Floors',
        to: '#',
        className: 'bottomli',
        id: 'floors',
        children: [
          {
            name: "Floor 8",
            to: '#',
            className: '',
          },
          {
            name: "Floor 7",
            to: '#',
            className: '',
          },
          {
            name: "Floor 6",
            to: '#',
            className: '',
          },
          {
            name: "Floor 5",
            to: '#',
            className: '',
          },
          {
            name: "Floor 4",
            to: '#',
            className: '',
          },
          {
            name: "Floor 3",
            to: '#',
            className: '',
          },
          {
            name: "Floor 2",
            to: '#',
            className: '',
          },
          {
            name: "Floor 1",
            to: '#',
            className: '',
          },
          {
            name: "Floor 0",
            to: '#',
            className: '',
          },
        ],
      },
    ],
    []
  );

  const [activeLink, setActiveLink] = useState('General');

  // useEffect(() => {
  //   // links[10]?.className = 'bottomli';
  // }, [links]);

  const handleClick = useCallback((name) => {
    setActiveLink(name);
  }, []);

  const [isActive, setActive] = useState('');
  const handleActiveFloor = (index) => {
    setActive(index);
  }

  return (
    <MenuContainers id="menu">
      <List>
        {links.map((link) => (
          <Item
            key={link.name}
            onClick={() => handleClick(link.name)}
            className={
              link.className + (link.name === activeLink ? ' active' : '')
            }
            id={link.id}
          >
            {!link?.children && <Link href={link.to}>{link.name}</Link>}
            {link?.children && (
              <details>
                <summary>{link.name}</summary>
                <FloorSubmenu id="floor-submenu">
                  {link.children.map((el, index) => (
                    <li
                      className={isActive === index ? 'active' : ''}
                      key={index}
                      id={`floor-${el.name.slice(5, 12).replace(/\s/g, '')}`}
                      onClick={() => handleActiveFloor(index)}
                    >
                      {el.name}
                    </li>
                  ))}
                </FloorSubmenu>
              </details>
            )}
          </Item>
        ))}
      </List>
    </MenuContainers>
  );
};

export default memo(Menu);
