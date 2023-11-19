import { createContext } from 'react';
import { WindowsContexType } from '../types/types';

const WindowsContex = createContext<WindowsContexType>({} as WindowsContexType);

export default WindowsContex;