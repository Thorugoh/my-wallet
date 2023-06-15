import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "../../components/Button";
import { InvestmentDelta } from "../../components/InvestmentDelta";
import { Text } from "../../components/Text";
import { ScreenStackProps } from "../../routes/app.stack.routes";
import { colors } from "../../utils/colors";
import { FundBreakdown } from "./FundBreakDownSection";
import { FundChart } from "./FundChart";
import { InfoSection } from "./InfoSection";
import { PortfolioSection } from "./PortfolioSection";
import { styles } from "./styles";

export type AssetDetailsProps = {
  id: string;
}

type Props = ScreenStackProps<"AssetDetails">;

type HeaderProps = {
  title: string;
  subtitle: string;
}
function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
  )
}

export function AssetDetails({ id, navigation }: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerTitle: props => <Header title="Wind Fund" subtitle="WFND" />,
    });

  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container} style={{flex: 1, backgroundColor: colors.WHITE}}>
      <View style={styles.titleContainer}>
        <FundChart />
      </View>

      <InfoSection />
      <FundBreakdown />
      <PortfolioSection />
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.{'\n'}{'\n'}
          The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.</Text>
      </View>
      <Button title="Buy" style={styles.buyIcon} />

    </ScrollView>
  )
}