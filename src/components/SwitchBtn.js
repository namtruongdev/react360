import React, { memo } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 15px;
  background: cyan;
  position: fixed;
  top: 50px;
  left: 15px;
  z-index: 111111111111;
  cursor: pointer;
`;

const SwitchBtn = () => {
  return <Btn id="switchBtn">Chuyển cảnh</Btn>;
};

export default memo(SwitchBtn);
