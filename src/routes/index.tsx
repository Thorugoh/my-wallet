import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../hooks";
import { AuthRoutes, AuthStackRouteParams } from "./app.auth.routes";
import { AppStackRoutes, RootStackRouteParams } from "./app.stack.routes";
import { RootTabsRouteParams } from "./app.tab.routes";


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackRouteParams, RootTabsRouteParams, AuthStackRouteParams { }
  }
}

export function Routes() {
  const user = useAppSelector(state => state.user.value);

  return (
    <NavigationContainer>
      {user ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}