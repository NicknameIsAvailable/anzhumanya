import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import { View, Text, Theme } from 'tamagui'

export default function NotFoundScreen() {
  return (
    <Theme name="green">
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View margin={10}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </Theme>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
