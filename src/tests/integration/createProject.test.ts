import { CreateProjectUseCase } from '../../application/usecases/createProject';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';
import { Project } from '../../domain/entities/project';

describe('CreateProjectUseCase', () => {
  let createProjectUseCase: CreateProjectUseCase;
  let projectRepository: ProjectRepository;

  beforeEach(() => {
    projectRepository = new ProjectRepository();
    createProjectUseCase = new CreateProjectUseCase(projectRepository);
  });

  it('should create a new project', async () => {
    const project = await createProjectUseCase.execute('Project 1', 'Description 1');
    expect(project.name).toBe('Project 1');
    expect(project.description).toBe('Description 1');
    expect(project.status).toBe('backlog');
  });

  it('should throw an error if name is missing', async () => {
    await expect(createProjectUseCase.execute('', 'Description 1')).rejects.toThrow('Name is required');
  });

  it('should throw an error if description is missing', async () => {
    await expect(createProjectUseCase.execute('Project 1', '')).rejects.toThrow('Description is required');
  });
});