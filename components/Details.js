import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../src/colors/Colors'
import Entypo from 'react-native-vector-icons/Entypo'

const height = Dimensions.get('window').height

const Details = ({route, navigation}) => {

    const {item}=route.params

    return (
        <View style={styles.container}>
            <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={colors.orange} /> 
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.duration}</Text>
                            <Text style={styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => alert("Trip Booked!")} style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        backgroundColor: colors.white,
        flex: 1,
        marginTop: -20,
        borderRadius: 25
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60
    },
    titlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.white
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    locationText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.white
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -20,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 16,
        color: colors.darkGray,
        height: 85
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    infoItem: {

    },
    infoTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.gray
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    infoText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.orange
    },
    infoSubText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.gray
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white
    },
})