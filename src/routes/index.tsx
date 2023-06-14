import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../hooks";
import { AuthRoutes } from "./app.auth.routes";
import { AppStackRoutes } from "./app.stack.routes";

import { RootStackRouteParams } from "./app.tab.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackRouteParams { }
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