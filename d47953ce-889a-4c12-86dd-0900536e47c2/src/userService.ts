import { PrismaClient } from '@prisma/client';

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async addUser(name: string, email: string) {
    return await this.prisma.user.create({
      data: { name, email },
    });
  }

  async listUsers() {
    return await this.prisma.user.findMany();
  }
}
