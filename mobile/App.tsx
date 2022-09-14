import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>

      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Send 4" />
      <StatusBar style="auto" backgroundColor='purple' />
    </View>
  );
}

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#700',
    fontSize: 42,
    fontWeight: "bold"
  }

});
