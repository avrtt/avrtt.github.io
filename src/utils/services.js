import { projects } from '../data/freelance/arrays';

export const getProjectsForService = (serviceId) => {
    return projects.filter(project => project.showAsServiceExample === String(serviceId));
}
