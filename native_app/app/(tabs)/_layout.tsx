import { Link, Tabs, router } from 'expo-router';

import { AntDesign } from '@expo/vector-icons';
import { Button, Colors } from 'react-native-ui-lib';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign size={20} name="home" color={color} />,
                    tabBarActiveTintColor: "#1A1C1E"
                }}
            />

            <Tabs.Screen
                name="history"
                options={{
                    title: 'Giao dịch',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="wallet" size={20} color={color} />,
                    tabBarActiveTintColor: "#1A1C1E"
                }}
            />

            <Tabs.Screen
                name="create-transaction"
                listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
                options={{
                    title: '',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Button
                        onPress={() => {
                            router.navigate('/create-transaction');
                        }}
                        label={''}
                        size={Button.sizes.medium}
                        backgroundColor={Colors.neutral500}
                        round={true}
                        enableShadow
                        iconSource={() => {
                            return <Ionicons name="add-outline" size={24} color="white" />
                        }}
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    />,
                    tabBarActiveTintColor: "#1A1C1E"
                }}
            />

            <Tabs.Screen
                name="budget"
                options={{
                    title: 'Ngân sách',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="notebook" size={20} color={color} />,
                    tabBarActiveTintColor: "#1A1C1E"
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Tài khoản',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={20} color={color} />,
                    tabBarActiveTintColor: "#1A1C1E"
                }}
            />

            <Tabs.Screen
                name="wallet"
                options={{
                    title: 'Ví của tôi',
                    tabBarButton: () => null,
                }}
            />
        </Tabs >
    );
}
