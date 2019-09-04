import {createStackNavigator, createAppContainer} from 'react-navigation';
import TabNavigation from './TabNavigation';

const MainNavigation = createStackNavigator(
  {
    TabNavigation,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigation);
