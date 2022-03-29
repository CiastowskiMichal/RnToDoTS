import { StyleSheet } from 'react-native';

const item = StyleSheet.create({
    item: {
        backgroundColor: '#2E4172',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 32,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
    
      },
      title: {
        fontSize: 20,
        color: '#FFF',
    
      },
});

export default item;