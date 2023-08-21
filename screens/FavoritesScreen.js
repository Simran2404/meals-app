import { Text, View, StyleSheet } from "react-native";

function FavoritesScreen() {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default FavoritesScreen;

const styles = StyleSheet.create({});
