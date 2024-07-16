import { Image } from 'react-native';
import { Text, View } from "react-native-ui-lib"
import { styles } from './styles';
import { formatNumber } from '@/src/helpers/helpers';

interface IProps {
    date_trading: any;
    amount: any;
    group_id: any;
    type_id: any;
    description: string
};

export default function Transaction(props: IProps) {
    const {
        date_trading,
        amount,
        group_id,
        description,
        type_id
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.transactionText}>
                <View style={styles.transactionIcon} bg-secondary100>
                    {type_id === 1 && <Image
                        source={require(`@/assets/icons/receive.png`)}
                        resizeMode='cover'
                    />}

                    {type_id === 2 && <Image
                        source={require(`@/assets/icons/send.png`)}
                        resizeMode='cover'
                    />}
                </View>

                <View>
                    <Text
                        style={{
                            marginBottom: 6
                        }}
                        textSm
                        secondary400
                    >
                        {date_trading}
                    </Text>


                    <Text
                        textBase
                        style={{
                            fontWeight: 500
                        }}
                    >
                        {description}
                    </Text>
                </View>
            </View>

            <Text
                textBase
                style={{
                    fontWeight: 500,
                    color: type_id === 1 ? "#34B67F" : type_id === 2 ? "#CE2C60" : ""
                }}
            >
                {formatNumber(amount)}đ
            </Text>
        </View>
    )
}
