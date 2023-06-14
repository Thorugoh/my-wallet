import { View } from "react-native";
import { Text } from "../../../../components/Text";
import { styles } from "./styles";

type OportunityBannerProps = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}
export function OportunityBanner({title, subtitle, icon: Icon}: OportunityBannerProps){
  return(
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {Icon}
    </View>
  )
}