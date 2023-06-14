import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../../components/Text";
import Coins from "../../../../../assets/coins.svg";
import { styles } from "./styles";
import { InvestmentDelta } from "../../../../components/InvestmentDelta";

export function Portfolio() {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
      <View style={styles.containerBottom}>
        <Text style={styles.amount}>
          $1,457.24
          <InvestmentDelta isGain={false} amountText="31.80%" />
        </Text>

        <TouchableOpacity style={styles.rewardsButton}>
          <Coins
            width={20}
            height={20}
            fill="#fff"
            style={styles.coinsIcon}
          />
          <Text style={styles.rewardsButtonText}>Earn Rewards</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}
