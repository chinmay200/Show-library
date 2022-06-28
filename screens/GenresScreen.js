import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import GenreTile from "../components/GenreTile";
import { GlobalStyles } from "../Constants/GlobalStyles";

import genres from "../data/allGenre";

function GenresScreen() {
  function genreTile(itemData) {
    return <GenreTile item={itemData.item} color={itemData.item.color} />;
  }

  return (
    <View style = {styles.container}>
      <FlatList
        data={genres}
        renderItem={genreTile}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default GenresScreen;

const styles = StyleSheet.create({
})
