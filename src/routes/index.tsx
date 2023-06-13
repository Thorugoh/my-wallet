import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./app.auth.routes";
import { AppStackRoutes } from "./app.stack.routes";

import { RootStackRouteParams } from "./app.tab.routes";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackRouteParams {}
    }
}

export function Routes(){
    return (
        <NavigationContainer>
            <AppStackRoutes />
        </NavigationContainer>
    )
}