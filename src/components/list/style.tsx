import { StyleSheet } from 'react-native';

export const mainListStyleSheet = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    viewContainer: {
        flex: 1,
        marginVertical: 15,
    },
    viewBox: {
        borderColor: '#000',
        borderWidth: 1,
        width: '100%',
        height: '100%',
    }
});
