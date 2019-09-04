import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import style_constants from "../styles/style_constants";

const Touchable = styled.TouchableOpacity``;
const Container = styled.View`
  background-color: ${props =>
    props.disabled ? props.theme.lightGreyColor : props.theme.blueColor};
  padding: 10px;
  margin: 0px 50px;
  border-radius: 4px;
  width: ${props => (props.width ? props.width : style_constants.width / 3)};
  height: ${props =>
    props.height ? props.height : style_constants.height * 0.05};
`;
const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

interface Props {
  disabled?: boolean;
  loading?: boolean;
  onPress: Function;
  width?: number;
  height?: number;
  className?: string;
  bgColor?: string;
  children: React.ReactChild;
}

const Button: React.FC<Props> = ({
  children,
  onPress,
  disabled = false,
  loading = false,
  bgColor = null,
  width = style_constants.width / 1.5,
  height,
  className
}) => (
  <Touchable
    disabled={disabled}
    onPress={onPress}
    className={className}
    width={width}
  >
    <Container
      bgColor={bgColor}
      disabled={disabled}
      width={width}
      height={height}
    >
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  </Touchable>
);

export default Button;
