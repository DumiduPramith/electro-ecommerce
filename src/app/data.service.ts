import {InMemoryDbService} from 'angular-in-memory-web-api'
import {NavBar, TopHeader} from './core/interfaces'

export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let top_header: {
      header: TopHeader
      navbar: NavBar
    } = {
      header: {
        phone: 718256042,
        email: 'dumidu42@gmail.com',
        address: '506/1 maha vithikuliya',
        currency: 'USD',
        categories: {
          1: 'Category 1',
          2: 'Category 2',
          3: 'Category 3',
        },
      },
      navbar: {
        0: 'Home',
        1: 'Hot Deals',
        2: 'Laptops',
        3: 'Smartphone',
        4: 'Cameras',
        5: 'Accessories',
      },
    }
    return top_header
  }
}
