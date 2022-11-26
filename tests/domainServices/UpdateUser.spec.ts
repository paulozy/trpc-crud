import { UpdateUserUseCase } from '../../src/domain/usecases/User/UpdateUserUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const userRepository = new InMemoryRepositoryFactory()
  return new UpdateUserUseCase(userRepository)
}

describe('Update a user Domain Servic', () => {
  test('should update a user on success', async () => {
    const sut = makeSut()

    const result = await sut.update('c569dba5-783a-4bb1-90d2-a2ce521feb96', {
      id: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      name: 'Paulo Abreu',
      email: 'paulo@gmail.com',
      password: '123456789asa',
    })

    expect(result).toEqual({
      id: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      name: 'Paulo Abreu',
      email: 'paulo@gmail.com',
      password: '123456789asa',
    })
  })
})
