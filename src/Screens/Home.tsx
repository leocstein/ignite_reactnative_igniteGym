import { useState } from "react";
import { FlatList, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState([
    "costas",
    "biceps",
    "triceps",
    "ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name="costa"
            isActive={groupSelected === "costa"}
            onPress={() => setGroupSelected("costa")}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
