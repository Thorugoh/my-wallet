import { View } from "react-native";
import { Text } from "../../../components/Text";
import { styles } from "./styles";
import InfoIcon from "../../../../assets/info.svg";

type ItemProps = {
  title: string;
  subtitle: string;
}

function Item({ title, subtitle }: ItemProps) {
  return (
    <View>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <InfoIcon style={styles.infoIcon} />
      </View>
      <Text>{subtitle}</Text>
    </View>
  )
}
export function InfoSection() {
  const items = [
    {
      title: "AUM",
      subtitle: "$430.88m"
    },
    {
      title: "Issue Date",
      subtitle: "18/04/2022"
    },
    {
      title: "Vintage Range",
      subtitle: "2019 - 2022"
    },
    {
      title: "TER",
      subtitle: "0.15%"
    },
    {
      title: "Price at Close",
      subtitle: "$17.68"
    },
    {
      title: "Price at Open",
      subtitle: "$17.74"
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info & Stats</Text>
      <View style={styles.items}>
        {
          items.map(({ title, subtitle }) => (
            <View key={title} style={{width: "40%"}}>
              <Item  title={title} subtitle={subtitle} />
            </View>
          ))
        }
      </View>
    </View>
  )
}