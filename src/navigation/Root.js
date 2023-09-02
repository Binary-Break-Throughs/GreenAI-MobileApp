import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";

import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

function HomeScreen() {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const logout = async () => {
    await AsyncStorage.removeItem("@token");
    setIsLoggedIn(false);
  };

  return (
    // AFTER ONBOARDING IS DONE, THIS IS DISPLAYED
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>User is logged in!</Text>
      <Button onPress={logout} title="LOGOUT" />
    </View>
  );
}

function OnboardingScreen() {
  const { setIsLoggedIn } = React.useContext(AuthContext);
  const { setItem } = useAsyncStorage("@token");
  const logInUser = async () => {
    setIsLoggedIn(true);
    await setItem("DUMMY TOKEN");
  };

  const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  const Skip = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );

  const Next = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
  );

  const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Get Started!</Text>
    </TouchableOpacity>
  );

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
     
      onSkip={logInUser}
      onDone={logInUser}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboardingImage-1.png")} />,
          title: "Green.AI",
          subtitle: "A new way to optimize waste management",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../../assets/onboarding-2.png")} style={styles.image}/>,
          title: "Sort and Manage",
          subtitle: "Distinguish between waste with the click of a button",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../assets/waste-removebg-preview.png")} style={styles.image2}/>,
          title: "Track waste disposal",
          subtitle: "Keep track of your waste disposal",
        }
      ]}
    />
  );
}

const Stack = createStackNavigator();
function Root() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const { getItem } = useAsyncStorage("@token");
  const [checking, setIsChecking] = React.useState(true);

  React.useEffect(() => {
    const checkIfUserIsLoggedIn = async () => {
      const item = await getItem();

      // user is logged in
      if (item !== null) {
        setIsLoggedIn(true);
      }

      setIsChecking(false);
    };

    checkIfUserIsLoggedIn();
  }, []);

  if (checking) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
screenOptions={{headerShown: false}}    >
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350, // Set the desired width
    height: 300, // Set the desired height
    resizeMode: "contain", // You can use "contain" or "cover" as needed
  },
  image2: {
    width: 400, // Set the desired width
    height: 200, // Set the desired height
    resizeMode: "contain", // You can use "contain" or "cover" as needed
  },
});

export default Root;
