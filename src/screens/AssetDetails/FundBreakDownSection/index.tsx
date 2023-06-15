import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/Text";
import { styles } from "./styles";
import { Image } from 'expo-image';
import { useState } from "react";

type TabProps = {
  title: string;
  isSelected: boolean;
  onPress?: (title: string) => void
}

type TabContentItemProps = {
  portalLogoUri: string;
  image: string;
  url: string;
  title: string;
  onPress?: (title: string) => void
}

function Tab({ title, isSelected, onPress }: TabProps) {
  function handleOnPress() {
    onPress && onPress(title);
  }

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.tabTitleContainer, isSelected && styles.tabTitleContainerSelected]}>
        <Text style={[styles.tabTitle, isSelected && styles.tabTitleSelected]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function TabContentItem({ image, portalLogoUri, url, title, onPress }: TabContentItemProps) {
  return (
    <TouchableOpacity style={styles.contentContainer}>
      <Image
        style={styles.coverImage}
        source={image}
        contentFit="fill"
        transition={1000}
      />
      <View style={styles.contentBody}>
        <Image
          style={styles.portalLogoImage}
          source={portalLogoUri}
          contentFit="fill"
          transition={1000}
        />
        <Text style={styles.contentTitle}>{title}</Text>
        <Text style={styles.contentLink}>Read more</Text>
      </View>
    </TouchableOpacity>
  )
}

export function FundBreakdown() {
  const sections = [...new Set(allcontent.map(content => content.section.charAt(0).toUpperCase() + content.section.slice(1)))]
  const [selectedTab, setSelectedTab] = useState("Highlighted");
  
  const filteredContent = allcontent.filter(content => content.section.toLowerCase() === selectedTab.toLowerCase());
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Breakdown</Text>
      <View style={styles.tabs}>
        {
          sections.map((tab, index) => (
            <Tab
              key={tab}
              title={tab}
              isSelected={tab === selectedTab}
              onPress={setSelectedTab}
            />
          ))
        }
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        style={{width: "100%"}}
        data={filteredContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TabContentItem
          title={item.image}
          portalLogoUri={item.portalLogo}
          url={item.url}
          image={item.image}
        />}
      />
    </View>
  )
}


const allcontent = [
  { 
    id: "01",
    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",
    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "highlighted",
  },
  {
    id: "02",
    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",
    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "highlighted",
  },
  {
    id: "03",
    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",
    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "highlighted",
  },
  {
    id: "03",
    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",
    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Value",
  },
  {
    id: "04",

    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",

    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Vintage",
  },
  {
    id: "05",

    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",

    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Vintage",
  },
  {
    id: "06",

    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",

    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Registry",
  },
  {
    id: "07",

    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",

    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Registry",
  },
  {
    id: "08",
    title: "Aspira is building a modular, direct air capture system with the energy supply integrated into the modules",
    image: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/c37931c2-9b3c-44e2-9b13-90b8c67ce4d4/211203+CC+DAC-IM+Brochure-2.jpg",
    portalLogo: "https://images.squarespace-cdn.com/content/v1/629ec8b60d34d83ed4c5d282/63f80d47-1748-4ae5-b03d-1bede6638e17/AspiraDAC-Logo-RGB-Black.png?format=1500w",
    url: "https://www.aspiradac.com/",
    section: "Value",
  },
]