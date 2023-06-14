import { TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "../../../../components/Text";
import Coins from "../../../assets/coins.svg";
import { styles } from "./styles";

export function Portfolio() {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
      <View style={styles.containerBottom}>
        <Text style={styles.amount}>
          $1,457.23
          <Text style={styles.return}>
            {` `}
            <MaterialCommunityIcons name="arrow-top-right" />
            31.82%
          </Text>
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
