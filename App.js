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
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerHomeScreen() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
          borderBottomColor: GlobalStyles.colors.accent100,
          borderBottomWidth: 6,
          borderLeftColor: GlobalStyles.colors.accent100,
          borderLeftWidth: 6,
          borderBottomLeftRadius: 10,
        },
        headerTitleStyle: {
          fontSize: 26,
        },
        headerTintColor: GlobalStyles.colors.accent100,
        drawerStyle: { backgroundColor: GlobalStyles.colors.primary100 },
        drawerContentStyle: { marginTop: "15%" },
        drawerActiveBackgroundColor: "#dec0f1",
        drawerActiveTintColor: "#571089",
        drawerInactiveTintColor: GlobalStyles.colors.accent100,
        drawerLabelStyle: { fontSize: 17 },
        sceneContainerStyle: {
          backgroundColor: GlobalStyles.colors.primary100,
          borderRightColor: GlobalStyles.colors.accent100,
          borderRightWidth: 6,
        },
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
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary100,
            },
            headerTintColor: GlobalStyles.colors.accent100,
          }}
        >
          <Stack.Screen
            name="CategoriesOverview"
            component={DrawerHomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ShowsScreen"
            component={ShowsScreen}
            options={{
              contentStyle: {
                backgroundColor: GlobalStyles.colors.secondry100,
                borderTopColor: GlobalStyles.colors.accent100,
                borderTopWidth: 6,
              },
            }}
          />
          <Stack.Screen
            name="ShowsDetailScreen"
            component={ShowDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
