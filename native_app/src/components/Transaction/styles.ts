import { centerElement } from "@/src/helpers/helpers";
import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const SPACING = 16;
const borderRadius = 10;
const iconSizes = 48;

export const styles = StyleSheet.create({
    container: {
        padding: SPACING,
        borderRadius: borderRadius,
        backgroundColor: "white",
        marginBottom: SPACING,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    transactionText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    transactionIcon: {
        width: iconSizes,
        height: iconSizes,
        borderRadius: iconSizes,
        marginRight: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    }
})