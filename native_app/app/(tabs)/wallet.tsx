import { View, Text } from "react-native"
import { useRef } from "react";

import { Button, Colors } from "react-native-ui-lib";
import RBSheet from 'react-native-raw-bottom-sheet';
import { AntDesign } from '@expo/vector-icons';

import WalletTypesSheet from "@/src/components/WalletTypesSheet";
import { styles } from "@/src/components/WalletTypesSheet/styles";

function WalletRoot() {
    const refRBSheet: any = useRef();

    return (
        <View style={{
            flex: 1
        }}>
            <Text>Màn hình hiển thị danh sách ví</Text>

            <RBSheet
                ref={refRBSheet}
                useNativeDriver={false}
                customStyles={{
                    wrapper: styles.rbsheetStyleWrapper,
                    draggableIcon: {
                        backgroundColor: '#000',
                    },
                    container: styles.rbsheetStyleContainer
                }}
                customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
                }}
                customAvoidingViewProps={{
                    enabled: false,
                }}
            >
                <WalletTypesSheet />
            </RBSheet>

            <Button
                onPress={() => {
                    refRBSheet?.current?.open()
                }}
                label={''}
                backgroundColor={Colors.neutral}
                enableShadow
                iconSource={() => {
                    return <AntDesign name="plus" size={24} color="white" />
                }}
                style={{
                    width: 56,
                    height: 56,
                    position: "absolute",
                    bottom: 30,
                    right: 30,
                    borderRadius: 16
                }}
            />

        </View>
    )
}

export default WalletRoot