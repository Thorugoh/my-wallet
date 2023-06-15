import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Header } from '../screens/Home/components/Header';
import { Portfolio } from '../screens/Portfolio';
import { Trade } from '../screens/Trade';
import FontistoIcon from '@expo/vector-icons/Fontisto';
import { colors } from '../utils/colors';

export type RootTabsRouteParams = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
}

export type ScreenTabProps<RouteName extends keyof RootTabsRouteParams> =
  NativeStackScreenProps<RootTabsRouteParams, RouteName>;

const Tab = createBottomTabNavigator();

function getColor(isFocused: boolean){
  return isFocused ? colors.PURPLE : colors.BLACK
}

export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {
        fontFamily: "Sora_400Regular",
        fontSize: 10,
      },
      tabBarInactiveTintColor: colors.BLACK,
      tabBarActiveTintColor: colors.PURPLE,
      tabBarStyle: {
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
      }
    
    }} >
      <Tab.Screen 
        name="Home" 
        options={{
          tabBarIcon: ({ focused }) => <FontistoIcon name='home' size={18} color={getColor(focused)} />,
          header: () => <Header />
        }}
        component={Home} 
      />
      <Tab.Screen 
        name="Trade"
        options={{
          tabBarIcon: ({ focused }) => <FontistoIcon name='arrow-swap' size={18} color={getColor(focused)} />,
        }}
        component={Trade} 
      />
      <Tab.Screen 
        name="Portfolio" 
        options={{
          tabBarIcon: ({ focused }) => <FontistoIcon name='pie-chart-1' size={18} color={getColor(focused)} />,
        }}
        component={Portfolio} 
      />
    </Tab.Navigator>
  )
}
