import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import GenreTile from "../components/GenreTile";
import { GlobalStyles } from "../Constants/GlobalStyles";

import genres from "../data/allGenre";

function GenresScreen() {
  function genreTile(itemData) {
    return <GenreTile item={itemData.item} color={itemData.item.color} />;
  }

  return (
    <View>
      <FlatList
        data={genres}
        renderItem={genreTile}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default GenresScreen;

