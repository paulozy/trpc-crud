import { IUserRepository } from '../../repositories/IUserRepository'

export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}
