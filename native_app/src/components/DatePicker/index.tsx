import { useState } from 'react';

import { DateTimePicker } from 'react-native-ui-lib';

export default function DatePicker() {
    const [show, setShow] = useState(true);
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'datetime'}
                    is24Hour={true}
                    onChange={(selectedDate) => {
                        onChange(selectedDate)
                    }}
                />
            )}

        </>
    )
}