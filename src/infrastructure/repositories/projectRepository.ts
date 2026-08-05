import { getRepository } from 'typeorm';
import { Project } from '../entities/project';

export class ProjectRepository {
  async save(project: Project): Promise<Project> {
    const repository = getRepository(Project);
    return repository.save(project);
  }
}