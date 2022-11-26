import { User } from '../../src/domain/entities/User'
import { SaveUserUseCase } from '../../src/domain/usecases/User/SaveUserUseCase'
import { UserInMemoryRepository } from '../../src/shared/infra/repositories/inMemory/UserInMemoryRepository'

const makeSut = () => {
  const userRepository = new UserInMemoryRepository()
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
