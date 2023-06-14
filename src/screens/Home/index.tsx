import { View } from "react-native";
import { Text } from "../../components/Text";
import { Funds } from "./components/Funds";

import { styles } from "./styles";

function Home() {
  return (
    <View style={styles.container}>
      <Funds />
    </View>
  )
}

export { Home };