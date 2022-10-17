import { Button, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/appTheme";

interface Props extends StackScreenProps<any,  any>{

};

export const HomeScreen = ( {navigation}: Props)=> {

  return (
    <View style={styles.globalMargin}>
      <Button title="Ir pagina 2" onPress={()=> navigation.navigate('Profile') } />
      <Text>Home</Text>

      <Button title="Ir pagina Setting" onPress={()=> navigation.navigate('Settings') } />

      <Text>Home XXX</Text>
    </View>
  )
}
