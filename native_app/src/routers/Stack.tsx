import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SkeletonScreen, HomeScreen } from '../pages';

const Stack = createNativeStackNavigator();

// {
//     name: "Home",
//     component: HomeScreen,
//     options: {
//         headerShown: false
//     }
// },
// {
//     name: "ForgotPassword",
//     component: ForgotPasswordScreen,
//     options: {}
// },
// {
//     name: "OnboardingScreen",
//     component: OnboardingScreen,
//     options: {
//         headerShown: false
//     }
// },
// {
//     name: "Register",
//     component: RegisterScreen,
//     options: (props: any) => {
//         const { navigation } = props;

//         return ({
//             headerTitle: "",
//             headerLeft: () => <BackButtonHeader navigation={navigation} />,
//             gestureEnabled: false,
//         })
//     },
// },
// {
//     name: "Login",
//     component: LoginScreen,
//     options: {
//         headerShown: false
//     }
// }

// * Chuyển trang cho Tổng quan
export function StackOverview() {
    const Routers: any = [
        {
            name: "Home",
            component: HomeScreen,
            options: {
                headerShown: false
            }
        }
    ];

    return (
        <Stack.Navigator initialRouteName="Home">
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
    );
}

// * Chuyển trang cho Báo cáo
export function StackReport() {
    const Routers: any = [
        {
            name: "Home",
            component: SkeletonScreen,
            options: {
                headerShown: false
            }
        }
    ];

    return (
        <Stack.Navigator initialRouteName="Home">
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
    );
}

// * Chuyển trang cho Ngân sách
export function StackBudget() {
    const Routers = [];

    return (
        <Stack.Navigator initialRouteName="Chưa định nghĩa">
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
    );
}

// * Chuyển trang cho Cấu hình
export function StackCustomize() {
    const Routers = [];

    return (
        <Stack.Navigator initialRouteName="Chưa định nghĩa">
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
    );
}