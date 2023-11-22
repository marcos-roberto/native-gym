import { Loading } from "@components/Loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <View style={styles.container}>
          <Text style={{ fontFamily: "Roboto_400Regular" }}>
            Open up App.sx to stok art working on your app! macbook air
          </Text>
        </View>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
