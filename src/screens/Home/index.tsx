import { ScrollView, View } from "react-native";
import { Text } from "../../components/Text";
import { Funds } from "./components/Funds";
import { OportunityBanner } from "./components/OportunityBanner";
import StatiticsIcon from "../../../assets/businessStatistics.svg"

import { styles } from "./styles";
import { Card } from "./components/Card";
import { colors } from "../../utils/colors";

function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
      <Funds />
      <OportunityBanner
        title="Learn more about carbon credits"
        subtitle="Check out our top tips"
        icon={<StatiticsIcon />}
      />
      <View style={styles.cardsContainer}>
        <Card title="Why should you invest here?" />
        <Card title="" />

      </View>
    </ScrollView>
  )
}

export { Home };