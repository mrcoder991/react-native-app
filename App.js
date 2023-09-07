import React, { useMemo } from 'react'
import { useMaterial3Theme } from '@pchmn/expo-material3-theme'
import { StyleSheet, View, useColorScheme } from 'react-native'
import {
  Button,
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

function App() {
  const colorScheme = useColorScheme()
  const { theme } = useMaterial3Theme({ fallbackSourceColor: '#e64a19' })

  console.log(theme)

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark'
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme],
  )

  return (
    <PaperProvider
      theme={paperTheme}
      settings={{
        rippleEffectEnabled: true,
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>Weather app</Text>
          <Button mode="contained">Hello world</Button>
        </View>
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default App
