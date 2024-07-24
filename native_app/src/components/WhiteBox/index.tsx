import { View } from "react-native";
import { styles } from "./styles";

interface IProps {
    spaceH?: number,
    spaceV?: number,
    children: React.ReactElement,
    borderRadius?: number
};

export default function WhiteBox(props: IProps) {
    const {
        spaceH,
        spaceV,
        children,
        borderRadius
    } = props;

    return (
        <View
            style={{
                ...styles.container,
                paddingHorizontal: spaceH,
                paddingVertical: spaceV,
                borderRadius
            }}>
            {children}
        </View>
    )
};