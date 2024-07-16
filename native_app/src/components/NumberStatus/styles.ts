import { centerElement } from "@/src/helpers/helpers";
import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const SPACING = 6;
const borderRadius = 12;
const iconSizes = 48;

export const styles = StyleSheet.create({
    container: {
        padding: SPACING,
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: 62,
        height: 34
    },

})