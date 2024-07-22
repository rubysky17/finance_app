import { View, Text, Button } from 'react-native-ui-lib';
import { View as NativeView, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { useAppStore } from "AppProvider/hooks";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Constants from 'expo-constants';
const screen = Dimensions.get('screen');

function OnboardingScreen({ navigation }: any) {
    const app = useAppStore();
    const { systemColorScheme } = app;
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <NativeView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                    bg-white
                // useSafeArea
                >
                    <View style={styles.container} >
                        <View style={styles.bgColorContainerWithCurve} bg-neutral600>

                            <Image
                                source={require('assets/images/Mockup.png')}
                                resizeMode='cover'
                                style={styles.imageCenter}
                            />
                        </View>
                    </View>


                    <View style={styles.viewWrapperText}>
                        <View style={{
                            paddingRight: 12,
                            paddingLeft: 12
                        }}>
                            <Text text2Xl semibold secondary500 style={{
                                textAlign: "center",
                            }}>
                                Kiểm tra tình trạng tài chính của bạn
                            </Text>

                            <Text textSm secondary400 style={{
                                marginTop: 24,
                                textAlign: "center",
                                lineHeight: 24
                            }}>
                                Tất cả hoạt động tài chính của bạn sẽ được ghi lại và hiển thị rõ ràng và ngắn gọn.
                            </Text>
                        </View>

                        <View style={styles.viewButton} useSafeArea>
                            <Button
                                label={'Bắt đầu'}
                                size={Button.sizes.large}
                                bg-neutral600
                                white
                                textLg
                                semibold
                                style={{
                                    paddingTop: 18,
                                    paddingBottom: 18,
                                }}
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </View>
                </View>
            </NativeView>
        </SafeAreaView>
    )
}

const SPACING_X = 30

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
    },
    bgColorContainerWithCurve: {
        height: screen.width * 3,
        width: screen.width * 2,
        borderRadius: screen.width * 0.96,
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        overflow: 'hidden',
    },
    imageCenter: {
        position: 'absolute',
        bottom: 0,
        left: screen.width * 0.5,
        maxWidth: screen.width,
        maxHeight: screen.height * 0.5,
    },
    viewWrapperText: {
        flex: 0.8,
        width: screen.width,
        marginTop: 24,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: SPACING_X,
        paddingLeft: SPACING_X,
    },
    viewButton: {
        width: screen.width - (SPACING_X * 2),
        marginRight: SPACING_X,
        marginLeft: SPACING_X,
    }
});

export default OnboardingScreen



