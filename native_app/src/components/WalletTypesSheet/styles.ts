import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const SPACING = 16;
const borderRadius = 20;

export const styles = StyleSheet.create({
    container: {
        padding: SPACING,
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    header: {
        fontSize: 20,
        fontWeight: 500,
        width: "100%"
    },
    wrapperItem: {
        width: "100%",
        display: 'flex',
        flex: 1,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    item: {
        width: "50%",
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    innerItem: {
        backgroundColor: "red",
        borderRadius: 12,
        height: screen.height / 10,
        padding: SPACING
    },
    walletText: {
        fontSize: 16,
        fontWeight: 500,
        color: "#fff"
    },
    walletTextDescription: {
        fontSize: 12,
        fontWeight: 400,
        color: "#fff"
    },
    rbsheetStyleWrapper: {
        backgroundColor: "transparent"
    },
    rbsheetStyleContainer: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        height: screen.height / 3.3
    }
});