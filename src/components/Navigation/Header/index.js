import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
`;

export default () => {
  return (
    <HeaderContainer>
      <Logo/>
      <NavigationItems />
    </HeaderContainer>
  );
};