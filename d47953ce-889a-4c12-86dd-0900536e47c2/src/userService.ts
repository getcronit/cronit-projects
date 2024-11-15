import { PrismaClient } from '@prisma/client';

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Retrieves the list of all users.
   * @returns An array of User objects.
   */
  async listUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  /**
   * Creates a new user and adds it to the list.
   * @param name - The name of the user.
   * @param email - The email of the user.
   * @returns The newly created User object.
   */
  async $createUser(name: string, email: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  /**
   * Updates an existing user's information.
   * @param id - The ID of the user to update.
   * @param name - The new name for the user.
   * @param email - The new email for the user.
   * @returns The updated User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  async $updateUser(id: number, name: string, email: string): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { name, email },
    });
  }

  /**
   * Deletes a user from the list.
   * @param id - The ID of the user to delete.
   * @returns The deleted User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  async $deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  /**
   * Finds a user by their email address.
   * @param email - The email of the user to find.
   * @returns The User object if found, otherwise undefined.
   */
  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  /**
   * Checks if a user exists by their ID.
   * @param id - The ID of the user to check.
   * @returns True if the user exists, otherwise false.
   */
  async userExists(id: number): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return !!user;
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns The User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  async byId(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new Error(`User with ID ${id} not found`);
    return user;
  }
}

export default new UserService();