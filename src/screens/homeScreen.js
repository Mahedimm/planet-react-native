import React from 'react'
import Text from "../components/text/text";
import {SafeAreaView} from "react-native-safe-area-context";
import PlanetHeader from "../components/planetHeader";
import {colors} from "../theme/colors";
import {StyleSheet, FlatList, View, Pressable} from "react-native";
import {PLANET_LIST} from "../data/planet-list";
import {spacing} from "../theme/spacing";
import {AntDesign} from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const renderItem = ({item, index}) => {
        const  {name, color} = item;
        return (
            <Pressable onPress={()=>{
                navigation.navigate("Details", {planet: item})
            }} style={styles.item}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={[styles.circle, {backgroundColor: color}]}></View>
                    <Text preset="h4" style={styles.itemName}>{name}</Text>
                </View>
                <AntDesign name="right" size={18} color={colors.white} />
            </Pressable>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                keyExtractor={(item, index) => index.toString()}
                data={PLANET_LIST}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    list: {
        padding: spacing[5],
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4],
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    separator: {
        height: 0.2,
        backgroundColor: colors.white,
    }

})