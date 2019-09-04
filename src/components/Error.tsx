import React, { ReactChild } from "react";
import styled from "styled-components";
import style_constants from "../styles/style_constants";

const ErrorContainer = styled.View`
  margin-top: 10px;
`;

const _Error = styled.Text`
  color: #ed4956;
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
  padding: 0 5px;
  width: ${style_constants.width * 0.65};
`;

interface iProps {
  children: ReactChild;
  isVisible?: boolean;
}

const Error: React.FC<iProps> = ({ children, isVisible }) => (
  <ErrorContainer>
    {isVisible ? <_Error>{children}</_Error> : null}
  </ErrorContainer>
);

export default Error;
