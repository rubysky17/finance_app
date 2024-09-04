import React from 'react';
import { Checkbox, Colors } from 'react-native-ui-lib';

enum Sizes {
    m = 20,
    l = 30
};
interface IProps {
    size?: string;
    defaultValue: boolean;
    required?: boolean;
    onChange: Function;
    label?: string
};

function CCheckbox(props: IProps) {
    const { size = "m", defaultValue, required = false, onChange, label = "" } = props;

    const handleChange = () => {
        onChange && onChange()
    };

    return (
        <Checkbox
            size={Sizes[size]}
            value={defaultValue}
            onValueChange={handleChange}
            required={required}
            borderRadius={8}
            label={label}
            color={Colors.neutral}
        />
    )
}

export default CCheckbox