import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData } from "../constants";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView 
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}
        
        > 

        <FlatList
        
            data={dummyData.categories}
            keyExtractor={item => `${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View>

                </View>
            }

            renderItem={({item}) => {
                return (
                    <View>

                    </View>
                )
            }}
        
        />




        </SafeAreaView>
    )
}

export default Home;