import { router } from 'expo-router';
import { View, Text, Button } from 'react-native-ui-lib'

interface IProps {
    title: string;
    text: string;
    url: string;
    link?: string;
};
export default function NavigateBar(props: IProps) {
    const { title, text, url } = props;

    return (
        <View style={{
            marginBottom: 24,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text
                textSm
                bold
                secondary400

            >
                {title}
            </Text>

            <Button
                onPress={() => {
                    router.push(url);
                }}
                label={''}
                size={Button.sizes.medium}
                backgroundColor="transparent"
                enableShadow
                iconSource={() => {
                    return <>
                        <Text
                            textSm
                            bold
                            neutral500
                        >
                            {text}
                        </Text>
                    </>
                }}
            />
        </View>

    )
}

{/* <>
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
</> */}