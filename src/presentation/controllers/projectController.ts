import { Request, Response } from 'express';
import { CreateProjectUseCase } from '../../application/usecases/createProject';
import { ProjectRepository } from '../../infrastructure/repositories/projectRepository';

export class ProjectController {
  private createProjectUseCase: CreateProjectUseCase;

  constructor() {
    this.createProjectUseCase = new CreateProjectUseCase(new ProjectRepository());
  }

  async createProject(req: Request, res: Response): Promise<void> {
    try {
      const { name, description } = req.body;
      const project = await this.createProjectUseCase.execute(name, description);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}