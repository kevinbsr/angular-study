export class Person {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public confirmEmail: string,
    public password: string
  ) { }
}