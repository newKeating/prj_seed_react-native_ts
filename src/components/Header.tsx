import React from 'react';
import styled from 'styled-components';
import style_constants from '../styles/style_constants';
import Button from './Button';
// import Ionicon from "react-native-vector-icons/Ionicons";
import {withNavigation} from 'react-navigation';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${style_constants.width};
  height: ${style_constants.height * 0.13};
  border: 1px solid ${props => props.theme.lightGreyColor};
`;

const FirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${style_constants.width};
  padding: 16px;
`;

const RightFirstLine = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

const Header = props => {
  console.log('Header props', props);

  return (
    <Container>
      <FirstLine>
        <Logo>CareDoc Plus</Logo>
        <RightFirstLine>
          {/* <Ionicon name="ios-notifications-outline" size={30} /> */}
        </RightFirstLine>
      </FirstLine>
    </Container>
  );
};

export default withNavigation(Header);
