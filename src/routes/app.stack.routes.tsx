import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AssetDetails } from '../screens/AssetDetails';
import { Tabs } from './app.tab.routes';

export type RootStackRouteParams = {
    Tabs: undefined;
    Login: undefined;
    SignUp: undefined;
    AssetDetails: undefined;
  };

  
const { Navigator, Screen } = createNativeStackNavigator<RootStackRouteParams>();

export function AppStackRoutes(){
    return(
        <Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
            <Screen name="Tabs" component={Tabs} />
            <Screen name="AssetDetails" component={AssetDetails} />
        </Navigator>
    )
}