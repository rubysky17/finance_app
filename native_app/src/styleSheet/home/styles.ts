import { centerElement } from "@/src/helpers/helpers";
import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const PADDING_X = 15;
const heightOfCard = screen.width * 0.45;
const widthOfCard = screen.width - (PADDING_X * 2)

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerWallet: {
        height: screen.height / 3.5,
        width: screen.width,
        zIndex: 1,
        paddingRight: PADDING_X,
        paddingLeft: PADDING_X
    },
    walletCard: {
        width: widthOfCard,
        height: heightOfCard,
        top: screen.height / 3.5 - (heightOfCard / 2),
        left: centerElement(screen.width, widthOfCard),
        flex: 1,
        position: "absolute",
        zIndex: 2,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    containerReport: {
        marginRight: PADDING_X,
        marginLeft: PADDING_X,
        marginTop: 32

    },
    containerWalletList: {
        marginTop: (heightOfCard / 2) + 32,
        zIndex: 1,
        marginRight: PADDING_X,
        marginLeft: PADDING_X
    },
    containerSpending: {
        marginRight: PADDING_X,
        marginLeft: PADDING_X,
        marginTop: 32
    }
})