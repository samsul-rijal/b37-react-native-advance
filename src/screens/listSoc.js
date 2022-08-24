import * as React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const socialMedia = ["Instagram","Facebook","Twitter"]

  // Make Function handle press to get value per list
  const handlePress = (data) => {
    navigation.navigate("Detail Social", {data})
  }

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      {/* Render Array With Flatlist */}
      <FlatList 
        data={socialMedia}
        renderItem={({item, index})=> (
          <TouchableOpacity onPress={()=> handlePress(item)}>
            <Text fontWeight={700} fontStyle="italic" fontSize={30} margin={5}>{item}</Text>
          </TouchableOpacity>
        )}
        />

    </Box>
  );
}
