import { FindPostByAuthorIdUseCase } from '../../src/domain/usecases/Post/FindPostByAuthorIdUseCase'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

const makeSut = () => {
  const postRepository = new InMemoryRepositoryFactory()
  return new FindPostByAuthorIdUseCase(postRepository)
}

describe('Find Post By Author ID Domain Service', () => {
  test('should return all user posts', async () => {
    const sut = makeSut()

    const result = await sut.findByAuthorId(
      'c569dba5-783a-4bb1-90d2-a2ce521feb96'
    )

    expect(result).toEqual([
      {
        id: '837ad5dc-8096-4157-80d5-083413ff256a',
        title: 'Utilizando tRPC no backend',
        content: 'Utilizando tRPC no backend lorem ipsum dolor sit amet',
        authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      },
      {
        id: 'adc1724a-88bf-432e-92c9-d41786ab9a56',
        title: 'any_title',
        content: 'any_content',
        authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
      },
    ])
  })
})
