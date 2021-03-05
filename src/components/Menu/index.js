import React, { useEffect, useState, useMemo, memo } from 'react';
import styled from 'styled-components';

const MenuContainers = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  position: fixed;
  bottom: 95px;
  left: 15px;
  border-radius: 20px;
  background-color: white;
  z-index: 11111111111;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  @media (max-width: 739px) {
    display: flex;
  }
`;

const Link = styled.a`
  color: #013668;
  display: block;
  font-size: 16px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 60px;
  text-decoration: none;
  line-height: 40px;
  text-align: center;
  &:hover {
    background-color: rgb(5, 167, 173);
    color: white;
  }
`;

const Item = styled.li`
  list-style: none;
  ${Link} {
    border-radius: ${(props) => borderRadiusLarge(props.className)};
  }
  @media (max-width: 739px) {
    ${Link} {
      padding: 0;
      border-radius: ${(props) => borderRadiusSmall(props.className)};
    }
  }
  @media (max-width: 399px) {
    ${Link} {
      font-size: 14px;
      min-width: 50px;
    }
  }
  &.active {
    ${Link} {
      color: white !important;
      background-color: #013668 !important;
    }
  }
`;

const borderRadiusLarge = (className) => {
  if (className.includes('topli')) return '20px 20px 0px 0px';
  else if (className.includes('bottomli')) return '0px 0px 20px 20px';
  else return '0px';
};

const borderRadiusSmall = (className) => {
  if (className.includes('topli')) return '20px 0px 0px 20px';
  else if (className.includes('bottomli')) return '0px 20px 20px 0px';
  else return '0px';
};

const Menu = ({ onHandleClick }) => {
  const links = useMemo(
    () => [
      {
        name: 'Snow',
        to: '#',
        className: 'topli',
      },
      {
        name: 'Floor 8',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 7',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 6',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 5',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 4',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 3',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 2',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 1',
        to: '#',
        className: '',
      },
      {
        name: 'Floor 0',
        to: '#',
        className: '',
      },
      {
        name: 'General',
        to: '#',
        className: 'bottomli active',
      },
    ],
    []
  );

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    links[10].className = 'bottomli';
  }, [links]);

  const handleClick = (name) => {
    setActiveLink(name);
    onHandleClick(name);
  };

  return (
    <MenuContainers id="menu">
      <List>
        {links.map((link, index) => (
          <Item
            key={link.name}
            onClick={() => handleClick(link.name)}
            className={
              link.className + (link.name === activeLink ? ' active' : '')
            }
            id={`floor${index}`}
          >
            <Link href={link.to}>{link.name}</Link>
          </Item>
        ))}
      </List>
    </MenuContainers>
  );
};

export default memo(Menu);
