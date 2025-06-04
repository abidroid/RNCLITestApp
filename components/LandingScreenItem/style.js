import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  listTile: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 16,
    borderRadius: 8,
    marginBottom: 8,
  },

  leading: {
    backgroundColor: 'lightgreen',
    padding: 8,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTileColumn: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontStyle: 'italic',
  },
  trailing: {},
});

export default style;
