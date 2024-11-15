interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];
  private nextId: number = 1;

  listUsers(): User[] {
    return this.users;
  }

  $createUser(name: string, email: string): User {
    const newUser: User = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  $updateUser(id: number, name: string, email: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error(`User with ID ${id} not found`);
    user.name = name;
    user.email = email;
    return user;
  }

  $deleteUser(id: number): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error(`User with ID ${id} not found`);
    const [deletedUser] = this.users.splice(userIndex, 1);
    return deletedUser;
  }

  findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  userExists(id: number): boolean {
    return this.users.some(user => user.id === id);
  }

  byId(id: number): User {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error(`User with ID ${id} not found`);
    return user;
  }
}

export default new UserService();