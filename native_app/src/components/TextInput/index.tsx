import { useState } from "react";
import { TextField } from 'react-native-ui-lib';

export const CTextInput = (props) => {
    const {
        isHasIcon = false,
        inputStyle,
        label, rightIcon,
        leftIcon,
        placeholder,
        ...restprops
    } = props;
    const [value, setValue] = useState("");

    const styleInput = inputStyle === 'bordered' ? {
        borderWidth: 1,
        borderColor: "#DCE4E8",
        borderRadius: 50,
    } : {};

    return <TextField
        textSm
        value={value}
        placeholder={placeholder}
        containerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 24,
            paddingLeft: 24,
            color: "#ACB5BB",
            ...styleInput
        }}
        label={inputStyle === 'bordered' ? null : label}
        placeholderTextColor={'#DCE4E8'}
        leadingAccessory={isHasIcon ? leftIcon : null}
        trailingAccessory={isHasIcon ? rightIcon : null}
        showMandatoryIndication
        onChangeText={(value) => {
            setValue(value)
        }}
        {...restprops}
    />
}