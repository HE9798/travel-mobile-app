import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList, ScrollView, StyleSheet, SafeAreaView, ImageBackground, Image, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import profile from '../src/images/person.jpg'
import colors from '../src/colors/Colors'
import amsterdam from '../src/images/amsterdam.jpg'
import australia from '../src/images/australia.png'
import boatbeach from '../src/images/boatbeach.png'
import aurora from '../src/images/aurora.jpg'
import visitedLocationsData from '../src/data/VisitedLocationsData'
import picturesTakenData from '../src/data/PicturesTakenData'

const height = Dimensions.get('window').height

const Profile = ({navigation}) => {


    const renderVisitedItem = ({item}) => {
        return (
                <ImageBackground
                    source={item.image}
                    style={[styles.locationImage, 
                    { marginLeft: item.id === 'visited-1' ? 20 : 0 }
                    ]}
                    imageStyle={styles.locationItem}
                >
                    <Text style={styles.locationTitle}>{item.title}</Text>
                </ImageBackground>
        )
    }

    const renderPicturesItem = ({item}) => {
        return (
            <Image 
                source={item.image}
                style={[styles.picture,
                    { marginLeft: item.id === 'picture-1' ? 20 : 0 }
                ]}
            />
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <SafeAreaView>
                    <ImageBackground source={amsterdam} style={ styles.profileBackground }>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <Entypo name="chevron-left" size={32} color={colors.white} />
                    </TouchableOpacity>
                    </ImageBackground>
                    <View style={styles.profileInfoWrapper}> 
                        <Image source={ profile } style={ styles.profileImage } />
                        <View style={styles.userInfoWrapper}>
                            <Text style={styles.username}>Jane Smith</Text>
                            <View style={styles.infoWrapper}>
                                <View style={styles.infoAlign}>
                                    <Text style={styles.infoNumber}>2.5</Text>
                                    <Text style={styles.infoText}>k Followers</Text>
                                </View>
                                <View style={styles.infoAlign}>
                                    <Text style={styles.infoNumber}>1.3</Text>
                                    <Text style={styles.infoText}>k Following</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.socialWrapper}>
                        <Text style={styles.socialTitle}>Social Links</Text>
                        <View style={styles.socialIcons}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="instagram" size={50} color={colors.instagram} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="facebook" size={50} color={colors.facebook} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="twitter" size={50} color={colors.twitter} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="reddit" size={50} color={colors.reddit} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.locationsWrapper}>
                        <Text style={styles.locationsTitle}>Visited Locations</Text>
                        <View style={ styles.locationsWrapper }>
                            <FlatList 
                                data={ visitedLocationsData }
                                renderItem={ renderVisitedItem }
                                keyExtractor={ (item) => item.id }
                                horizontal
                                showHorizontalScrollIndicator={ false }
                            />
                        </View>
                    </View>
                    <View style={styles.picturesWrapper}>
                        <Text style={styles.picturesTitle}>Pictures</Text>
                        <FlatList
                            data={ picturesTakenData }
                            renderItem={ renderPicturesItem }
                            keyExtractor={(item) => item.id}
                            horizontal
                            showHorizontalScrollIndicator={false}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60
    },
    profileBackground: {
        height: height * 0.25
    },
    profileInfoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',        
    },
    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 120,
        borderWidth: 3,
        borderColor: colors.orange,
        marginHorizontal: 20,
        top: -30,
    },
    userInfoWrapper: {
        flexDirection: 'column',
        top: -5,
    },
    infoWrapper: {
        marginTop: 5
    },
    username: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
    },
    infoAlign: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    infoNumber: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 1
    },
    infoText: {
        color: colors.darkGray
    },
    socialWrapper: {
        marginHorizontal: 20,
    },
    socialTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.black
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 10
    },
    locationsWrapper: {
        marginVertical: 10,
    },
    locationsTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.black
    },
    locationsList: {
        marginVertical: 20
    },
    locationItem: {
        borderRadius: 20
    },
    locationImage: {
        width: 180,
        height: 180,
        marginRight: 10,
        justifyContent: 'flex-end'
    },
    locationTitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    picture: {
        width: 180,
        height: 180,
        marginRight: 10,
        borderRadius: 20
    },
    picturesWrapper: {
        marginVertical: 10,
    },
    picturesTitle: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.black
    },
})