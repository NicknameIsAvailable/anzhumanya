import { Slot } from 'expo-router';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Stack, YStack } from 'tamagui';

const AuthLayout = () => {
    return (
        <YStack
            padding="$4"
            gap="$4" 
            style={styles.authContainer}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Slot />
            </TouchableWithoutFeedback>
        </YStack>
    );
};

const styles = StyleSheet.create({
    authContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
})

export default AuthLayout;