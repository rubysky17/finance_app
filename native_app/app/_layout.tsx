import { View, StyleSheet, Text } from 'react-native';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';

import AppProvider from "../AppProvider";

import { useMigrationHelper } from '@/db/drizzle';
import { DatabaseProvider } from '@/db/provider';
import { Button } from 'react-native-ui-lib';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

require("../src/presets");

export default function Layout() {
    const { success, error } = useMigrationHelper();

    if (error) {
        console.log({ error });

        return (
            <View >
                <Text>Migration error: {error.message}</Text>
            </View>
        );
    }

    if (!success) {
        console.log('Đang tải');

        return (
            <View >
                <Text>Migration is in progress...</Text>
            </View>
        );
    }

    return <DatabaseProvider>
        <View style={styles.safeContainer}>
            <AppProvider>
                <StatusBar style='auto' />

                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                    <Stack.Screen
                        options={{
                            presentation: "modal",
                            title: "Thêm giao dịch"
                        }}
                        name={'create-transaction'}
                    />

                    <Stack.Screen
                        name={'wallet'}
                        options={{
                            title: "Ví của tôi",
                            headerLeft: () => (
                                <Button
                                    onPress={() => {
                                        router.back()
                                    }}
                                    backgroundColor="transparent"
                                    enableShadow
                                    iconSource={() => {
                                        return <AntDesign
                                            name="arrowleft"
                                            size={24}
                                            color="black"
                                        />
                                    }}
                                />
                            ),
                        }}
                    />
                </Stack>
            </AppProvider>
        </View>
    </DatabaseProvider>
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 20
    },
})

