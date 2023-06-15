import { TouchableOpacity, View } from "react-native";
import { InvestmentDelta } from "../../../../components/InvestmentDelta";
import { Text } from "../../../../components/Text";
import { styles } from "./styles";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

type FundItemProps = {
  title: string;
  investmentDelta: {
    isGain: boolean;
    value: string;
  }
  amount: string;
  icon: JSX.Element;
}

const chartConfig = {
  color: (opacity = 1) => colors.WHITE,
  backgroundColor: colors.WHITE,
};

export function FundItem({ title, amount, investmentDelta, icon: Icon }: FundItemProps) {
  const navigation = useNavigation();

  const data = {
    datasets: [
      {
        data: [10, 20, 21, 80, 99, 43],
        color: (opacity = 1) => (investmentDelta.isGain ? colors.GREEN : colors.RED), // optional
      }
    ],
    labels: ["a", "b"]
  };

  function goToDetails() {
    navigation.navigate("AssetDetails", { id: "some-uuid" });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      {Icon}
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={data}
        height={60}
        width={100}
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
        bezier
      />

      <Text>
        <Text>{amount}</Text>{` `}
        <InvestmentDelta
          isGain={investmentDelta.isGain}
          amountText={investmentDelta.value}
        />
      </Text>
    </TouchableOpacity>
  )
}