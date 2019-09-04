import React from "react";
import styled from "styled-components";
import style_constants from "../styles/style_constants";
import Error from "./Error";
import { Platform } from "react-native";

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: ${style_constants.width / 1.5};
  /* height: ${props => (props.height ? props.height : null)}; */
  max-height: ${props => props.maxHeight};
  padding: 10px;
  background-color: ${props => props.theme.greyColor};
  border: 1px solid
    ${props =>
      props.error && props.touched ? "#ed4956" : props.theme.lightGreyColor};
  border-radius: 4px;
  display: flex;
  /* text-align-vertical: ${props =>
    Platform.OS === "android" ? "top" : null}; */
  text-align-vertical: top;
`;

type Keyboard =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad";

type AutoCapitalize = "none" | "sentences" | "words" | "characters";

type ReturnKey = "done" | "go" | "next" | "search" | "send";

interface InputProps {
  placeholder: string;
  value: string | number;
  error?: string;
  touched?: boolean;
  height?: number;
  maxHeight?: number;
  keyboardType?: Keyboard;
  autoCapitalize?: AutoCapitalize;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  returnKeyType?: ReturnKey;
  onSubmitEditing?: Function;
  editable?: boolean;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  blurOnSubmit?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  error,
  touched = false,
  height,
  maxHeight = 150,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  editable = true,
  autoCorrect = true,
  secureTextEntry = false,
  multiline = false,
  blurOnSubmit = true,
  numberOfLines,
  maxLength,
  onChange,
  onBlur,
  // onEndEditing = () => null
  onSubmitEditing = () => null
}) => {
  return (
    <Container>
      <TextInput
        onChangeText={onChange}
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        // onEndEditing={onEndEditing}
        // 외부화면 클릭시에도 send call이 작동되는 버그
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        blurOnSubmit={blurOnSubmit}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        value={value}
        error={error ? true : false}
        touched={touched}
        height={height}
        maxHeight={maxHeight}
      />
      <Error isVisible={error && touched ? true : false}>{error}</Error>
    </Container>
  );
};

export default Input;

// Input.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   error: PropTypes.string,
//   keyboardType: PropTypes.oneOf([
//     "default",
//     "number-pad",
//     "decimal-pad",
//     "numeric",
//     "email-address",
//     "phone-pad"
//   ]),
//   autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
//   onChange: PropTypes.func.isRequired,
//   returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
//   onSubmitEditing: PropTypes.func,
//   autoCorrect: PropTypes.bool,
//   secureTextEntry: PropTypes.bool
// };
