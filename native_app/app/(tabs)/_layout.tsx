import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Tab one',
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="skeleton"
                options={{
                    title: 'Tab two',
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
