export class UserService {
  private users: { id: number; name: string }[] = [];

  addUser(name: string): { id: number; name: string } {
    const newUser = { id: this.users.length + 1, name };
    this.users.push(newUser);
    return newUser;
  }

  listUsers(): { id: number; name: string }[] {
    return this.users;
  }
}