import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, FlatList, ImageBackground } from 'react-native'
import visitedLocationsData from '../src/data/VisitedLocationsData'
import colors from '../src/colors/Colors'
import aurora from '../src/images/aurora.jpg'
import amsterdam from '../src/images/amsterdam.jpg'
import snowyMountains from '../src/images/snowy-mountains.jpg'
import desertLightening from '../src/images/desert-lightening.jpg'
import aurora2 from '../src/images/aurora-2.jpg'
import australia from '../src/images/australia.png'
import beach from '../src/images/beach.png'
import boatbeach from '../src/images/boatbeach.png'

const Liked = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.savedTitle}>Saved Trips</Text>
                <View style={styles.imageCols}>
                    <View style={styles.imageCol}>
                        <ImageBackground source={aurora} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Watching Aurora in Alaska</Text>
                        </ImageBackground>
                        <ImageBackground source={amsterdam} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Cycling through Amsterdam</Text>
                        </ImageBackground>
                        <ImageBackground source={aurora2} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Watching Aurora in Alaska</Text>
                        </ImageBackground>
                        <ImageBackground source={australia} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Feeding Wild Animals</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.imageCol}>
                        <ImageBackground source={desertLightening} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Safari in the Desert</Text>
                        </ImageBackground>
                        <ImageBackground source={snowyMountains} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Camping on Mountain Top</Text>
                        </ImageBackground>
                        <ImageBackground source={beach} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Surfing in Hawaii</Text>
                        </ImageBackground>
                        <ImageBackground source={boatbeach} style={styles.image} imageStyle={styles.imageItem}>
                            <Text style={styles.locationTitle}>Snorkelling in Mexico</Text>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Liked

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    savedTitle: {
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 20
    },
    image: {
        height: 180,
        width: 180,
        marginVertical: 10,
        justifyContent: 'flex-end'
    },
    imageItem: {
        borderRadius: 20,
    },
    imageCols: {
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    locationTitle: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 16,
        marginHorizontal: 20,
        marginVertical: 20
    }
})