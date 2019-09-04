import React from 'react';
import {View} from 'react-native';
// import Spinner from "react-native-loading-spinner-overlay";
import {useIsLoggedIn, useLogIn, useLogOut} from '../contexts/AuthContext';
import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from '../navigation/MainNavigation';
// import { observer } from "mobx-react-lite";
// import spinnerStore from "../mobx/stores/spinnerStore";

export default () => {
  // const isLoggedIn = useIsLoggedIn();
  const isLoggedIn = true;
  // const logIn = useLogIn();
  // const logOut = useLogOut();

  return (
    <View style={{flex: 1}}>
      {/* {spinnerStore.spinner.isVisible ? (
        <Spinner
          visible={spinnerStore.spinner.isVisible}
          textContent={"Loading..."}
        />
      ) : null} */}
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
