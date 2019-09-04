import React from 'react';
import styled from 'styled-components';
// import { TouchableOpacity } from "react-native-gesture-handler";
import style_constants from '../../styles/style_constants';
import Button from '../../components/Button';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${style_constants.width / 2.5};
`;

const Touchable = styled.TouchableOpacity`
  margin-top: 20;
`;

const LoginLink = styled.View``;

const LoginLinkText = styled.Text`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
`;

export default ({navigation}) => (
  <View>
    {/* <Image resizeMode="contain" source={require("../../assets/logo.png")} /> */}
    <Button onPress={() => navigation.navigate('Signup')}>가입하기</Button>
    <Touchable onPress={() => navigation.navigate('Login')}>
      <LoginLink>
        <LoginLinkText>로그인</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);
