import { createStackNavigator } from "@react-navigation/stack";
import { home } from "../screens/home"

const Stack = createStackNavigator();
export function StackNavigation(props: any){
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="home"
                component={home}
            />
        </Stack.Navigator>
    )
}