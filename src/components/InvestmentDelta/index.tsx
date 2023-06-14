import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "../Text";
import { styles } from "./styles";

type InvestmentDeltaProps = {
  isGain: boolean;
  amountText: string;
}
export function InvestmentDelta({isGain = true, amountText}: InvestmentDeltaProps){
  const iconName = isGain ? "arrow-top-right" : "arrow-bottom-right"
  return(
    <>
      <Text style={[styles.return, !isGain && styles.loss]}>
        {` `}
        <MaterialCommunityIcons name={iconName} />
        {amountText}
      </Text>
    </>
  )
}