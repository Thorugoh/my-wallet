import { View } from "react-native";
import { Text } from "../../../../components/Text";
import { styles } from "./styles";

type CardProps = {
  title?: string;
}
export function Card({title}: CardProps){
  return(
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}