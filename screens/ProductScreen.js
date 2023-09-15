import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';
import {
  ArrowLeftCircleIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
} from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productImage: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    shadowColor: 'red',
    height: 260,
    width: 260,
    top: -50,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    borderRadius: 80,
    backgroundColor: themeColors.bgDark,
    padding: 5,
    top: 230,
    left: 16,
  },
  ProductDetails: {
    position: 'relative',
    top: 250,
    fontWeight: 'semi-bold',
  },
  AboutTitle: {
    fontSize: 'large',
  },
  buyNow: {
    padding: 4,
    borderRadius: 40,
    display: 'flex',
    marginLeft:20,
    marginRight: 100,
    width:250,
    backgroundColor: themeColors.bgDark,
  },
});
export default function ProductScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Image
          source={require('../assets/images/beansBackground2.png')}
          style={{
            height: 300,
            width: 400,
            position: 'absolute',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            opacity: 0.8,
          }}
        />
        <View style={tw`mx-4 flex-row justify-between items-center py-10 `}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`rounded-full border-2 border-white p-2`}>
            <HeartIcon size="24" color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={tw`py-20`}>
        <View style={tw`flex-row justify-center`}>
          <Image source={item.image} style={styles.productImage} />
        </View>
        <View style={styles.ratings}>
          <StarIcon size="15" color="white" style={{}} />
          <Text style={tw`text-base font-semibold text-white px-1 `}>
            {item.stars}
          </Text>
        </View>
        <View style={styles.ProductDetails}>
          <View style={tw`mx-4 flex-row justify-between items-center `}>
            <Text style={tw`text-3xl font-semibold`}>{item.name}</Text>
            <Text style={tw` text-lg font-semibold`}>${item.price}</Text>
          </View>
          <View style={tw`mx-4 h-28`}>
            <Text style={tw`text-lg font-semibold `}>About</Text>
            <Text style={tw`text-gray-600 `}>{item.desc} </Text>
          </View>
          <View style={tw`flex-row justify-between items-center mx-4 mb-2`}>
            <View style={tw`flex-row items-center`}>
              <Text
                style={tw`text-base text-gray-700 font-semibold opacity-60`}
              >
                Volume
              </Text>
              <Text style={tw`text-base font-semibold`}>{item.volume}</Text>
            </View>
            <View
              style={tw`flex-row items-center border-gray-500  border rounded-full p-1 `}
            >
              <TouchableOpacity>
                <MinusIcon
                  style={tw`pr-10`}
                  size="20"
                  strokeWidth={3}
                  color={themeColors.text}
                ></MinusIcon>
              </TouchableOpacity>
              <Text style={tw`font-extrabold text-lg`}>2</Text>
              <TouchableOpacity>
                <PlusIcon
                  style={tw`pl-10`}
                  size="20"
                  strokeWidth={3}
                  color={themeColors.text}
                ></PlusIcon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`flex-row justify-between items-center mx-5 my-5`}>
            <TouchableOpacity
              style={tw`p-5 rounded-full border border-gray-400`}
            >
              <ShoppingBagIcon size="30" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNow}>
              <Text className="text-center text-base font-semibold text-white py-3">
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
