export class Login {
  constructor(public email: string, public password: string) {}
}

export class NewAccount {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public role: string,
    public password: string,
    public passwordConfirm: string
  ) {}
}
