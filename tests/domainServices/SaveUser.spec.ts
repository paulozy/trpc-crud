import { User } from '../../src/domain/entities/User'
import { SaveUserUseCase } from '../../src/domain/usecases/User/SaveUserUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const userRepository = new InMemoryRepositoryFactory()
  return new SaveUserUseCase(userRepository)
}

describe('Save User Domain Service', () => {
  const fakeUser: User = {
    id: 'any_post_id',
    name: 'any_name',
    email: 'any_email',
    password: 'any_password',
  }

  test('should save a new user', async () => {
    const sut = makeSut()
    const result = await sut.save(fakeUser)

    expect(result).toEqual(fakeUser)
  })
})
