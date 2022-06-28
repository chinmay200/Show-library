import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import FavoritesScreen from "./screens/FavoritesScreen";
import GenresScreen from "./screens/GenresScreen";
import ShowsScreen from "./screens/ShowsScreen";
import ShowDetailsScreen from "./screens/ShowDetailsScreen";
import { GlobalStyles } from "./Constants/GlobalStyles";
import { AntDesign } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerHomeScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
        },
        headerTintColor:"white",
        drawerStyle:{ backgroundColor:GlobalStyles.colors.primary50},
        drawerContentStyle:{marginTop:"15%"},
        drawerActiveBackgroundColor:"#dec0f1",
        drawerActiveTintColor:"#571089",
        drawerInactiveTintColor:"white",
        drawerLabelStyle:{fontSize:17},
      }}
    >
      <Drawer.Screen name="All Genres" component={GenresScreen} />
      <Drawer.Screen name="Favorites Screen" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.backgroundDark,
            },
          }}
        >
          <Stack.Screen
            name="CategoriesOverview"
            component={DrawerHomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="ShowsScreen" component={ShowsScreen} />
          <Stack.Screen
            name="ShowsDetailScreen"
            component={ShowDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
