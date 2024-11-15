interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  /**
   * Retrieves the list of all users.
   * @returns An array of User objects.
   */
  listUsers(): User[] {
    return this.users;
  }

  /**
   * Creates a new user and adds it to the list.
   * @param name - The name of the user.
   * @param email - The email of the user.
   * @returns The newly created User object.
   */
  $createUser(name: string, email: string): User {
    const newUser: User = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * Updates an existing user's information.
   * @param id - The ID of the user to update.
   * @param name - The new name for the user.
   * @param email - The new email for the user.
   * @returns The updated User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  $updateUser(id: number, name: string, email: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error(`User with ID ${id} not found`);
    user.name = name;
    user.email = email;
    return user;
  }

  /**
   * Deletes a user from the list.
   * @param id - The ID of the user to delete.
   * @returns The deleted User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  $deleteUser(id: number): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error(`User with ID ${id} not found`);
    const [deletedUser] = this.users.splice(userIndex, 1);
    return deletedUser;
  }

  /**
   * Finds a user by their email address.
   * @param email - The email of the user to find.
   * @returns The User object if found, otherwise undefined.
   */
  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  /**
   * Checks if a user exists by their ID.
   * @param id - The ID of the user to check.
   * @returns True if the user exists, otherwise false.
   */
  userExists(id: number): boolean {
    return this.users.some(user => user.id === id);
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns The User object.
   * @throws Will throw an error if the user with the given ID is not found.
   */
  byId(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error(`User with ID ${id} not found`);
    return user;
  }
}

export default new UserService();