import { Project } from '../../domain/entities/project';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';

export class CreateProjectUseCase {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(name: string, description: string): Promise<Project> {
    const project = new Project();
    project.name = name;
    project.description = description;
    project.status = 'backlog';
    return this.projectRepository.save(project);
  }
}