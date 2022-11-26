import { FindUserByIdUseCase } from '../../src/domain/usecases/User/FindUserByIdUseCase'
import { UserInMemoryRepository } from '../../src/shared/infra/repositories/inMemory/UserInMemoryRepository'

const makeSut = () => {
  const userRepository = new UserInMemoryRepository()
  return new FindUserByIdUseCase(userRepository)
}

describe('Find user by id Domain Servic', () => {
  test('should return a user on success', async () => {
    const sut = makeSut()

    const result = await sut.findById('c569dba5-783a-4bb1-90d2-a2ce521feb96')

    expect(result).toEqual({
      id: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      name: 'any_name_2',
      email: 'any_email_2',
      password: 'any_password_2',
    })
  })
})
