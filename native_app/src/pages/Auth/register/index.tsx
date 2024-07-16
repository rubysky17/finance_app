import { View, Text, Button } from 'react-native-ui-lib';
import { StyleSheet, Dimensions } from 'react-native';
import { useState } from "react";

import { CTextInput } from "../../../components/TextInput";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useAppStore } from '../../../../AppProvider/hooks';

const screen = Dimensions.get('screen');
const GAP = 30;

function RegisterScreen({ navigation }: any) {
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
                            width: screen.width * 0.7,
                            marginBottom: 40,
                            marginTop: 32,
                        }}

                    >
                        <Text text2Xl semibold secondary500>
                            Đăng ký
                        </Text>

                        <Text textBase regular secondary400 style={{
                            marginTop: 10
                        }}>
                            Tạo tài khoản mới
                        </Text>
                    </View>

                    <View>
                        <View style={{
                            marginBottom: GAP
                        }}>
                            <CTextInput
                                inputStyle="bordered"
                                placeholder='Họ và tên của bạn'
                            />
                        </View>

                        <View style={{
                            marginBottom: GAP
                        }}>
                            <CTextInput
                                inputStyle="bordered"
                                placeholder='Nhập Email của bạn'
                            />
                        </View>


                        <View style={{
                            marginBottom: GAP
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


                        <View style={{
                            marginBottom: 16
                        }}>
                            <CTextInput
                                inputStyle="bordered"
                                placeholder='Nhập lại mật khẩu của bạn'
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
                        marginTop: 50
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
                            label={"Đăng ký"} />
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
                        Bạn đã có tài khoản?
                    </Text>

                    <Button link textSm medium neutral500 label={"Đăng nhập"} onPress={() => navigation.navigate('Login')} />
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

export default RegisterScreen