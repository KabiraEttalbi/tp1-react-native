import { FlatList, Text, View } from "react-native";
const tab = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Joel" },
  { key: "John" },
  { key: "Joel" },
  { key: "John" },
  { key: "Joel" },
  { key: "John" },
  { key: "Dominic" },
  { key: "Jillian" },
  { key: "Jillian" },
  { key: "Jillian" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Julie" },
  { key: "Julie" },
  { key: "Julie" },
];
const FlatListBasics = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <FlatList
        data={tab}
        renderItem={({ item }) => <Text>{item.key} </Text>}
      />
    </View>
  );
};
export default FlatListBasics;
