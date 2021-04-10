import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../consts';

export const OnBoardScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar translucent />
      <Image
        source={require('../assets/onboardImage.jpg')}
        style={style.image}
      />
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>
      <ScrollView>
        <View style={style.textContainer}>
          <Text style={style.title}>Find your {'\n'}sweet home</Text>
          <Text style={style.desc}>
            Schedule visits in just a few clicks {'\n'}visits in just a few
            clicks
          </Text>
        </View>
        <View style={style.btnConatiner}>
          <Pressable
            style={style.btn}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={style.btnText}>Get Started</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.grey,
  },
  btnConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 20,
  },
  btn: {
    backgroundColor: COLORS.dark,
    height: 60,
    width: 240,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.white,
  },
});
