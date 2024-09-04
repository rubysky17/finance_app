import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { View, StyleSheet, ScrollView, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { CTextInput } from '@/src/components/TextInput';
import { Button } from 'react-native-ui-lib';
import DatePicker from '@/src/components/DatePicker';

// * Icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CCheckbox from '@/src/components/Checkbox';

const screen = Dimensions.get('screen');
const bottomButtonContainer = 90;
const scrollContainer = screen.height - bottomButtonContainer;

const TransactionBlock = (props) => {
    const { control } = props;

    return (
        <View style={styles.block}>
            <View style={styles.iconInputArea}>
                <FontAwesome6 name="money-bill-1" size={20} color="black" style={styles.icon} />

                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CTextInput
                            style={styles.inputArea}
                            placeholder='0'
                            keyboardType="numeric"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
            </View>


            <View style={styles.iconInputArea}>
                <AntDesign name="inbox" size={22} color="black" style={styles.icon} />
            </View>

            <View style={styles.iconInputArea}>
                <MaterialCommunityIcons name="fountain-pen-tip" size={20} color="black" style={styles.icon} />

                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CTextInput
                            style={styles.inputArea}
                            placeholder='Thêm ghi chú'
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
            </View>

            <View style={styles.line}>
                <DatePicker />
            </View>
        </View>
    );
};

export default function CreateTransaction() {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.safeArea}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    style={styles.container}
                    keyboardShouldPersistTaps="handled"
                >
                    <TransactionBlock control={control} />

                    <View style={styles.block}>
                        <View style={styles.line}>
                            <Controller
                                name="hasCountInReport"
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <CCheckbox
                                        defaultValue={value}
                                        onChange={onChange}
                                        label={"Có tính vào báo cáo hay không?"}
                                    />
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.bottomButtonContainer}>
                    <Button
                        bg-neutral600
                        white
                        label="Lưu"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputArea: {
        flex: 1,
    },
    iconInputArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    safeArea: {
        flex: 1,
    },
    container: {
        height: scrollContainer,
    },
    bottomButtonContainer: {
        height: bottomButtonContainer,
        padding: 16,
    },
    block: {
        backgroundColor: 'white',
        marginVertical: 8,
        padding: 16,
    },
    line: {
        marginVertical: 8,
    },
});