import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return this.repository
      .createQueryBuilder()
      .select()
      .where(`LOWER(title) LIKE :title`, {
        title: `%${param.toLowerCase()}%`
      })
      .getMany()
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(`
      SELECT COUNT(*) AS count
      FROM games
    `);
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return this.repository
      .createQueryBuilder()
      .select([
        'u.first_name',
        'u.last_name',
        'u.email',
      ])
      .from(User, 'u')
      .innerJoin('users_games_games', 'ug', 'ug.usersId = u.id')
      .where('ug.gamesId = :id', {
        id
      })
      .getMany()
  }
}
