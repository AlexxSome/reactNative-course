import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "./src/navigator/StackNavigator";
import React from "react";


export const App = ()=> {

  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
};

