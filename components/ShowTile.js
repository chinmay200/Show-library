import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { GlobalStyles } from "../Constants/GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { urls } from "../Externals/urls";

export default function ShowTile({ item }) {
  const posterImg = {
    uri: urls.backDropImg + item.backdrop_path.toString(),
  };

  let ratingColor = "#10b52b";

  if (item.vote_average < 4) {
    ratingColor = "#eb6123";
  } else if (item.vote_average < 7) {
    ratingColor = "#F5BC00";
  }

  const navigation = useNavigation();

  function onPressHandler(showId) {
    navigation.navigate("ShowsDetailScreen", { showId: showId });
  }

  return (
    <LinearGradient
      style={styles.showTileContainer}
      colors={[
        "transparent",
        GlobalStyles.colors.backgroundDark,
        GlobalStyles.colors.backgroundDark,

      ]}
      start={{ x: 0.1, y: 0.3 }}
      end={{ x: 1, y: 1 }}
    >
      <Pressable
        android_ripple={{ color: "grey" }}
        style={styles.button}
        onPress={onPressHandler.bind(this, item.id)}
      >
        <ImageBackground
          source={posterImg}
          resizeMode="cover"
          imageStyle={styles.imageBackground}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.showTitle}>{item.title}</Text>
            <View
              style={[styles.detailContainer, { backgroundColor: ratingColor }]}
            >
              <AntDesign
                name="star"
                size={14}
                color={
                  item.vote_average < 7 && item.vote_average > 4
                    ? "black"
                    : "white"
                }
              />
              <Text
                style={
                  (styles.deatil,
                  {
                    color:
                      item.vote_average < 7 && item.vote_average > 4
                        ? "black"
                        : "white",
                  })
                }
              >
                {item.vote_average}
              </Text>
            </View>
            {item.adult && (
              <View style={styles.detailContainer}>
                <Text style={styles.deatil}>Adult</Text>
              </View>
            )}
            <View style={styles.releaseDetails}>
              <MaterialCommunityIcons
                name="movie-open"
                size={24}
                color="#ffff00"
              />
              <Text style={styles.releaseText}>{item.release_date}</Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  showTileContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
    height: 200,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
  },

  button: {
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },

  contentContainer: {
    height: "100%",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  imageBackground: {
    opacity: 0.4,
  },

  showTitle: {
    fontSize: 20,
    color: GlobalStyles.colors.litext,
    fontWeight: "600",
  },

  detailContainer: {
    marginTop: 10,
    width: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 4,
    backgroundColor: "#ed0035",
    borderRadius: 5,
  },

  deatil: {
    fontWeight: "bold",
    color: "white",
  },

  releaseDetails: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
  },

  releaseText: {
    fontSize: 15,
    color: "#ffff",
    fontWeight: "bold",
  },
});
