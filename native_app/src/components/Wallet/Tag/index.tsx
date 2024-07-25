import { View, Image } from 'react-native'
import { Colors, Text } from "react-native-ui-lib";

import WalletSvg from "assets/icons/wallet.svg";

import { formatNumber } from '@/src/helpers/helpers';

export default function WalletTag(props) {
    const { name, amount } = props;

    return (
        <View style={{
            flex: 1,
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderBottomWidth: 1,
            borderColor: "#EDF1F3"
        }}>
            <View
                style={{
                    marginRight: 16
                }}
            >
                <WalletSvg width={24} height={24} />
            </View>

            <View>
                <Text
                    style={{
                        marginBottom: 6,
                        fontSize: 14
                    }}
                    color={Colors.secondary500}
                >
                    {name}
                </Text>

                <Text semibold style={{
                    fontSize: 12,
                }}>{formatNumber(amount)}đ</Text>
            </View>
        </View>
    )
}
