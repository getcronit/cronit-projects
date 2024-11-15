import { PrismaClient } from '@prisma/client';

class ProjectService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async listProjects() {
    return await this.prisma.project.findMany();
  }

  async $createProject(name: string, description: string) {
    return await this.prisma.project.create({
      data: {
        name,
        description,
      },
    });
  }

  async $updateProject(id: number, name: string, description: string) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) {
      throw new Error('Project not found');
    }
    return await this.prisma.project.update({
      where: { id },
      data: { name, description },
    });
  }

  async $deleteProject(id: number) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) {
      throw new Error('Project not found');
    }
    return await this.prisma.project.delete({ where: { id } });
  }
}

export default new ProjectService();