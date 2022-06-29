import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../Constants/GlobalStyles";

export default function GenreTile({ item, color }) {
  const navigation = useNavigation();
  function onPress(itemId) {
    navigation.navigate("ShowsScreen", { genreId: itemId });
  }

  return (
    <View style={styles.tileContainer}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress.bind(this, item.id)}
      >
        <View style={styles.tile}>
          <Text style={styles.tileText}>{item.name}</Text>
          <Ionicons
            name="arrow-forward"
            size={24}
            color={GlobalStyles.colors.secondry100}
            style={styles.icon}
          />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.secondry50,
    height: 70,
    borderRadius: 20,
    marginHorizontal: 35,
    marginTop: 7,
    marginBottom:10,
    elevation: 14,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  tile: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    flexDirection:"row"
  },

  button: { flex: 1, width: "100%" },

  buttonPressed: {
    opacity: 0.5,
  },
  tileText: {
    fontSize: 26,
    color: GlobalStyles.colors.accent200,
    fontWeight:"500"
  },

  icon:{
    borderLeftColor:GlobalStyles.colors.primary50,
    borderLeftWidth:2,
    paddingLeft:6
  }
});
