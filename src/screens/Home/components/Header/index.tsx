import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../../components/Text";
import Bell from "../../../../assets/bell.svg";
import Person from "../../../../assets/person.svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Portfolio } from "../Portfolio";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <TouchableOpacity style={styles.accountIcon}>
          <Person height={21} />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.titleText}>
            Account: $1,457.23
          </Text>
          <Ionicons
            size={15}
            style={styles.chevronDown} name="chevron-down-sharp" />
        </View>
        <Bell height={21} width={20} />
      </View>
      <Portfolio />
    </View>

  )
}