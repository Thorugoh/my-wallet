import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { SignUpSuccess, SignUpSuccessScreenProps } from '../screens/SignUpSuccess';

export type AuthStackRouteParams = {
  Login: undefined;
  SignUp: undefined;
  SignUpSuccess: SignUpSuccessScreenProps;
};

export type ScreenAuthProps<RouteName extends keyof AuthStackRouteParams> =
  NativeStackScreenProps<AuthStackRouteParams, RouteName>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackRouteParams>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ title: "" }} >
      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignUpSuccess" component={SignUpSuccess} />
    </Navigator>
  );
}