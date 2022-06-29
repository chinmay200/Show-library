import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Meter from "../components/Meter";
import { GlobalStyles } from "../Constants/GlobalStyles";
import shows from "../data/allShows";
import { show } from "../data/show";
import { fetchShow } from "../Externals/http";
import { urls } from "../Externals/urls";
import { Dimensions } from "react-native";

// IMPORTANT DIMENSIONS
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function ShowDetailsScreen({ route }) {
  const showId = route.params.showId;

  const selectedShow = shows.results.find((show) => showId === show.id);
  // const showSelected = fetchShow(showId)

  // console.log(showSelected);

  const bannerImage =
    urls.backDropImg.toString() + show.backdrop_path.toString();

  const poster_path = urls.backDropImg.toString() + show.poster_path.toString();

  const studioImage = urls.backDropImg.toString();

  const rating = show.vote_average * 10;

  function renderProdCompany(itemData) {
    return (
      <View key={itemData.id}>
        <Text style={[styles.headContent, styles.text]}>{itemData.name}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <LinearGradient
        colors={[GlobalStyles.colors.backgroundDark, "black"]}
        style={styles.bannerImageConatiner}
      >
        <Image source={{ uri: bannerImage }} style={styles.bannerImage} />
      </LinearGradient>

      <View style={styles.basicInfo}>
        <Image source={{ uri: poster_path }} style={styles.posterImage} />
        <View>
          <Text style={{ color: GlobalStyles.colors.accent100 }}>Rating </Text>
          <Meter percent={rating} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.showTitle]}>{show.title}</Text>

        <Text style={[styles.text, styles.headings]}>{show.status} - </Text>
        <View style={styles.underline}></View>

        <Text style={[styles.text, styles.headContent]}>
          {show.release_date}
        </Text>
        <Text style={[styles.text, styles.headings]}>Overview -</Text>
        <View style={styles.underline}></View>
        <Text style={[styles.text, styles.headContent]}>{show.overview}</Text>
        <Text style={[styles.text, styles.headings]}>Runtime -</Text>
        <View style={styles.underline}></View>
        <Text style={[styles.text, styles.headContent]}>
          {show.runtime}mins
        </Text>

        <Text style={[styles.text, styles.headings]}>
          Productions companies -
        </Text>
        <View style={styles.underline}></View>
        <View>
          {show.production_companies.map((item) => renderProdCompany(item))}
        </View>
        {/* <Text style={[styles.text,styles.headContent]}>{show.production_companies[0].name}</Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
  },

  posterImage: {
    height: height / 3.5,
    width: width / 2.5,

    borderColor: GlobalStyles.colors.accent200,
    borderWidth: 4,
    borderRadius: 13,
  },

  bannerImage: {
    width: width + 120,
    height: height / 5,
    opacity: 0.4,
  },

  basicInfo: {
    flexDirection: "row",
    height: height / 2,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: -height / 15,
  },

  bannerImageConatiner: {
    position: "absolute",
  },

  showTitle: {
    fontSize: 27,
    fontWeight: "600",
    color:GlobalStyles.colors.secondry50,
    marginBottom: 20,
  },

  infoContainer: {
    paddingHorizontal:30,
    paddingVertical:30
  },

  text: {
    color: GlobalStyles.colors.litext,
  },

  headings: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "800",
    marginTop: 5,
  },

  underline: {
    height: 7,
    width: "14%",
    marginLeft: "9%",
    marginTop: "-2.5%",
    backgroundColor: GlobalStyles.colors.secondry50,
    opacity: 0.6,
    zIndex: -1,
  },

  headContent: {
    marginTop: "1%",
    fontSize: 17.7,
  },
});
