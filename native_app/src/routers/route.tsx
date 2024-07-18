import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackBudget, StackCustomize, StackOverview, StackReport } from './Stack';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

// ! cách navigate từ 1 stack của tab 1 qua tab 2
{/* <Button title="Go to screen 3" onPress={() => {
                const jumpToAction = TabActions.jumpTo('Tab 2');
                navigation.dispatch(jumpToAction);
            }} /> */}

function TabNavigator() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen
                    name="Tổng quan"
                    component={StackOverview}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => <Icon
                            name={"home"}
                            size={20}
                            color={focused ? "#1A1C1E" : "#ACB5BB"}
                        />,
                        tabBarActiveTintColor: "#1A1C1E",
                        tabBarInactiveTintColor: "#ACB5BB",
                    }}

                />
                <Tab.Screen name="Báo cáo"
                    component={StackReport}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => <Icon
                            name={"creditcard"}
                            size={20}
                            color={focused ? "#1A1C1E" : "#ACB5BB"}
                        />,
                        tabBarActiveTintColor: "#1A1C1E",
                        tabBarInactiveTintColor: "#ACB5BB",
                    }}
                />

                <Tab.Screen
                    name="Ngân sách"
                    component={StackBudget}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => <Icon
                            name={"wallet"}
                            size={20}
                            color={focused ? "#1A1C1E" : "#ACB5BB"}
                        />,
                        tabBarActiveTintColor: "#1A1C1E",
                        tabBarInactiveTintColor: "#ACB5BB",
                    }}
                />

                <Tab.Screen
                    name="Cấu hình"
                    component={StackCustomize}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => <Icon
                            name={"setting"}
                            size={20}
                            color={focused ? "#1A1C1E" : "#ACB5BB"}
                        />,
                        tabBarActiveTintColor: "#1A1C1E",
                        tabBarInactiveTintColor: "#ACB5BB",
                    }} />
            </Tab.Navigator>
        </>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <TabNavigator />
        </NavigationContainer>
    );
}
