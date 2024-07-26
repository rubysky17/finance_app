import { formatNumber } from "@/src/helpers/helpers";
import { View, StyleSheet, Dimensions } from "react-native";
import { Colors, Text } from "react-native-ui-lib"
import { AntDesign } from '@expo/vector-icons';
import { BarChart } from "react-native-gifted-charts";


const screen = Dimensions.get('screen');

const PADDING_X = 15;
const heightOfTab = 46;
const widthOfCard = screen.width - (PADDING_X * 2);
const widthOfChart = widthOfCard - (PADDING_X * 2);

export default function SpendingDetail(props) {
    const { height } = props;

    const data = [
        {
            value: 20,
            label: 'Tháng trước',
            labelTextStyle: {
                fontSize: 10,
                color: Colors.secondary400
            },
            barBorderTopLeftRadius: 10,
            barBorderTopRightRadius: 10,
            frontColor: Colors.secondary200
        },
        {
            value: 30,
            label: 'Tháng này',
            labelTextStyle: {
                fontSize: 10,
                color: Colors.secondary400
            },
            barBorderTopLeftRadius: 10,
            barBorderTopRightRadius: 10,
            frontColor: Colors.error300
        },
    ];

    const metricView = () => {
        return <View>
            <Text
                semibold
                style={{
                    fontSize: 20,
                    marginBottom: 6
                }}
            >
                {formatNumber(70000)}đ
            </Text>

            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'center'
            }}>
                <Text
                    secondary300
                    style={{
                        fontSize: 12
                    }}
                >
                    Tổng chi tháng này
                </Text>

                <View style={{
                    backgroundColor: Colors.secondary100,
                    borderRadius: 100,
                    width: 18,
                    height: 18,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    marginHorizontal: 6,
                }}>
                    <AntDesign name="minus" size={16} color={Colors.warning} />
                </View>

                <Text
                    semibold
                    warning
                    style={{
                        marginRight: 6,
                        fontSize: 12
                    }}
                >
                    0%
                </Text>
            </View>
        </View>
    }
    return <View style={{
        height,
        ...styles.container
    }}>
        {metricView()}

        <View style={styles.containerChart}>
            <BarChart
                width={widthOfChart}
                data={data}
                frontColor={Colors.error300}
                barWidth={widthOfChart / 6}
                spacing={widthOfChart / 5}
                height={150}
                noOfSections={3}
                maxValue={30}
            />
        </View>
    </View >
};

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    containerChart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: heightOfTab + 30,
        left: -(PADDING_X / 2 - 8),
        width: widthOfChart
    }
})