import { User } from '../src/domain/entities/User'

describe('User Entity', () => {
  const postInput = {
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
  }

  test('Should create a new user on succes', () => {
    const user = new User(postInput)

    expect(user.id).toBeTruthy()
    expect(user.name).toBe(postInput.name)
    expect(user.email).toBe(postInput.email)
    expect(user.password).toBe(postInput.password)
  })
})
