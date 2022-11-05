import React from 'react'
import {View, StyleSheet} from 'react-native'
import Text from "../components/text/text";
import PlanetHeader from "../components/planetHeader";
import {colors} from "../theme/colors";
import {SafeAreaView} from "react-native-safe-area-context";

const DetailsScreen = ({ navigation, route}) => {
    const {planet} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} title={planet.name} />
            <View>
                <Text preset="h2">Details Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
})