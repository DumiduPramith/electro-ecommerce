import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Home} from './user/core/home/interfaces'
import {TopHeader} from './user/core/interfaces'

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
        new_products: true,
        new_product_items: {
          0: {
            product_img: '/assets/img/product01.png',
            category: 'laptop',
            product_name: 'product_name_goes_here',
            product_price: 100,
            old_price: 200,
            stars: 4,
          },
          1: {
            product_img: '/assets/img/product05.png',
            category: 'laptop',
            product_name: 'product_name_goes_here',
            product_price: 980,
            old_price: 1000,
            stars: 4,
          },
          2: {
            product_img: '/assets/img/product02.png',
            category: 'laptop',
            product_name: 'product_name_goes_here',
            product_price: 720,
            old_price: 800,
          },
          3: {
            product_img: '/assets/img/product03.png',
            category: 'laptop',
            product_name: 'product_name_goes_here',
            product_price: 850,
            stars: 4,
          },
          4: {
            product_img: '/assets/img/product04.png',
            category: 'laptop',
            product_name: 'product_name_goes_here',
            product_price: 550,
            stars: 2,
          },
        },
      },
    }
    return top_header
  }
}
