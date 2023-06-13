import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';

export type AuthStackRouteParams = {
    Login: undefined;
    SignUp: undefined;
  };

export type ScreenAuthProps<RouteName extends keyof AuthStackRouteParams> = 
    NativeStackScreenProps<AuthStackRouteParams, RouteName>;
  
const { Navigator, Screen } = createNativeStackNavigator<AuthStackRouteParams>();

export function AuthRoutes(){
    return(
        <Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    );
}