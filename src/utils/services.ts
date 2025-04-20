/* 

Copyright © 2022  Vladislav Averett (avrtt)
Distributed under the GNU AGPLv3 license. For details and source code, please refer to <https://github.com/avrtt/avrtt.github.io>.

*/

import { projects } from '../data/freelance/arrays';

export const getProjectsForService = (serviceId: string) => {
    return projects.filter(project => project.showAsServiceExample === String(serviceId));
}
