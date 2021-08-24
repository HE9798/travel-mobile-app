import React from 'react'
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import colors from '../src/colors/Colors'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import activitiesData from '../src/data/ActivitiesData'
import discoverCategoriesData from '../src/data/DiscoverCategoriesData'
import discoverData from '../src/data/DiscoverData'
import learnMoreData from '../src/data/LearnMoreData'
import profile from '../src/images/person.jpg'

const Home = ({navigation}) => {

    const renderDiscoverItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item})}>
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem, 
                    { marginLeft: item.id === 'discover-1' ? 20 : 0 }
                    ]}
                    imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name="location-pin" size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderactivityItem = ({item}) => {
        return (
            <View style={styles.activityItemWrapper}>
                <Image 
                    source={item.image} 
                    style={[styles.activityItemImage, 
                        {marginLeft: item.id === 'activities-1' ? 20 : 0}
                    ]} 
                />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        )
    }

    const renderLearnMoreItem = ({item}) => {
        return (
            <ImageBackground 
                source={item.image}
                style={[styles.learnMoreItem, 
                {marginLeft: item.id === 'learnMore-1' ? 20 : 0}
                ]}
                imageStyle={styles.learnMoreItemImage}
            >
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <SafeAreaView>
                    <View style={ styles.menuWrapper }>
                        <TouchableOpacity>
                            <Feather name="menu" size={32} color={ colors.black } style={ styles.menuIcon } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={ profile } style={ styles.profileImage } />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <View style={ styles.discoverWrapper }>
                    <Text style={ styles.discoverTitle }>Discover</Text>
                    <View style={ styles.discoverCatWrapper }>
                        <Text style={[ styles.discoverCatText, {color: colors.orange} ]}>All</Text>
                        <Text style={ styles.discoverCatText }>Destinations</Text>
                        <Text style={ styles.discoverCatText }>Citites</Text>
                        <Text style={ styles.discoverCatText }>Experiences</Text>
                    </View>
                    <View style={ styles.discoverItemsWrapper }>
                        <FlatList 
                            data={ discoverData }
                            renderItem={ renderDiscoverItem }
                            keyExtractor={ (item) => item.id }
                            horizontal
                            showHorizontalScrollIndicator={ false }
                        />
                    </View>
                </View>
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={ styles.activitiesItemsWrapper }>
                        <FlatList 
                            data={ activitiesData }
                            renderItem={ renderactivityItem }
                            keyExtractor={ (item) => item.id }
                            horizontal
                            showHorizontalScrollIndicator={ false }
                        />
                    </View>
                </View>
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <View style={ styles.learnMoreItemsWrapper }>
                        <FlatList 
                            data={ learnMoreData }
                            renderItem={ renderLearnMoreItem }
                            keyExtractor={ (item) => item.id }
                            horizontal
                            showHorizontalScrollIndicator={ false }
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        color: colors.white
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.orange
    },
    discoverWrapper: {
        marginTop: 20
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontSize: 32,
        fontWeight: 'bold'
    },
    discoverCatWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20
    },
    discoverCatText: {
        marginRight: 30,
        fontSize: 16,
        color: colors.darkGray
    },
    discoverItemsWrapper: {
        paddingVertical: 20
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20
    },
    discoverItemImage: {
        borderRadius: 20
    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold'
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    discoverItemLocationText: {
        marginLeft: 5,
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14
    },
    activitiesWrapper: {
        marginTop: 10
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    activityItemImage: {
        width: 36
    },
    activityItemText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.darkGray,
    },
    learnMoreWrapper: {
        marginTop: 10
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: colors.black,
        fontSize: 24
    },
    learnMoreItemsWrapper: {
        paddingVertical: 20
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20
    },
    learnMoreItemImage: {
        borderRadius: 20
    },
    learnMoreItemText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal:10,
        marginVertical: 20
    },
})