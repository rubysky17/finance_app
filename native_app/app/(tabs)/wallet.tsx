import { View, Text } from "react-native"
import { Button, Colors } from "react-native-ui-lib";
import { AntDesign } from '@expo/vector-icons';
function WalletRoot() {
    return (
        <View style={{
            flex: 1
        }}>
            <Text>Wallet</Text>

            <Button
                onPress={() => {
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