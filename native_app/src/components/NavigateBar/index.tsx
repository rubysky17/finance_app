import { View, Text } from 'react-native-ui-lib'

interface IProps {
    title: string;
    text: string;
    url: string
};
export default function NavigateBar(props: IProps) {
    const { title, text } = props;

    return (
        <View
            style={{
                marginBottom: 24,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Text
                textSm
                bold
                secondary400

            >
                {title}
            </Text>

            <Text
                textSm
                bold
                neutral500
            >
                {text}
            </Text>
        </View>
    )
}