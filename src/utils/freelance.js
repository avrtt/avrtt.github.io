export function getProjects(projectCount) {
	if (projectCount === 0) { return 'No projects' }
	else if (projectCount === 1) { return projectCount + ' project' } 
	else { return projectCount + ' projects' }
}

export function getProjectsRu(projectCount) {
	if (projectCount === 0) { return 'Нет проектов' }
	else if (projectCount % 10 === 1 && !(projectCount % 100 === 11)) { return projectCount + ' проект' }
	else if (projectCount % 10 === 2 && !(projectCount % 100 === 12)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 3 && !(projectCount % 100 === 13)) { return projectCount + ' проекта' }
	else if (projectCount % 10 === 4 && !(projectCount % 100 === 14)) { return projectCount + ' проекта' }
	else { return projectCount + ' проектов' } // блять инсульт
}