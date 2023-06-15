import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AssetDetails, AssetDetailsProps } from '../screens/AssetDetails';
import { Tabs } from './app.tab.routes';

export type RootStackRouteParams = {
  Tabs: undefined;
  Login: undefined;
  SignUp: undefined;
  AssetDetails: AssetDetailsProps;
};

export type ScreenStackProps<RouteName extends keyof RootStackRouteParams> =
  NativeStackScreenProps<RootStackRouteParams, RouteName>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackRouteParams>();

export function AppStackRoutes() {
  return (
    <Navigator initialRouteName="Tabs" screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
      <Screen name="Tabs" options={{headerShown: false}}component={Tabs} />
      <Screen name="AssetDetails" component={AssetDetails} />
    </Navigator>
  )
}