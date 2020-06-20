export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  readonly user: User;
}
