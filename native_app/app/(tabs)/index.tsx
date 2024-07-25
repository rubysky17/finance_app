import { View, Text, Colors } from 'react-native-ui-lib';
import { Dimensions, ScrollView } from "react-native";
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useAppStore } from "AppProvider/hooks";

import { LineChart } from "react-native-gifted-charts";
import NumberStatus from '@/src/components/NumberStatus';
import WhiteBox from '@/src/components/WhiteBox';
import WalletTag from '@/src/components/Wallet/Tag';
import Transaction from "@/src/components/Transaction";
import NavigateBar from "@/src/components/NavigateBar";
import CarouselContainer from '@/src/components/Carousel';

import { styles } from "src/styleSheet/home/styles";
import { formatNumber } from "@/src/helpers/helpers";
import { SpendingDetail, TrendSpending } from '@/src/container/spending';

const screen = Dimensions.get('screen');

const PADDING_X = 15;
const heightOfCard = screen.width * 0.45;
const widthOfCard = screen.width - (PADDING_X * 2);
const widthOfChart = widthOfCard - (PADDING_X * 2);

function HomeScreen() {
    const app = useAppStore();
    const { systemColorScheme } = app;
    const insets = useSafeAreaInsets();

    const data = [
        { value: 15 },
        { value: 30 },
        { value: 20 },
        { value: 15 },
        { value: 42 },
        { value: 33 },
        { value: 40 },
        { value: 70 },
        { value: 90 },
        { value: 12 },
        { value: 32 },
        { value: 44 },
        { value: 55 },
    ];

    return (
        <View style={
            styles.container
        }>
            <ScrollView>
                <View
                    style={{
                        ...styles.containerWallet,
                        paddingTop: insets.top + 24,
                    }}
                    bg-neutral600
                >
                    <Text
                        textBase style={{
                            color: '#A1CBC2'
                        }}
                    >
                        Tổng số dư
                    </Text>

                    <View>
                        <Text
                            white
                            text2Xl
                            style={{
                                marginTop: 6,
                                fontWeight: 500
                            }}
                        >
                            {formatNumber(32341234)}đ
                        </Text>
                    </View>
                </View>

                <View style={styles.walletCard} bg-white>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <View style={{
                            height: heightOfCard / 2.7,
                            width: widthOfChart,
                            position: "absolute",
                            top: 15,
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <View>
                                <Text
                                    medium
                                    textSm
                                    secondary300
                                    style={{
                                        marginBottom: 8
                                    }}
                                >
                                    Tổng chi tiêu trong ngày
                                </Text>

                                <Text
                                    textXl
                                    style={{
                                        fontWeight: 600
                                    }}
                                >
                                    {formatNumber(234000)}đ
                                </Text>
                            </View>

                            <NumberStatus />
                        </View>

                        <View style={{
                            position: "absolute",
                            right: -widthOfChart / 2.6,
                            bottom: 0,
                        }}>
                            <LineChart
                                thickness={5}
                                adjustToWidth={true}
                                endSpacing={0}
                                width={widthOfChart}
                                curved={true}
                                height={heightOfCard / 2.7}
                                isAnimated
                                color="#E15C7A"
                                animateOnDataChange
                                animationDuration={300}
                                onDataChangeAnimationDuration={300}
                                data={data}
                                hideDataPoints
                                areaChart
                                startFillColor="#fde6eb"
                                rulesColor="white"
                                yAxisThickness={0} // Hide y-axis line
                                xAxisThickness={0} // Hide x-axis line
                                yAxisTextStyle={{ display: 'none' }} // Hide y-axis labels
                                scrollAnimation={false}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.containerWalletList}>
                    <NavigateBar
                        title={"Ví của tôi"}
                        text={"Xem tất cả"}
                        url={'(tabs)/wallet'}
                    />

                    <WhiteBox borderRadius={10}>
                        <>
                            <WalletTag name={"Ví tiền mặt 1"} amount={35000} />
                            <WalletTag name={"Ví tiền mặt 2"} amount={400000} />
                            <WalletTag name={"Ví tiền mặt 3"} amount={1200000} />
                        </>
                    </WhiteBox>
                </View>

                <View style={styles.containerSpending}>
                    <NavigateBar
                        title={"Báo cáo chi tiêu"}
                        text={"Xem báo cáo"}
                        url={'/'}
                    />

                    <WhiteBox borderRadius={10}>
                        <CarouselContainer
                            height={250}
                            showArrow
                            labelStyle={{
                                color: Colors.neutral
                            }}
                            pages={[
                                {
                                    id: 1,
                                    container: <TrendSpending />,
                                    label: 'Xu hướng'
                                },
                                {
                                    id: 2,
                                    container: <SpendingDetail />,
                                    label: 'Chi tiết'
                                },
                            ]}
                        />
                    </WhiteBox>
                </View>


                <View style={styles.containerSpending}>
                    <NavigateBar
                        title={"Giao dịch gần đây"}
                        text={"Xem tất cả"}
                        url={'/'}
                    />

                    <Transaction
                        date_trading={"16 tháng 6 2024"}
                        amount={520000}
                        group_id={3}
                        type_id={1}
                        description={"Lương"}
                    />

                    <Transaction
                        date_trading={"16 tháng 6 2024"}
                        amount={520000}
                        group_id={3}
                        type_id={2}
                        description={"Ăn uống"}
                    />
                </View>
            </ScrollView>
        </View >
    )
}

export default HomeScreen