import { View, Text, Button } from 'react-native-ui-lib';
import { StyleSheet, Dimensions } from 'react-native';
import { useState } from "react";

import { CTextInput } from "../../../../src/components/TextInput";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useAppStore } from '../../../../AppProvider/hooks';

const screen = Dimensions.get('screen');

function LoginScreen({ navigation }: any) {
    const app = useAppStore();
    const { systemColorScheme } = app;
    const [show, setShow] = useState(false);

    return (
        <View
            useSafeArea
            style={{
                flex: 1
            }}
            bg-white
        >
            <View style={styles.container}>
                <View>
                    <View
                        style={{
                            width: screen.width * 0.8,
                            marginBottom: 40,
                            marginTop: 32,
                        }}

                    >
                        <Text text2Xl semibold secondary500>
                            Đăng nhập tài khoản của bạn
                        </Text>

                        <Text textBase regular secondary400 style={{
                            marginTop: 10
                        }}>
                            Nếu đã có tài khoản hãy đăng nhập bên dưới
                        </Text>
                    </View>

                    <View>
                        <CTextInput
                            inputStyle="bordered"
                            placeholder='Nhập Email của bạn'
                        />

                        <View style={{
                            marginTop: 16
                        }}>
                            <CTextInput
                                inputStyle="bordered"
                                placeholder='Nhập mật khẩu của bạn'
                                secureTextEntry={!show}
                                isHasIcon
                                rightIcon={
                                    <Icon
                                        onPress={() => {
                                            setShow(!show)
                                        }}
                                        name={!show ? "eye-slash" : "eye"}
                                        size={20}
                                        color="#1A1C1E"
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View style={{
                        marginTop: 16,
                        alignItems: 'flex-end',
                        width: "100%"
                    }}>
                        <Button link textSm medium neutral500 label={"Quên mật khẩu?"} />
                    </View>

                    <View style={{
                        marginTop: 40
                    }}>
                        <Button
                            size={Button.sizes.large}
                            bg-neutral600
                            white
                            semibold
                            style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                            }}
                            textLg
                            medium
                            label={"Đăng nhập"} />
                    </View>
                </View>

                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <Text style={{
                        marginRight: 6
                    }}>
                        Bạn chưa có tài khoản?
                    </Text>

                    <Button link textSm medium neutral500 label={"Đăng ký"} onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>
    )
}

const SPACING_X = 25;

const styles = StyleSheet.create({
    container: {
        paddingRight: SPACING_X,
        paddingLeft: SPACING_X,
        paddingTop: 40,
        flex: 1,
        justifyContent: 'space-between'
    }
});

export default LoginScreen