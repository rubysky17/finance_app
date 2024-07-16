import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ForgotPasswordScreen,
    RegisterScreen,
    LoginScreen
} from "../pages/Auth";

import { HomeScreen, OnboardingScreen } from '../pages';
import BackButtonHeader from "../components/BackButton";
import { SafeAreaView } from 'react-native';

const Stack: any = createNativeStackNavigator();

const Routers: any = [
    {
        name: "Home",
        component: HomeScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: "ForgotPassword",
        component: ForgotPasswordScreen,
        options: {}
    },
    {
        name: "OnboardingScreen",
        component: OnboardingScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: "Register",
        component: RegisterScreen,
        options: (props: any) => {
            const { navigation } = props;

            return ({
                headerTitle: "",
                headerLeft: () => <BackButtonHeader navigation={navigation} />,
                gestureEnabled: false,
            })
        },
    },
    {
        name: "Login",
        component: LoginScreen,
        options: {
            headerShown: false
        }
    }
];

export default function Route() {
    return <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home" >
            {
                Routers.map((route: any, idx: any) => {
                    return <Stack.Screen
                        key={idx}
                        name={route.name}
                        component={route.component}
                        {...route}
                    />
                })
            }
        </Stack.Navigator>
    </NavigationContainer>
}
