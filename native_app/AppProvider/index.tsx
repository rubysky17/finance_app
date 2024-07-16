import { Appearance } from "react-native";
import { useState, useEffect } from 'react';

import { AppContext } from "./Context";

const AppProvider = (props: any) => {
    const { children } = props;
    const color = Appearance.getColorScheme();
    const [systemColorScheme, setSystemColorScheme] = useState(color);

    useEffect(() => {
        setSystemColorScheme(color);
    }, [color]);

    return <AppContext.Provider value={{ systemColorScheme }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider