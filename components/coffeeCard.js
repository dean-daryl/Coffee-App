import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { themeColors } from '../theme';
import { StarIcon } from 'react-native-heroicons/solid';
import { Dimensions } from 'react-native';
import { coffeeItems } from '../constants';
import { PlusIcon } from 'react-native-heroicons/outline';
import { Navigation } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    // marginTop: ios ? -(height * 0.08) : 15,
    flexDirection: 'row', // For flex-row
    justifyContent: 'center', // For justify-center
  },
  // Add more styles here as needed
});
export default function CoffeeCard({ item }) {
    const navigation =useNavigation()
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
      }}
    >
      <View style={styles.container}>
        <Image source={item.image} style={tw`h-40 w-40 mt-1`} />
      </View>
      <View style={tw`px-3 mt-5 py-3`}>
        <Text style={tw`text-3xl text-white font-semibold z-10 bottom-5`}>
          {item.name}
        </Text>
        <View   style={tw`flex-row items-center rounded-3xl bottom-4`}>
          <StarIcon size="15" color="white" style={tw``} />
          <Text style={tw`text-base font-semibold text-white px-1 `}>
            {item.stars}
          </Text>
        </View>
        <View style={tw`flex-row z-10 bottom-3`}>
          <Text style={tw`text-base text-white font-semibold opacity-60`}>
            Volume:
          </Text>
          <Text style={tw`text-base text-white font-semibold `}>
            {item.volume}
          </Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-white font-bold text-lg  bottom-2`}>
            $ {item.price}
          </Text>
          <TouchableOpacity
          onPress={()=> navigation.navigate('Product', {...item})}
          style={tw`p-4 bottom-3 bg-white rounded-full`}>
            <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
