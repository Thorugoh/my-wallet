import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Portfolio } from '../screens/Portfolio';
import { Trade } from '../screens/Trade';

export type RootStackRouteParams = {
    home: undefined;
    trade: undefined;
    portfolio: undefined;
}

const Tab = createBottomTabNavigator();

export function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Trade" component={Trade} />
            <Tab.Screen name="Portfolio" component={Portfolio} />
        </Tab.Navigator>
    )
}
