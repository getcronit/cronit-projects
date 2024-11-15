class UserService {
  private users: { id: number; name: string; email: string }[] = [];
  private nextId: number = 1;

  listUsers() {
    return this.users;
  }

  createUser(name: string, email: string) {
    const newUser = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, name: string, email: string) {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error('User not found');
    user.name = name;
    user.email = email;
    return user;
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    const deletedUser = this.users.splice(userIndex, 1);
    return deletedUser[0];
  }
}

export default new UserService();