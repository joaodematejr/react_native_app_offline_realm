import Reactotron from "reactotron-react-native";

Reactotron.log("Hello 123");

if (__DEV__) {
  const tron = Reactotron.configure({ host: "localhost" })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
