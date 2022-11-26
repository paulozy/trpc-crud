import crypto from 'node:crypto'

export class User {
  id?: string
  name: string
  email: string
  password: string

  constructor({ id, name, email, password }: User) {
    this.name = name
    this.email = email
    this.password = password

    if (!id) {
      this.id = crypto.randomBytes(8).toString('hex')
    }
  }
}
