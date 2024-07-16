import { View, Text } from "react-native-ui-lib";
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./styles";

export default function NumberStatus() {
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: "#E15C7A",
            }}
        >
            <Icon
                name="chevron-up"
                size={10}
                color="#ffffff"
            />

            <Text
                textSm
                white
                style={{
                    fontWeight: 500
                }}
            >
                3.2%
            </Text>
        </View>
    )
}
