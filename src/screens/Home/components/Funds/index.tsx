import { ScrollView, View } from "react-native";
import { Text } from "../../../../components/Text";
import { FundItem } from "../FundItem";
import { styles } from "./styles";
import WindIcon from "../../../../../assets/wind.svg"
import SunIcon from "../../../../../assets/sun.svg"
import NatureIcon from "../../../../../assets/nature.svg"

export function Funds() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Funds</Text>
      <ScrollView horizontal contentContainerStyle={styles.funds} showsHorizontalScrollIndicator={false} >
        <FundItem 
            icon={<WindIcon />}
            title="Wind Fund" 
            amount="1032.23" 
            investmentDelta={{isGain: true, value: "3.51%"}}
          />
          <FundItem 
            icon={<SunIcon />}
            title="Sun Fund" 
            amount="1032.23" 
            investmentDelta={{isGain: false, value: "3.51%"}}
          />
          <FundItem 
            icon={<NatureIcon />}
            title="Nature Fund" 
            amount="1032.23" 
            investmentDelta={{isGain: true, value: "3.51%"}}
          />
      </ScrollView>
    </View>
  )
}

