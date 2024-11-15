class ProjectService {
  private projects: { id: number; name: string; description: string }[] = [];
  private currentId: number = 1;

  listProjects() {
    return this.projects;
  }

  $createProject(name: string, description: string) {
    const newProject = { id: this.currentId++, name, description };
    this.projects.push(newProject);
    return newProject;
  }

  $updateProject(id: number, name: string, description: string) {
    const project = this.projects.find(p => p.id === id);
    if (project) {
      project.name = name;
      project.description = description;
      return project;
    }
    throw new Error('Project not found');
  }

  $deleteProject(id: number) {
    const projectIndex = this.projects.findIndex(p => p.id === id);
    if (projectIndex !== -1) {
      const [deletedProject] = this.projects.splice(projectIndex, 1);
      return deletedProject;
    }
    throw new Error('Project not found');
  }
}

export default new ProjectService();