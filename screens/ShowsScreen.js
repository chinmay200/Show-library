import { FlatList, StyleSheet, View } from "react-native";
import NotAvailable from "../components/NotAvailable";
import ShowTile from "../components/ShowTile";
import shows from "../data/allShows";


export default function ShowsScreen({route}) {

  const genreId = route.params.genreId;

  function renderShows(itemData){
    return <ShowTile item = {itemData.item} />
  }

  const filteredShows = shows.results.filter((show) => show.genre_ids.includes(genreId))

  if(filteredShows.length < 1){
    return <NotAvailable/>
  }
  return (
    <View >
      <FlatList
        data={filteredShows}
        renderItem={renderShows}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

