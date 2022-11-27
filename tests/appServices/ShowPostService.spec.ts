import { ShowPostService } from '../../src/app/services/posts/ShowPostService'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

interface SutTypes {
  sut: ShowPostService
}

const makeSut = (): SutTypes => {
  const fakeRepositoryFactory = new InMemoryRepositoryFactory()
  const sut = new ShowPostService(fakeRepositoryFactory)

  return {
    sut,
  }
}

describe('Show Post Service', () => {
  test('Should show a post on success', async () => {
    const { sut } = makeSut()
    const response = await sut.execute('837ad5dc-8096-4157-80d5-083413ff256a')

    expect(response.statusCode).toBe(200)
    expect(response.message).toBe('Showed successfully')

    expect(response.result).toEqual({
      id: '837ad5dc-8096-4157-80d5-083413ff256a',
      title: 'Utilizando tRPC no backend',
      content: 'Utilizando tRPC no backend lorem ipsum dolor sit amet',
      authorId: 'c569dba5-783a-4bb1-90d2-a2ce521feb96',
    })
  })
})
