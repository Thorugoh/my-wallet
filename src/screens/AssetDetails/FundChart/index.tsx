import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { InvestmentDelta } from "../../../components/InvestmentDelta";
import { Text } from "../../../components/Text";
import { colors } from "../../../utils/colors";
import { styles } from "../styles";

type PeriodTabProp = {
  title: string;
  isSelected: boolean;
  onPress?: (title: string) => void
}

export function PeriodTab({ title, isSelected, onPress }: PeriodTabProp) {
  function handleOnPress() {
    onPress && onPress(title);
  }
  return (
    <TouchableOpacity onPress={handleOnPress} style={[styles.tab, isSelected && styles.tabSelected]}>
      <Text style={[styles.periodTab, isSelected && styles.periodTabSelected]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export function FundChart() {
  const tabs = ["1h", "1d", "1w", "1m", "1y", "All"]
  const [selectedTab, setSelectedTab] = useState("1m");

  const data = {
    datasets: [
      {
        data: [50, 100, 0, 80, 100, 90, 110, 40, 150, 150, 25, 50, 100, 110, 107],
        color: (opacity = 1) => colors.GREEN, // optional
      }
    ],
    labels: ["a", "b"]
  };

  return (
    <>
      <View>
        <View style={[styles.titleContainer, { paddingRight: 20 }]}>
          <View>
            <Text style={styles.title}>$18.23</Text>
            <InvestmentDelta isGain amountText="3.51% ($1.21)" />
          </View>
          <Text style={styles.title}>2022</Text>
        </View>


        <View>
          <LineChart
            data={data}
            height={153}
            width={Dimensions.get("window").width}
            style={{
              paddingLeft: -50,
              width: 100,
            }}
            withInnerLines={false}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withShadow={false}
            withDots={false}
            chartConfig={{
              backgroundGradientFrom: colors.WHITE,
              backgroundGradientTo: colors.WHITE,
              color: (opacity = 1) => colors.RED,
              style: {
                borderRadius: 8,
                padding: 10,
                width: "100%"
              },
            }}
          />
          <View style={styles.tabs}>
            {
              tabs.map(tab => (
                <PeriodTab
                  key={tab}
                  title={tab}
                  isSelected={selectedTab === tab} 
                  onPress={setSelectedTab} 
                />
              ))
            }
          </View>
        </View>
      </View>
    </>
  )
}