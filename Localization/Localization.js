import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: { welcome: 'Hello', name: 'IFAL' },
  ja: { welcome: 'こんにちは' },
  pt: { welcome: 'Olá' },
  gr: { welcome: 'γεια'}
};
i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default App => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {i18n.t('welcome')} {i18n.t('name')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});
