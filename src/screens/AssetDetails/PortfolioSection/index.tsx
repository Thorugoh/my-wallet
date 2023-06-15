import { View } from "react-native";
import FeaterIcon from "@expo/vector-icons/Feather";
import { Text } from "../../../components/Text";
import { styles } from "./styles";
import { InvestmentDelta } from "../../../components/InvestmentDelta";
import { Button } from "../../../components/Button";

export function PortfolioSection() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <FeaterIcon name="pie-chart" size={16} style={styles.icon} />
        <Text style={styles.title}>Your Portfolio</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={styles.creditsText}>18 Credits</Text>
        <Text style={styles.creditsText}>$328.14</Text>
      </View>
      <View style={styles.row}>
        <InvestmentDelta amountText="8.41%" isGain />
        <Text style={styles.lastPurchased}>Last purchase 28d ago</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button 
          title="Sell"
          style={styles.sellButton}
          textStyle={styles.sellButtonText}
        />
        <Button 
          title="Retire credits" 
          style={styles.retireButton}
        />

      </View>
        <Text style={styles.creditsNote}>You’ve previously retired 28 credits of this asset</Text>



    </View>
  )
}