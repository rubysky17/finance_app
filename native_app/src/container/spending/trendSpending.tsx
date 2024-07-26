
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { ChartHelper, formatNumber } from "@/src/helpers/helpers";

import { Colors } from "react-native-ui-lib";
import { LineChart } from "react-native-gifted-charts";

const screen = Dimensions.get('screen');

const PADDING_X = 15;
const heightOfTab = 46;
const widthOfCard = screen.width - (PADDING_X * 2);
const widthOfChart = widthOfCard - (PADDING_X * 2);

const ChartHelperClass = new ChartHelper;

export default function TrendSpending(props) {
    const { height } = props;
    const [activeTab, setActiveTab] = useState(0);

    const TABS = [
        {
            id: 0,
            label: "Tổng đã chi",
            color: Colors.error,
            amount: 70000,
        },
        {
            id: 1,
            label: "Tổng thu",
            color: Colors.info600,
            amount: 900000,
        }
    ];

    const data = [
        { value: 15, label: "label start" },
        { value: 30, },
        { value: 20, },
        { value: 15, },
        { value: 42, },
        { value: 33, },
        { value: 40, },
        { value: 70, },
        { value: 90, },
        { value: 12, },
        { value: 32, },
        { value: 44, label: "label end" },
        { value: 55, },
    ];

    const data2 = [
        { value: 0, label: "label 1" },
        { value: 30, },
        { value: 8, },
        { value: 10, },
        { value: 75, },
        { value: 80, },
        { value: 32, },
        { value: 70, },
        { value: 65, },
        { value: 10, },
        { value: 33, },
        { value: 200, },
        { value: 10, label: "label 13" },
    ];

    const onChangeTab = (tabIndex) => {
        if (activeTab === tabIndex) return;

        setActiveTab(tabIndex)
    }

    const TabView = () => {
        return <View style={styles.tabContainer}>
            {TABS.map((tab, index) => {
                return <TouchableOpacity
                    style={{
                        ...styles.tabItems,
                        borderBottomColor: activeTab === tab.id ? tab.color : Colors.secondary300,
                        borderBottomWidth: 1
                    }}
                    key={index}
                    onPress={() => {
                        onChangeTab(tab.id)
                    }}
                >
                    <Text
                        style={{
                            color: activeTab === tab.id ? tab.color : Colors.secondary,
                            fontWeight: 500,
                            fontSize: 12
                        }}>
                        {tab.label}
                    </Text>

                    <Text
                        style={{
                            color: tab.color,
                            fontWeight: 500,
                            marginVertical: 8,
                            fontSize: 14
                        }}>
                        {formatNumber(tab.amount)}
                    </Text>
                </TouchableOpacity>
            })}
        </View>
    }

    return <View style={{
        ...styles.container,
        height,
    }}>
        {TabView()}

        <View style={{ ...styles.chartContainer }}>
            <LineChart
                thickness={3}
                initialSpacing={0}
                adjustToWidth={true}
                width={widthOfChart - PADDING_X * 2}
                curved={true}
                noOfSections={3}
                stepValue={ChartHelperClass.lineStepCalculate(200, 0, 3)}
                height={150}
                isAnimated
                color1={TABS[activeTab].color}
                color2={Colors.secondary300}
                animateOnDataChange
                animationDuration={300}
                onDataChangeAnimationDuration={300}
                data={data}
                data2={data2}
                hideDataPoints
                rulesColor={Colors.secondary200}
                yAxisThickness={0} // Hide y-axis line
                xAxisThickness={0} // Hide x-axis line
                scrollAnimation={false}
                xAxisLabelTextStyle={{
                    fontSize: 8,
                    fontWeight: 'semibold',
                    textAlign: 'center',
                    width: 80,
                    position: 'absolute',
                    left: -8
                }} // Customize x-axis label style
            />
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        position: "relative",
    },
    tabContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: heightOfTab,
    },
    tabItems: {
        width: "50%",
        height: heightOfTab,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    chartContainer: {
        position: 'absolute',
        top: heightOfTab + 30,
        left: -(PADDING_X / 2 - 8),
        width: widthOfChart
    }
})