import React from 'react'
import {View, Text as RnText, StyleSheet} from 'react-native'
import {presets} from "./text-preset";

const Text = ({ children, preset = "default", style  }) => {
    const textStyles = StyleSheet.compose(presets[preset], style)
    return (
        <RnText style={textStyles}>
            {children}
        </RnText>
    )
}

export default Text