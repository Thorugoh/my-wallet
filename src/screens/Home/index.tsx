import { View } from "react-native";
import { Text } from "../../components/Text";
import { Funds } from "./components/Funds";
import { OportunityBanner } from "./components/OportunityBanner";
import StatiticsIcon from "../../../assets/businessStatistics.svg"

import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <Funds />
      <OportunityBanner
        title="Learn more about carbon credits"
        subtitle="Check out our top tips"
        icon={<StatiticsIcon />} />
    </View>
  )
}

export { Home };