import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GenreTile({ item, color }) {
  const navigation = useNavigation();
  function onPress(itemId) {
    navigation.navigate("ShowsScreen" , {genreId : itemId});
  }

  return (
    <LinearGradient
      colors={["#edede9", color]}
      style={styles.tileContainer}
    >
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
          </View>
        </Pressable>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    height: 150,
    borderRadius: 10,
    margin: 12,
    elevation: 14,
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    alignItems: "center",
  },


  tile: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: { flex: 1, width: "100%" },

  buttonPressed: {
    opacity: 0.5,
  },
  tileText: {
    fontSize: 18,
    marginBottom: 15,
  },
});
