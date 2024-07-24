import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const SPACING = 8;
const borderRadius = 0;

export const styles = StyleSheet.create({
    container: {
        padding: SPACING,
        borderRadius: borderRadius,
        backgroundColor: "white",
    },
});