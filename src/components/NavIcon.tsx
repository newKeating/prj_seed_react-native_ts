import React from "react";
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";
import Theme from "../styles/Theme";

const NavIcon = ({
  focused = true,
  name,
  color = Theme.blackColor,
  size = 30,
  iconType
}) => {
  if (iconType === "fontawesome") {
    return (
      <FontAwesomeIcon
        name={name}
        color={focused ? color : Theme.darkGreyColor}
        size={size}
      />
    );
  } else if (iconType === "materialCommunity") {
    return (
      <MaterialCommunityIcon
        name={name}
        color={focused ? color : Theme.darkGreyColor}
        size={size}
      />
    );
  } else {
    return (
      <Ionicon
        name={name}
        color={focused ? color : Theme.darkGreyColor}
        size={size}
      />
    );
  }
};

NavIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  focused: PropTypes.bool,
  iconType: PropTypes.oneOf(["fontawesome", "material", "materialCommunity"])
};

export default NavIcon;
