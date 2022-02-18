import React from 'react';
import { Link, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const GurbaaniScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <View
        style={[styles.ViewZk, { backgroundColor: theme.colors.primary }]}
        pointerEvents={'auto'}
      >
        <Text style={[styles.TextGB, { color: theme.colors.strongInverse }]}>
          {'ੴ ਸ੍ਰੀ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ ||'}
        </Text>

        <Text style={[styles.TextIq, { color: theme.colors.strongInverse }]}>
          {'✼  ਸੁੰਦਰ ਗੁਟਕਾ ਸਾਹਿਬ  ✼'}
        </Text>
      </View>

      <View pointerEvents={'auto'}>
        <Link
          style={[styles.LinkVI, { color: theme.colors.medium }]}
          title={'ਜਪੁ ਜੀ ਸਾਹਿਬ'}
        />
        <Link
          onPress={() => {
            try {
              navigation.navigate('Screen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.Linkic, { color: theme.colors.medium }]}
          title={'ਰਹਰਾਸਿ ਸਾਹਿਬ'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextGB: {
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
  },
  TextIq: {
    alignSelf: 'center',
    fontSize: 30,
  },
  ViewZk: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  LinkVI: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  Linkic: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default withTheme(GurbaaniScreen);
