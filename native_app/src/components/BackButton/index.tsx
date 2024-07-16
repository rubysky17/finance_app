import Icon from 'react-native-vector-icons/AntDesign';

import React from 'react'

function BackButtonHeader({ navigation }: any) {
    return (
        <Icon
            name="arrowleft"
            size={28}
            color="#1A1C1E"
            onPress={() => navigation.goBack()}
        />
    )
}

export default BackButtonHeader