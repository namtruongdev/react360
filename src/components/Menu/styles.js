import styled from 'styled-components';

export const MenuContainers = styled.div`
  position: fixed;
  top: 50%;
  left: 15px;
  z-index: 999;
  transform: translateY(-50%);
  .floor-toogle {
    position: absolute;
    bottom: -40px;
    border: none;
    background: rgb(5, 167, 173);
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  visibility: visible;
  background-color: #fff;
  /* border-radius: 20px; */
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
`;

export const FloorSubmenu = styled.ul`
  background: #fff;
  /* padding: 15px; */
  position: absolute;
  right: -88px;
  bottom: 0;
  transition: all 0.3s linear;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  li {
    list-style: none;
    padding: 7.5px 15px;
    border-bottom: 1px solid #f3f3f3;
    cursor: pointer;
    &:hover {
      background: rgb(5,167,173);
      color: #fff;
    }
    &.active {
      color: white;
      background-color: #013668;
    }
  }
  li:last-child {
    border: none;
  }
  &::before {
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    background: #fff;
    clip-path: polygon(0 50%, 50% 100%, 50% 0);
    position: absolute;
    left: -7.5px;
    bottom: 15px;
  }
`;

export const Link = styled.a`
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

export const Item = styled.li`
  list-style: none;

  @media (max-width: 399px) {
    ${Link} {
      font-size: 14px;
      min-width: 55px;
    }
  }
  &.active {
    ${Link} {
      color: white !important;
      background-color: #013668 !important;
    }

    details {
      background-color: #013668 !important;
      summary {
        color: white !important;
      }
    }
  }

  summary{
    outline: none;
    color: #013668;
    font-size: 16px;
    height: 40px;
    padding-right: 10px;
    padding-left: 15px;
    min-width: 60px;
    line-height: 40px;
    cursor: pointer;
    &:hover {
      background-color: rgb(5, 167, 173);
      color: white;
    }
    &.active {
      color: white !important;
      background-color: #013668 !important;
    }
  }
`;

export const borderRadiusLarge = (className) => {
  if (className.includes('topli')) return '20px 20px 0px 0px';
  else if (className.includes('bottomli')) return '0px 0px 20px 20px';
  else return '0px';
};

export const borderRadiusSmall = (className) => {
  if (className.includes('topli')) return '20px 20px 0px 0px';
  else if (className.includes('bottomli')) return '0px 0px 20px 20px';
  else return '0px';
};
