import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Header } from '../screens/Home/components/Header';
import { Portfolio } from '../screens/Portfolio';
import { Trade } from '../screens/Trade';

export type RootTabsRouteParams = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
}

export type ScreenTabProps<RouteName extends keyof RootTabsRouteParams> =
  NativeStackScreenProps<RootTabsRouteParams, RouteName>;

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        options={{
          header: () => <Header />
        }}
        component={Home} 
      />
      <Tab.Screen 
        name="Trade" 
        component={Trade} 
      />
      <Tab.Screen 
        name="Portfolio" 
        component={Portfolio} 
      />
    </Tab.Navigator>
  )
}
