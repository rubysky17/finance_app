import React from "react"
import { Text, View } from "react-native";

import { styles } from "./styles";

function WalletTypesSheet(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Thêm ví</Text>

            <View style={styles.wrapperItem}>
                <View style={styles.item}>
                    <View style={styles.innerItem}>
                        <Text style={styles.walletText}>Ví cơ bản</Text>
                        <Text style={styles.walletTextDescription}>Ví cơ bản là ví tiền mặt</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.innerItem}>
                        <Text style={styles.walletText}>Ví ngân hàng</Text>
                        <Text style={styles.walletTextDescription}>Ví ngân hàng là ví sử dụng cho ngân hàng</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.innerItem}>
                        <Text style={styles.walletText}>Ví liên kết</Text>
                        <Text style={styles.walletTextDescription}>Ví liên kết là ví sử dụng từ ví điện tử</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.innerItem}>
                        <Text style={styles.walletText}>Ví tín dụng</Text>
                        <Text style={styles.walletTextDescription}>Ví tín dụng là ví sử dụng từ thẻ tín dụng</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default WalletTypesSheet