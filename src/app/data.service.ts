import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Home} from './core/home/interfaces'
import {TopHeader} from './core/interfaces'

export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let top_header: {
      header: TopHeader
      home: Home
    } = {
      header: {
        phone: 718256043,
        email: 'dumidu42@gmail.com',
        address: '506/1 maha vithikuliya',
        currency: 'USD',
        categories: {
          1: 'Category 1',
          2: 'Category 2',
          3: 'Category 3',
        },
        navbar: {
          0: 'Home',
          1: 'Hot Deals',
          2: 'Laptops',
          3: 'Smartphone',
          4: 'Cameras',
          5: 'Accessories',
        },
      },
      home: {
        collection: true,
        collection_items: {
          laptop: '/assets/img/shop01.png',
          accessories: '/assets/img/shop03.png',
          cameras: '/assets/img/shop02.png',
        },
      },
    }
    return top_header
  }
}
