import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function TabMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
        <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
