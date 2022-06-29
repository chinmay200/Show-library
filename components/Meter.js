import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../Constants/GlobalStyles";

export default function Meter({ percent }) {

let ratingColor =  GlobalStyles.colors.ratingGood;
if(percent < 60){
    ratingColor = GlobalStyles.colors.ratingAvg;
}
if(percent < 40){
    ratingColor = GlobalStyles.colors.ratingBad;
}

  return (
    <View style={styles.meterContainer}>
      <View style={[styles.meter , {width:percent , backgroundColor:ratingColor}]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  meterContainer: {
    height: 13,
    width: 100,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius:15,
    marginVertical:5
  },

  meter: {
    height: 13,
    borderRadius:15
  },
});
