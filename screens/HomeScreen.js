import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { BellIcon } from 'react-native-heroicons/outline';
import tw from 'tailwind-react-native-classnames';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
const { width, height } = Dimensions.get('window');

export default function HomeScreen(props) {
  const styles = StyleSheet.create({
    activeTitle: {
      backgroundColor: themeColors.bgLight,
      color: 'white',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 50,
      marginRight: 2,
    },
    searchIcon: {
      borderRadius: 100,
      padding: 12,
      top: 5,
      height: 50,
      width:50,
      backgroundColor: themeColors.bgLight,
    },
  });

  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View style={tw`flex-1 relative bg-white`}>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        style={tw`w-full absolute -top-5 opacity-10`}
      />
      <SafeAreaView style={tw`top-10 `}>
        <View style={tw`px-4 flex-row justify-between items-center`}>
          <Image
            source={require('../assets/images/avatar.png')}
            className=""
            style={tw`h-9 w-9 rounded-full`}
          />
          <View style={tw`flex-row items-center `}>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text style={tw`text-base font-semibold`}>Kigali, Rwanda</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        {/* search */}
        <View style={tw`mx-5 mt-14`}>
          <View style={tw`flex-row rounded-full p-1 bg-gray-200`}>
            <TextInput
              placeholder="Search"
              style={tw`p-4 flex-1 font-semibold text-gray-400`}
            />
            <TouchableOpacity style={styles.searchIcon}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`px-2 mt-2`}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              const dynamicStyle = isActive
                ? styles.activeTitle
                : tw`bg-gray-200 text-black p-4 px-5 rounded-full mr-2 shadow`;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={dynamicStyle}
                >
                  <Text style={tw`font-semibold` + tw`${activeTextClass}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* Coffee Cards */}
      </SafeAreaView>
      <View style={tw`flex justify-center mt-10 py-10`}>
        <Carousel
          containerCustomStyle={{ overflow: 'visible' }}
          data={coffeeItems}
          renderItem={({ item }) => <CoffeeCard item={item} />}
          firstItem={1}
          loop={true}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={width}
          itemWidth={width * 0.63}
          slideStyle={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'visible',
          }}
        />
      </View>
    </View>
  );
}
