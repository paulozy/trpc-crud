import { UpdatePostService } from '../../src/app/services/posts/UpdatePostService'
import { InMemoryRepositoryFactory } from '../../src/shared/infra/factory/InMemoryRepositoryFactory'

interface SutTypes {
  sut: UpdatePostService
}

const makeSut = (): SutTypes => {
  const fakeRepositoryFactory = new InMemoryRepositoryFactory()
  const sut = new UpdatePostService(fakeRepositoryFactory)

  return {
    sut,
  }
}

describe('update Post Service', () => {
  test('Should show a post on success', async () => {
    const { sut } = makeSut()

    const updateInput = {
      title: 'Fazendo compras',
      content: 'fiz compras no mercado',
      authorId: 'any_author_id',
    }

    const response = await sut.execute(
      '837ad5dc-8096-4157-80d5-083413ff256a',
      updateInput
    )

    expect(response.statusCode).toBe(200)
    expect(response.message).toBe('Updated successfully')

    expect(response.result).toEqual({
      id: '837ad5dc-8096-4157-80d5-083413ff256a',
      title: 'Fazendo compras',
      content: 'fiz compras no mercado',
      authorId: 'any_author_id',
    })
  })
})
