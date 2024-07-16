import { useContext } from 'react';
import { AppContext } from './Context';

export const useAppStore = () => {
    const { systemColorScheme }: any = useContext(AppContext);

    return { systemColorScheme };
}
