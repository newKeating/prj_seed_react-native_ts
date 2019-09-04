import {createStackNavigator, createAppContainer} from 'react-navigation';
import AuthHome from '../screens/Auth/AuthHome';

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
  },
  {
    initialRouteName: 'AuthHome',
  },
);

export default createAppContainer(AuthNavigation);
