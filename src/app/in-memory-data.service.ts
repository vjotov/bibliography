import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bibItems = [
      { id: 11, name: 'One Station Away: A Novel ' },
      { id: 12, name: 'SuperCell: Critical Incident #1' },
      { id: 13, name: 'Dawn of the Hunter - An Action Thriller Novel' },
      { id: 14, name: 'Dawn Girl: A Gripping Serial Killer Thriller' },
      { id: 15, name: 'Glimpse of Death: A Riveting Serial Killer Thriller' },
      { id: 16, name: 'First Strike' },
      { id: 17, name: 'Year One: Chronicles of the One, Book 1' },
      { id: 18, name: 'Good Guys Love Dogs' },
      { id: 19, name: 'Winter Wishes' },
      { id: 20, name: 'Sugarplum Way' }
    ];
    return {bibItems};
  }
}
