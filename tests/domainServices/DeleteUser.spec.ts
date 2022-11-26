import { DeleteUserUseCase } from '../../src/domain/usecases/User/DeleteUserUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const userRepository = new InMemoryRepositoryFactory()
  return new DeleteUserUseCase(userRepository)
}

describe('Delete a user Domain Servic', () => {
  test('should delete a user on success', async () => {
    const sut = makeSut()

    const result = await sut.delete('c569dba5-783a-4bb1-90d2-a2ce521feb96')

    expect(result).toBeUndefined()
  })
})
