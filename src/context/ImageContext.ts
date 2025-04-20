/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { createContext } from 'react';

export const ImageContext = createContext({
    images: [],
    basePath: '',
});
